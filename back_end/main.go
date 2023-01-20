package main

import (
	"github.com/gin-gonic/gin"
	"github.com/zennon-sml/GJR2/database"
	"github.com/zennon-sml/GJR2/routes"
	"github.com/zennon-sml/GJR2/services"
)

func main() {
	database.MakeCon()
	router := gin.Default()

	services.SetCORS(router)

	routes.SetUpRoutes(router)
	router.Run(":8000")
}
