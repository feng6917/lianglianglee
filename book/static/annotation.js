(function () {
    'use strict';

    var STORAGE_KEY = 'll_annotations';
    var CONFIG_KEY = 'll_annotate_config';
    var DEFAULT_CONFIG = {
        position: 'top-right',
        theme: 'dark',
        hoverExpand: true,
        pinExpanded: false,
        top: 72,
        right: 16,
        highlightColors: ['#FFD60A', '#30D158', '#FF9F0A', '#64D2FF', '#BF5AF2', '#FF6B8B'],
        drawColors: ['#FF453A', '#0A84FF', '#30D158', '#FF9F0A', '#BF5AF2'],
        defaultHighlightColor: '#FFD60A',
        defaultDrawColor: '#FF453A',
        highlightOpacity: 0.38,
        selectionPopup: false
    };
    var config = {};
    var HIGHLIGHT_COLORS = DEFAULT_CONFIG.highlightColors.slice();
    var DRAW_COLORS = DEFAULT_CONFIG.drawColors.slice();
    var activeColor = DEFAULT_CONFIG.defaultHighlightColor;
    var drawColor = DEFAULT_CONFIG.defaultDrawColor;

    var pagePath = decodeURIComponent(window.location.pathname);
    var contentEl = null;
    var pageData = { highlights: [], strokes: [] };
    var mode = 'normal';
    var canvas = null;
    var ctx = null;
    var canvasWrap = null;
    var isDrawing = false;
    var currentStroke = null;
    var toolbar = null;
    var dockEl = null;
    var savedRange = null;
    var settingsPanel = null;

    var ICON = {
        dock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/></svg>',
        highlight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>',
        note: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3 1.5-5.5A4 4 0 0 1 4 15V5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>',
        draw: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M18.37 2.63L21 5.26l-11 11-2.5.5.5-2.5 11-11z"/><path d="M3 21l3.5-1"/></svg>',
        settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
    };

    function init() {
        contentEl = getContentEl();
        if (!contentEl) return;

        loadConfig().then(function () {
            createDock();
            createCanvas();
            bindEvents();
            window.addEventListener('resize', onResize);

            return loadPageData();
        }).then(function (data) {
            pageData = data;
            restoreHighlights();
            redrawCanvas();
            migrateFromLocalStorage();
        });
    }

    function getContentEl() {
        var title = document.getElementById('title');
        if (!title) return null;
        var el = title.nextElementSibling;
        return el && el.tagName === 'DIV' ? el : null;
    }

    function loadConfig() {
        return fetch('/static/annotation-config.json')
            .then(function (r) { return r.ok ? r.json() : {}; })
            .catch(function () { return {}; })
            .then(function (fileCfg) {
                var userCfg = {};
                try {
                    userCfg = JSON.parse(localStorage.getItem(CONFIG_KEY) || '{}');
                } catch (e) { /* ignore */ }
                config = Object.assign({}, DEFAULT_CONFIG, fileCfg, userCfg);
                HIGHLIGHT_COLORS = config.highlightColors.slice();
                DRAW_COLORS = config.drawColors.slice();
                activeColor = config.defaultHighlightColor;
                drawColor = config.defaultDrawColor;
            });
    }

    function saveUserConfig(partial) {
        Object.assign(config, partial);
        try {
            var saved = JSON.parse(localStorage.getItem(CONFIG_KEY) || '{}');
            localStorage.setItem(CONFIG_KEY, JSON.stringify(Object.assign(saved, partial)));
        } catch (e) { /* ignore */ }
        applyDockConfig();
    }

    function hexToRgba(hex, alpha) {
        hex = (hex || '#FFD60A').replace('#', '');
        if (hex.length === 3) {
            hex = hex.split('').map(function (c) { return c + c; }).join('');
        }
        var r = parseInt(hex.slice(0, 2), 16);
        var g = parseInt(hex.slice(2, 4), 16);
        var b = parseInt(hex.slice(4, 6), 16);
        return 'rgba(' + r + ',' + g + ',' + b + ',' + (alpha != null ? alpha : config.highlightOpacity) + ')';
    }

    function applyDockConfig() {
        if (!dockEl) return;
        dockEl.style.setProperty('--ll-dock-top', config.top + 'px');
        dockEl.style.setProperty('--ll-dock-right', config.right + 'px');
        dockEl.classList.toggle('pinned', !!config.pinExpanded);
        dockEl.classList.toggle('theme-light', config.theme === 'light');
        dockEl.classList.toggle('theme-dark', config.theme !== 'light');
    }

    function getBookContent() {
        return document.querySelector('.book-content');
    }

    // --- API ---

    function showToast(msg) {
        var el = document.createElement('div');
        el.className = 'll-annotate-toast';
        el.textContent = msg;
        document.body.appendChild(el);
        setTimeout(function () { el.remove(); }, 3000);
    }

    function api(url, options) {
        options = options || {};
        options.headers = Object.assign({ 'Content-Type': 'application/json' }, options.headers || {});
        return fetch('/api/annotations' + url, options).then(function (res) {
            if (!res.ok) {
                return res.json().then(function (err) {
                    throw new Error(err.error || res.statusText);
                }).catch(function () {
                    throw new Error('请求失败 (' + res.status + ')，请确认已用新版 lianglianglee.exe 启动服务');
                });
            }
            return res.json();
        });
    }

    function loadPageData() {
        return api('?page=' + encodeURIComponent(pagePath)).catch(function (e) {
            console.warn('加载标注失败', e);
            return { highlights: [], strokes: [] };
        });
    }

    function saveHighlight(h) {
        return api('/highlight', {
            method: 'POST',
            body: JSON.stringify({ page_path: pagePath, highlight: h })
        }).catch(function (e) {
            showToast('保存高亮失败: ' + e.message);
            throw e;
        });
    }

    function updateHighlight(id, note, color) {
        return api('/highlight/' + encodeURIComponent(id), {
            method: 'PUT',
            body: JSON.stringify({ note: note, color: color })
        });
    }

    function deleteHighlight(id) {
        return api('/' + encodeURIComponent(id), { method: 'DELETE' });
    }

    function saveStroke(stroke) {
        return api('/stroke', {
            method: 'POST',
            body: JSON.stringify({ page_path: pagePath, stroke: stroke })
        }).then(function (res) {
            if (res.id) stroke.id = res.id;
            return res;
        });
    }

    function clearPageAPI() {
        return api('?page=' + encodeURIComponent(pagePath), { method: 'DELETE' });
    }

    function migrateFromLocalStorage() {
        try {
            var raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return;
            var all = JSON.parse(raw);
            var local = all[pagePath];
            if (!local) return;
            if (pageData.highlights.length > 0 || pageData.strokes.length > 0) {
                localStorage.removeItem(STORAGE_KEY);
                return;
            }
            var tasks = [];
            (local.highlights || []).forEach(function (h) {
                pageData.highlights.push(h);
                tasks.push(saveHighlight(h));
            });
            (local.strokes || []).forEach(function (s) {
                pageData.strokes.push(s);
                tasks.push(saveStroke(s));
            });
            Promise.all(tasks).then(function () {
                delete all[pagePath];
                if (Object.keys(all).length === 0) {
                    localStorage.removeItem(STORAGE_KEY);
                } else {
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
                }
                restoreHighlights();
                redrawCanvas();
            });
        } catch (e) {
            console.warn('迁移本地标注失败', e);
        }
    }

    function uid() {
        return Date.now().toString(36) + Math.random().toString(36).slice(2, 9);
    }

    // --- Dock（右上角） ---

    function colorDots(colors, group, active) {
        return colors.map(function (c) {
            var cls = 'll-annotate-color' + (c === active ? ' active' : '');
            return '<span class="' + cls + '" data-color="' + c + '" data-group="' + group + '" style="background:' + c + '" title="' + c + '"></span>';
        }).join('');
    }

    function createDock() {
        dockEl = document.createElement('div');
        dockEl.className = 'll-annotate-dock theme-dark';
        dockEl.innerHTML =
            '<div class="ll-annotate-dock-panel">' +
            '<div class="ll-annotate-dock-actions">' +
            '<button class="ll-annotate-dock-btn" data-action="highlight" title="高亮">' + ICON.highlight + '<span>高亮</span></button>' +
            '<button class="ll-annotate-dock-btn" data-action="note" title="批注">' + ICON.note + '<span>批注</span></button>' +
            '<button class="ll-annotate-dock-btn" data-action="draw" title="画笔">' + ICON.draw + '<span>画笔</span></button>' +
            '</div>' +
            '<div class="ll-annotate-dock-colors">' +
            '<div class="ll-annotate-color-row ll-annotate-color-group" data-group="highlight">' +
            '<span class="ll-annotate-color-label">高亮</span>' +
            '<div class="ll-annotate-colors">' + colorDots(HIGHLIGHT_COLORS, 'highlight', activeColor) + '</div>' +
            '</div>' +
            '<div class="ll-annotate-color-row ll-annotate-color-group draw-group" data-group="draw">' +
            '<span class="ll-annotate-color-label">画笔</span>' +
            '<div class="ll-annotate-colors">' + colorDots(DRAW_COLORS, 'draw', drawColor) + '</div>' +
            '</div>' +
            '</div>' +
            '<div class="ll-annotate-dock-footer">' +
            '<button data-action="settings" title="设置">' + ICON.settings.replace('width="1.8"', 'width="1.5"') + '</button>' +
            '<button data-action="clear" class="danger" title="清除本页">清除</button>' +
            '</div>' +
            '</div>' +
            '<button class="ll-annotate-dock-trigger" title="标注工具" aria-label="标注">' + ICON.dock + '</button>';

        toolbar = dockEl;
        document.body.appendChild(dockEl);
        applyDockConfig();

        dockEl.addEventListener('mousedown', function (e) {
            if (e.target.closest('.ll-annotate-color, .ll-annotate-dock-btn[data-action="highlight"], .ll-annotate-dock-btn[data-action="note"]')) {
                e.preventDefault();
            }
        });
        dockEl.addEventListener('click', onDockClick);

        dockEl.querySelector('.ll-annotate-dock-trigger').addEventListener('click', function (e) {
            e.stopPropagation();
            dockEl.classList.toggle('expanded');
        });

        updateColorGroupVisibility();
    }

    function updateColorGroupVisibility() {
        if (!dockEl) return;
        var hl = dockEl.querySelector('[data-group="highlight"]');
        var dr = dockEl.querySelector('.draw-group');
        if (hl) hl.classList.toggle('inactive', mode === 'draw');
        if (dr) dr.classList.toggle('inactive', mode !== 'draw');
    }

    function setActiveColor(group, color) {
        if (group === 'highlight' || group === 'note') {
            activeColor = color;
        } else {
            drawColor = color;
        }
        var g = group === 'note' ? 'highlight' : group;
        if (dockEl) {
            dockEl.querySelectorAll('.ll-annotate-color[data-group="' + g + '"]').forEach(function (el) {
                el.classList.toggle('active', el.dataset.color === color);
            });
        }
        if (popup) {
            popup.querySelectorAll('.ll-annotate-color').forEach(function (el) {
                el.classList.toggle('active', el.dataset.color === color);
            });
        }
    }

    function onDockClick(e) {
        var colorEl = e.target.closest('.ll-annotate-color');
        if (colorEl) {
            setActiveColor(colorEl.dataset.group, colorEl.dataset.color);
            restoreSavedSelection();
            return;
        }

        var btn = e.target.closest('[data-action]');
        if (!btn || btn.classList.contains('ll-annotate-dock-trigger')) return;

        var action = btn.dataset.action;
        if (action === 'highlight') {
            applyHighlightFromSelection(activeColor, '');
        } else if (action === 'note') {
            applyHighlightFromSelection(activeColor, '', true);
        } else if (action === 'draw') {
            toggleDrawMode(btn);
        } else if (action === 'settings') {
            showSettingsPanel();
        } else if (action === 'clear') {
            if (confirm('确定清除本页所有高亮、批注和画图？')) {
                clearPage();
            }
        }
    }

    function showSettingsPanel() {
        hideSettingsPanel();
        var rect = dockEl.getBoundingClientRect();
        settingsPanel = document.createElement('div');
        settingsPanel.className = 'll-annotate-settings';
        settingsPanel.innerHTML =
            '<h4>标注设置</h4>' +
            '<label><span>固定展开工具栏</span><input type="checkbox" id="ll-cfg-pin"' + (config.pinExpanded ? ' checked' : '') + '></label>' +
            '<label><span>浅色主题</span><input type="checkbox" id="ll-cfg-light"' + (config.theme === 'light' ? ' checked' : '') + '></label>' +
            '<label><span>框选后弹出菜单</span><input type="checkbox" id="ll-cfg-popup"' + (config.selectionPopup ? ' checked' : '') + '></label>' +
            '<p style="margin:8px 0 0;font-size:11px;color:rgba(255,255,255,0.4)">修改 book/static/annotation-config.json 可自定义颜色与位置</p>' +
            '<div class="settings-actions">' +
            '<button data-action="reset">恢复默认</button>' +
            '<button data-action="save" class="primary">保存</button>' +
            '</div>';
        settingsPanel.style.top = (rect.bottom + 8) + 'px';
        settingsPanel.style.right = (window.innerWidth - rect.right) + 'px';
        document.body.appendChild(settingsPanel);

        settingsPanel.querySelector('[data-action="save"]').addEventListener('click', function () {
            saveUserConfig({
                pinExpanded: settingsPanel.querySelector('#ll-cfg-pin').checked,
                theme: settingsPanel.querySelector('#ll-cfg-light').checked ? 'light' : 'dark',
                selectionPopup: settingsPanel.querySelector('#ll-cfg-popup').checked
            });
            hideSettingsPanel();
        });
        settingsPanel.querySelector('[data-action="reset"]').addEventListener('click', function () {
            localStorage.removeItem(CONFIG_KEY);
            loadConfig().then(function () {
                applyDockConfig();
                hideSettingsPanel();
                showToast('已恢复默认配置，刷新页面生效');
            });
        });
    }

    function hideSettingsPanel() {
        if (settingsPanel) {
            settingsPanel.remove();
            settingsPanel = null;
        }
    }

    function toggleDrawMode(btn) {
        mode = mode === 'draw' ? 'normal' : 'draw';
        dockEl.querySelectorAll('[data-action="draw"]').forEach(function (b) {
            b.classList.toggle('active', mode === 'draw');
        });
        canvasWrap.classList.toggle('drawing', mode === 'draw');
        updateColorGroupVisibility();
    }

    // --- Selection popup ---

    var popup = null;

    function captureSelection() {
        var sel = window.getSelection();
        if (sel && !sel.isCollapsed && sel.toString().trim() && contentEl.contains(sel.anchorNode)) {
            savedRange = sel.getRangeAt(0).cloneRange();
            return true;
        }
        return false;
    }

    function getActiveRange() {
        var sel = window.getSelection();
        if (sel && !sel.isCollapsed && sel.toString().trim() && contentEl.contains(sel.anchorNode)) {
            savedRange = sel.getRangeAt(0).cloneRange();
            return savedRange.cloneRange();
        }
        if (savedRange) {
            return savedRange.cloneRange();
        }
        return null;
    }

    function showSelectionPopup(rect) {
        hideSelectionPopup();
        if (!captureSelection()) return;

        popup = document.createElement('div');
        popup.className = 'll-annotate-popup';
        popup.innerHTML =
            '<div class="ll-annotate-popup-inner">' +
            '<div class="ll-annotate-popup-colors">' + colorDots(HIGHLIGHT_COLORS, 'highlight', activeColor) + '</div>' +
            '<div class="ll-annotate-popup-divider"></div>' +
            '<button class="ll-annotate-popup-action" data-action="highlight">' + ICON.highlight + '<span>高亮</span></button>' +
            '<button class="ll-annotate-popup-action" data-action="note">' + ICON.note + '<span>批注</span></button>' +
            '</div>' +
            '<div class="ll-annotate-popup-caret"></div>';
        document.body.appendChild(popup);

        positionSelectionPopup(popup, rect);

        popup.addEventListener('mousedown', function (e) {
            e.preventDefault();
        });

        popup.addEventListener('click', function (e) {
            var colorEl = e.target.closest('.ll-annotate-color');
            if (colorEl) {
                setActiveColor('highlight', colorEl.dataset.color);
                restoreSavedSelection();
                return;
            }
            var b = e.target.closest('.ll-annotate-popup-action');
            if (!b) return;
            if (b.dataset.action === 'highlight') {
                applyHighlightFromSelection(activeColor, '');
            } else if (b.dataset.action === 'note') {
                applyHighlightFromSelection(activeColor, '', true);
            }
            hideSelectionPopup();
        });
    }

    function positionSelectionPopup(el, rect) {
        var gap = 10;
        var pw = el.offsetWidth;
        var left = rect.left + rect.width / 2 - pw / 2;
        left = Math.max(12, Math.min(left, window.innerWidth - pw - 12));
        var top = rect.top - el.offsetHeight - gap;
        var caretBelow = false;
        if (top < 12) {
            top = rect.bottom + gap;
            caretBelow = true;
        }
        el.style.left = left + 'px';
        el.style.top = top + 'px';
        el.classList.toggle('caret-below', caretBelow);
    }

    function restoreSavedSelection() {
        if (!savedRange) return;
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(savedRange.cloneRange());
    }

    function updateDockSelectionState() {
        if (!dockEl) return;
        dockEl.classList.toggle('has-selection', !!savedRange);
    }

    function clearSavedSelection() {
        savedRange = null;
        updateDockSelectionState();
        hideSelectionPopup();
    }

    function hideSelectionPopup() {
        if (popup) {
            popup.remove();
            popup = null;
        }
    }

    // --- Highlights ---

    function getContext(text, index, len) {
        return {
            prefix: text.slice(Math.max(0, index - 40), index),
            suffix: text.slice(index + len, index + len + 40)
        };
    }

    function getTextNodeMap(element) {
        var walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
            acceptNode: function (node) {
                if (node.parentElement && node.parentElement.closest('mark.ll-highlight')) {
                    return NodeFilter.FILTER_REJECT;
                }
                return NodeFilter.FILTER_ACCEPT;
            }
        });
        var fullText = '';
        var map = [];
        while (walker.nextNode()) {
            var node = walker.currentNode;
            var start = fullText.length;
            fullText += node.textContent;
            map.push({ node: node, start: start, end: fullText.length });
        }
        return { fullText: fullText, map: map };
    }

    function findTextPosition(element, searchText, prefix, suffix) {
        var data = getTextNodeMap(element);
        var fullText = data.fullText;
        var map = data.map;
        var searchFrom = 0;

        while (searchFrom < fullText.length) {
            var idx = fullText.indexOf(searchText, searchFrom);
            if (idx === -1) break;

            var ctx = getContext(fullText, idx, searchText.length);
            var prefixOk = !prefix || ctx.prefix === prefix || ctx.prefix.endsWith(prefix) || prefix.endsWith(ctx.prefix);
            var suffixOk = !suffix || ctx.suffix === suffix || ctx.suffix.startsWith(suffix) || suffix.startsWith(ctx.suffix);

            if (prefixOk && suffixOk) {
                return { start: idx, end: idx + searchText.length, map: map };
            }
            searchFrom = idx + 1;
        }
        return null;
    }

    function offsetToRange(map, start, end) {
        var startNode, startOffset, endNode, endOffset;

        for (var i = 0; i < map.length; i++) {
            var entry = map[i];
            if (startNode === undefined && start >= entry.start && start <= entry.end) {
                startNode = entry.node;
                startOffset = start - entry.start;
            }
            if (end >= entry.start && end <= entry.end) {
                endNode = entry.node;
                endOffset = end - entry.start;
            }
        }
        if (!startNode || !endNode) return null;

        var range = document.createRange();
        range.setStart(startNode, startOffset);
        range.setEnd(endNode, endOffset);
        return range;
    }

    function wrapRange(range, id, color, note) {
        var mark = document.createElement('mark');
        mark.className = 'll-highlight';
        if (note) mark.classList.add('has-note');
        mark.dataset.id = id;
        mark.style.backgroundColor = hexToRgba(color);
        if (note) mark.dataset.note = note;

        try {
            range.surroundContents(mark);
        } catch (e) {
            var fragment = range.extractContents();
            mark.appendChild(fragment);
            range.insertNode(mark);
        }
        return mark;
    }

    function applyHighlightFromSelection(color, note, openNote) {
        var range = getActiveRange();
        if (!range) return;

        var text = range.toString();
        if (!text.trim()) return;
        if (!contentEl.contains(range.startContainer)) return;

        var data = getTextNodeMap(contentEl);

        var preRange = document.createRange();
        preRange.setStart(contentEl, 0);
        preRange.setEnd(range.startContainer, range.startOffset);
        var startIdx = preRange.toString().length;

        var ctx = getContext(data.fullText, startIdx, text.length);
        var id = uid();
        var h = {
            id: id,
            text: text,
            prefix: ctx.prefix,
            suffix: ctx.suffix,
            color: color,
            note: note || ''
        };

        wrapRange(range, id, color, note || '');
        pageData.highlights.push(h);
        saveHighlight(h).catch(function (e) { console.warn('保存高亮失败', e); });
        clearSavedSelection();
        window.getSelection().removeAllRanges();

        if (openNote) {
            var mark = contentEl.querySelector('mark.ll-highlight[data-id="' + id + '"]');
            if (mark) showNotePanel(mark);
        }
    }

    function restoreHighlights() {
        pageData.highlights.forEach(function (h) {
            if (contentEl.querySelector('mark.ll-highlight[data-id="' + h.id + '"]')) return;

            var pos = findTextPosition(contentEl, h.text, h.prefix, h.suffix);
            if (!pos) return;

            var range = offsetToRange(pos.map, pos.start, pos.end);
            if (!range) return;

            wrapRange(range, h.id, h.color, h.note);
        });
    }

    // --- Notes ---

    var notePanel = null;

    function findHighlight(id) {
        for (var i = 0; i < pageData.highlights.length; i++) {
            if (pageData.highlights[i].id === id) return pageData.highlights[i];
        }
        return null;
    }

    function showNotePanel(mark) {
        hideNotePanel();
        var rect = mark.getBoundingClientRect();
        var id = mark.dataset.id;
        var h = findHighlight(id);
        var currentColor = h ? h.color : mark.style.backgroundColor;

        notePanel = document.createElement('div');
        notePanel.className = 'll-annotate-note-panel';
        notePanel.innerHTML =
            '<div class="note-color-row">' +
            '<span class="ll-annotate-color-label">颜色</span>' +
            '<div class="ll-annotate-colors">' + colorDots(HIGHLIGHT_COLORS, 'note', currentColor) + '</div>' +
            '</div>' +
            '<textarea placeholder="写下批注..."></textarea>' +
            '<div class="note-actions">' +
            '<button data-action="delete">删除</button>' +
            '<button data-action="save" class="primary">保存</button>' +
            '</div>';
        notePanel.querySelector('textarea').value = h && h.note ? h.note : '';
        notePanel.style.left = Math.min(rect.left, window.innerWidth - 300) + 'px';
        notePanel.style.top = (rect.bottom + 8) + 'px';
        document.body.appendChild(notePanel);

        var panelColor = currentColor;

        notePanel.addEventListener('mousedown', function (e) {
            if (e.target.closest('.ll-annotate-color')) {
                e.preventDefault();
            }
        });

        notePanel.querySelector('.ll-annotate-colors').addEventListener('click', function (e) {
            var colorEl = e.target.closest('.ll-annotate-color');
            if (!colorEl) return;
            panelColor = colorEl.dataset.color;
            notePanel.querySelectorAll('.ll-annotate-color').forEach(function (el) {
                el.classList.toggle('active', el.dataset.color === panelColor);
            });
            mark.style.backgroundColor = hexToRgba(panelColor);
        });

        notePanel.querySelector('[data-action="save"]').addEventListener('click', function () {
            var note = notePanel.querySelector('textarea').value.trim();
            if (h) {
                h.note = note;
                h.color = panelColor;
                mark.dataset.note = note;
                mark.style.backgroundColor = hexToRgba(panelColor);
                mark.classList.toggle('has-note', !!note);
                updateHighlight(id, note, panelColor).catch(function (e) { console.warn('更新批注失败', e); });
            }
            hideNotePanel();
        });

        notePanel.querySelector('[data-action="delete"]').addEventListener('click', function () {
            if (h) {
                pageData.highlights = pageData.highlights.filter(function (x) { return x.id !== id; });
                deleteHighlight(id).catch(function (e) { console.warn('删除高亮失败', e); });
            }
            unwrapMark(mark);
            hideNotePanel();
        });
    }

    function hideNotePanel() {
        if (notePanel) {
            notePanel.remove();
            notePanel = null;
        }
    }

    function unwrapMark(mark) {
        var parent = mark.parentNode;
        while (mark.firstChild) {
            parent.insertBefore(mark.firstChild, mark);
        }
        parent.removeChild(mark);
    }

    // --- Drawing ---

    function createCanvas() {
        var bookContent = getBookContent();
        if (!bookContent) return;

        canvasWrap = document.createElement('div');
        canvasWrap.className = 'll-annotate-canvas-wrap';
        canvas = document.createElement('canvas');
        canvasWrap.appendChild(canvas);
        bookContent.style.position = 'relative';
        bookContent.insertBefore(canvasWrap, bookContent.firstChild);

        ctx = canvas.getContext('2d');
        resizeCanvas();

        canvas.addEventListener('mousedown', onDrawStart);
        canvas.addEventListener('mousemove', onDrawMove);
        canvas.addEventListener('mouseup', onDrawEnd);
        canvas.addEventListener('mouseleave', onDrawEnd);
    }

    function resizeCanvas() {
        if (!canvas || !canvasWrap) return;
        var bookContent = getBookContent();
        var h = bookContent.scrollHeight;
        var w = bookContent.clientWidth;
        canvas.width = w;
        canvas.height = h;
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        canvasWrap.style.height = h + 'px';
    }

    function onResize() {
        resizeCanvas();
        redrawCanvas();
    }

    function getCanvasPos(e) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: (e.clientX - rect.left) / rect.width,
            y: (e.clientY - rect.top) / rect.height
        };
    }

    function onDrawStart(e) {
        if (mode !== 'draw') return;
        isDrawing = true;
        var pos = getCanvasPos(e);
        currentStroke = {
            color: drawColor,
            width: 4,
            points: [pos]
        };
    }

    function onDrawMove(e) {
        if (!isDrawing || !currentStroke) return;
        var pos = getCanvasPos(e);
        var pts = currentStroke.points;
        var prev = pts[pts.length - 1];
        pts.push(pos);

        ctx.strokeStyle = currentStroke.color;
        ctx.lineWidth = currentStroke.width;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(prev.x * canvas.width, prev.y * canvas.height);
        ctx.lineTo(pos.x * canvas.width, pos.y * canvas.height);
        ctx.stroke();
    }

    function onDrawEnd() {
        if (!isDrawing || !currentStroke) return;
        isDrawing = false;
        if (currentStroke.points.length > 1) {
            var stroke = currentStroke;
            pageData.strokes.push(stroke);
            saveStroke(stroke).catch(function (e) { console.warn('保存画笔失败', e); });
        }
        currentStroke = null;
    }

    function redrawCanvas() {
        if (!ctx || !canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        pageData.strokes.forEach(function (stroke) {
            var pts = stroke.points;
            if (!pts || pts.length < 2) return;
            ctx.strokeStyle = stroke.color;
            ctx.lineWidth = stroke.width || 4;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.beginPath();
            ctx.moveTo(pts[0].x * canvas.width, pts[0].y * canvas.height);
            for (var i = 1; i < pts.length; i++) {
                ctx.lineTo(pts[i].x * canvas.width, pts[i].y * canvas.height);
            }
            ctx.stroke();
        });
    }

    // --- Clear ---

    function clearPage() {
        clearPageAPI().then(function () {
            pageData = { highlights: [], strokes: [] };
            contentEl.querySelectorAll('mark.ll-highlight').forEach(function (mark) {
                unwrapMark(mark);
            });
            redrawCanvas();
            hideNotePanel();
            hideSelectionPopup();
        }).catch(function (e) {
            console.warn('清除标注失败', e);
            alert('清除失败：' + e.message);
        });
    }

    // --- Events ---

    function bindEvents() {
        document.addEventListener('mouseup', function (e) {
            if (mode === 'draw') return;
            if (e.target.closest('.ll-annotate-dock, .ll-annotate-popup, .ll-annotate-note-panel, .ll-annotate-settings')) return;

            setTimeout(function () {
                if (captureSelection()) {
                    updateDockSelectionState();
                    if (config.selectionPopup) {
                        showSelectionPopup(savedRange.getBoundingClientRect());
                    }
                } else if (!e.target.closest('mark.ll-highlight')) {
                    clearSavedSelection();
                }
            }, 10);
        });

        document.addEventListener('mousedown', function (e) {
            if (e.target.closest('.ll-annotate-dock, .ll-annotate-popup, .ll-annotate-note-panel, .ll-annotate-settings')) {
                return;
            }
            if (!e.target.closest('.ll-annotate-popup, .ll-annotate-note-panel, mark.ll-highlight, .ll-annotate-dock')) {
                hideSelectionPopup();
            }
            if (!e.target.closest('.ll-annotate-note-panel, mark.ll-highlight')) {
                hideNotePanel();
            }
            if (!e.target.closest('.ll-annotate-settings, .ll-annotate-dock [data-action="settings"]')) {
                hideSettingsPanel();
            }
        });

        contentEl.addEventListener('click', function (e) {
            var mark = e.target.closest('mark.ll-highlight');
            if (mark) {
                e.preventDefault();
                showNotePanel(mark);
            }
        });

        document.addEventListener('click', function (e) {
            if (dockEl && !config.pinExpanded && !dockEl.contains(e.target)) {
                dockEl.classList.remove('expanded');
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
