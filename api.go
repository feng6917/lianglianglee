package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func registerAPI(r *gin.Engine, store *AnnotationStore) {
	api := r.Group("/api/annotations")
	{
		api.GET("", func(c *gin.Context) {
			page := c.Query("page")
			if page == "" {
				c.JSON(http.StatusBadRequest, gin.H{"error": "page is required"})
				return
			}
			data, err := store.GetPage(page)
			if err != nil {
				c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
				return
			}
			c.JSON(http.StatusOK, data)
		})

		api.POST("/highlight", func(c *gin.Context) {
			var req struct {
				PagePath string    `json:"page_path"`
				Highlight Highlight `json:"highlight"`
			}
			if err := c.ShouldBindJSON(&req); err != nil {
				c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
				return
			}
			if req.PagePath == "" || req.Highlight.ID == "" {
				c.JSON(http.StatusBadRequest, gin.H{"error": "page_path and highlight.id are required"})
				return
			}
			if err := store.CreateHighlight(req.PagePath, req.Highlight); err != nil {
				c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
				return
			}
			c.JSON(http.StatusOK, gin.H{"ok": true})
		})

		api.PUT("/highlight/:id", func(c *gin.Context) {
			var req struct {
				Note  string `json:"note"`
				Color string `json:"color"`
			}
			if err := c.ShouldBindJSON(&req); err != nil {
				c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
				return
			}
			if err := store.UpdateHighlight(c.Param("id"), req.Note, req.Color); err != nil {
				c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
				return
			}
			c.JSON(http.StatusOK, gin.H{"ok": true})
		})

		api.POST("/stroke", func(c *gin.Context) {
			var req struct {
				PagePath string `json:"page_path"`
				Stroke   Stroke `json:"stroke"`
			}
			if err := c.ShouldBindJSON(&req); err != nil {
				c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
				return
			}
		if req.PagePath == "" {
			c.JSON(http.StatusBadRequest, gin.H{"error": "page_path is required"})
			return
		}
		if req.Stroke.ID == "" {
			req.Stroke.ID = newID()
		}
		if err := store.CreateStroke(req.PagePath, req.Stroke); err != nil {
				c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
				return
			}
			c.JSON(http.StatusOK, gin.H{"ok": true, "id": req.Stroke.ID})
		})

		api.DELETE("/:id", func(c *gin.Context) {
			if err := store.Delete(c.Param("id")); err != nil {
				c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
				return
			}
			c.JSON(http.StatusOK, gin.H{"ok": true})
		})

		api.DELETE("", func(c *gin.Context) {
			page := c.Query("page")
			if page == "" {
				c.JSON(http.StatusBadRequest, gin.H{"error": "page is required"})
				return
			}
			if err := store.DeletePage(page); err != nil {
				c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
				return
			}
			c.JSON(http.StatusOK, gin.H{"ok": true})
		})
	}
}
