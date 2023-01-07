package main

import (
	"github.com/gin-gonic/gin"
	"github.com/zennon-sml/GJR2/database"
	"github.com/zennon-sml/GJR2/routes"
)

func main(){
	database.MakeCon()
	router := gin.Default()
	routes.SetUpRoutes(router)
	router.Run(":8000")
}