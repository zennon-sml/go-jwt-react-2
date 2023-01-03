package controllers

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/zennon-sml/GJR2/models"
)

func Login(ctx *gin.Context){
	var user models.User
	if err := ctx.ShouldBindJSON(&user);err != nil{
		ctx.JSON(http.StatusBadRequest, gin.H{"error:": err.Error()})
	}else{
		ctx.JSON(200, user)
	}

}