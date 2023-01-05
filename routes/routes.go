package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/zennon-sml/GJR2/controllers"
)

func SetUpRoutes(router *gin.Engine){
	v1 := router.Group("/v1")
	{
		v1.POST("/register", controllers.Register)
		v1.POST("/login", controllers.Login)
	}
}