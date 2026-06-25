package main

import (
	"crypto/rand"
	"database/sql"
	"encoding/hex"
	"encoding/json"
	"os"
	"path/filepath"
	"time"

	_ "modernc.org/sqlite"
)

type Highlight struct {
	ID     string `json:"id"`
	Text   string `json:"text"`
	Prefix string `json:"prefix"`
	Suffix string `json:"suffix"`
	Color  string `json:"color"`
	Note   string `json:"note"`
}

type StrokePoint struct {
	X float64 `json:"x"`
	Y float64 `json:"y"`
}

type Stroke struct {
	ID     string        `json:"id,omitempty"`
	Color  string        `json:"color"`
	Width  float64       `json:"width"`
	Points []StrokePoint `json:"points"`
}

type PageAnnotations struct {
	Highlights []Highlight `json:"highlights"`
	Strokes    []Stroke    `json:"strokes"`
}

type AnnotationStore struct {
	db *sql.DB
}

func openStore() (*AnnotationStore, string, error) {
	path, err := dbPath()
	if err != nil {
		return nil, "", err
	}
	if err := os.MkdirAll(filepath.Dir(path), 0755); err != nil {
		return nil, "", err
	}

	db, err := sql.Open("sqlite", path)
	if err != nil {
		return nil, "", err
	}
	db.SetMaxOpenConns(1)

	s := &AnnotationStore{db: db}
	if err := s.migrate(); err != nil {
		db.Close()
		return nil, "", err
	}
	return s, path, nil
}

func dbPath() (string, error) {
	// 优先使用工作目录（go run . 或从项目根目录启动 exe）
	if wd, err := os.Getwd(); err == nil {
		if info, err := os.Stat(filepath.Join(wd, "book")); err == nil && info.IsDir() {
			return filepath.Join(wd, "data", "annotations.db"), nil
		}
	}
	exe, err := os.Executable()
	if err != nil {
		return "data/annotations.db", nil
	}
	return filepath.Join(filepath.Dir(exe), "data", "annotations.db"), nil
}

func (s *AnnotationStore) migrate() error {
	_, err := s.db.Exec(`
		CREATE TABLE IF NOT EXISTS annotations (
			id TEXT PRIMARY KEY,
			page_path TEXT NOT NULL,
			type TEXT NOT NULL CHECK(type IN ('highlight', 'stroke')),
			text TEXT NOT NULL DEFAULT '',
			prefix TEXT NOT NULL DEFAULT '',
			suffix TEXT NOT NULL DEFAULT '',
			color TEXT NOT NULL DEFAULT '#ffeb3b',
			note TEXT NOT NULL DEFAULT '',
			stroke_data TEXT NOT NULL DEFAULT '',
			created_at INTEGER NOT NULL,
			updated_at INTEGER NOT NULL
		);
		CREATE INDEX IF NOT EXISTS idx_annotations_page ON annotations(page_path);
	`)
	return err
}

func (s *AnnotationStore) Close() error {
	return s.db.Close()
}

func (s *AnnotationStore) GetPage(pagePath string) (*PageAnnotations, error) {
	rows, err := s.db.Query(`
		SELECT id, type, text, prefix, suffix, color, note, stroke_data
		FROM annotations WHERE page_path = ? ORDER BY created_at
	`, pagePath)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	result := &PageAnnotations{
		Highlights: []Highlight{},
		Strokes:    []Stroke{},
	}

	for rows.Next() {
		var id, typ, text, prefix, suffix, color, note, strokeData string
		if err := rows.Scan(&id, &typ, &text, &prefix, &suffix, &color, &note, &strokeData); err != nil {
			return nil, err
		}
		switch typ {
		case "highlight":
			result.Highlights = append(result.Highlights, Highlight{
				ID: id, Text: text, Prefix: prefix, Suffix: suffix, Color: color, Note: note,
			})
		case "stroke":
			var stroke Stroke
			stroke.ID = id
			stroke.Color = color
			stroke.Width = 2
			if strokeData != "" {
				_ = json.Unmarshal([]byte(strokeData), &stroke)
				stroke.ID = id
			}
			result.Strokes = append(result.Strokes, stroke)
		}
	}
	return result, rows.Err()
}

func (s *AnnotationStore) CreateHighlight(pagePath string, h Highlight) error {
	now := time.Now().Unix()
	_, err := s.db.Exec(`
		INSERT INTO annotations (id, page_path, type, text, prefix, suffix, color, note, created_at, updated_at)
		VALUES (?, ?, 'highlight', ?, ?, ?, ?, ?, ?, ?)
	`, h.ID, pagePath, h.Text, h.Prefix, h.Suffix, h.Color, h.Note, now, now)
	return err
}

func (s *AnnotationStore) UpdateHighlight(id string, note, color string) error {
	now := time.Now().Unix()
	_, err := s.db.Exec(`
		UPDATE annotations SET note = ?, color = ?, updated_at = ? WHERE id = ? AND type = 'highlight'
	`, note, color, now, id)
	return err
}

func (s *AnnotationStore) CreateStroke(pagePath string, stroke Stroke) error {
	if stroke.ID == "" {
		stroke.ID = newID()
	}
	data, err := json.Marshal(stroke)
	if err != nil {
		return err
	}
	now := time.Now().Unix()
	_, err = s.db.Exec(`
		INSERT INTO annotations (id, page_path, type, color, stroke_data, created_at, updated_at)
		VALUES (?, ?, 'stroke', ?, ?, ?, ?)
	`, stroke.ID, pagePath, stroke.Color, string(data), now, now)
	return err
}

func (s *AnnotationStore) Delete(id string) error {
	_, err := s.db.Exec(`DELETE FROM annotations WHERE id = ?`, id)
	return err
}

func (s *AnnotationStore) DeletePage(pagePath string) error {
	_, err := s.db.Exec(`DELETE FROM annotations WHERE page_path = ?`, pagePath)
	return err
}

func newID() string {
	b := make([]byte, 8)
	if _, err := rand.Read(b); err != nil {
		return time.Now().Format("20060102150405")
	}
	return hex.EncodeToString(b)
}
