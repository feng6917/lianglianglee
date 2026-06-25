package main

import (
	"log"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

func main() {
	store, path, err := openStore()
	if err != nil {
		log.Fatal("open database:", err)
	}
	defer store.Close()
	log.Println("annotations database:", path)

	router := gin.Default()
	registerAPI(router, store)

	bookFS := http.FileServer(http.Dir("./book"))
	router.NoRoute(func(c *gin.Context) {
		if strings.HasPrefix(c.Request.URL.Path, "/api/") {
			c.JSON(http.StatusNotFound, gin.H{"error": "not found"})
			return
		}
		bookFS.ServeHTTP(c.Writer, c.Request)
	})

	router.Run(":8888")
}
