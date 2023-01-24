package main

import (
	"github.com/gin-gonic/gin"
	"github.com/zennon-sml/GJR2/database"
	"github.com/zennon-sml/GJR2/routes"
	"github.com/zennon-sml/GJR2/services"
)

func main() {
	//setting up the database conection wich will open the variable DB to be used
	database.MakeCon()
	//default gin router
	router := gin.Default()
	//setting up the CORS(cross-origin resourse) so the front end can comunicate with the back end
	services.SetCORS(router)
	//set all my routes
	routes.SetUpRoutes(router)
	//starting the server
	router.Run(":8000")
}
