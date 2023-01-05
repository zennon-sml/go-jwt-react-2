package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/zennon-sml/GJR2/database"
	"github.com/zennon-sml/GJR2/models"
	"golang.org/x/crypto/bcrypt"
)

func Register(ctx *gin.Context){
//using bodyparse to set user.pass to bytes
	//	user := models.User{}
	var data map[string]string
	if err := ctx.Bind(&data);err != nil{
		ctx.JSON(http.StatusBadRequest, gin.H{"error:": err.Error()})
	}else{
		password, _ := bcrypt.GenerateFromPassword([]byte(data["password"]), 14)
		
		user := models.User{
			Username: data["username"],
			Email: data["email"],
			Password: password,
		}
		database.DB.Create(&user)
		ctx.JSON(200, user)
	}
}

func Login(ctx *gin.Context){
	var data map[string]string
	if err := ctx.BindJSON(&data);err != nil{
		ctx.JSON(http.StatusBadRequest, gin.H{"error:": err.Error()})
	}else{
		user := models.User{}
		database.DB.Where("email = ?", data["email"]).First(&user)
		if user.Id == 0{
			 ctx.JSON(http.StatusNotFound,gin.H{"error":"user not found"})
		}else if err := bcrypt.CompareHashAndPassword(user.Password, []byte(data["password"]));err != nil{
			ctx.JSON(http.StatusBadRequest, gin.H{"error":"wrong password"})
		}else{
		ctx.JSON(200, user)
		}
	}

}