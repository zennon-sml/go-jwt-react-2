package controllers

import (
	"fmt"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v4"
	"github.com/zennon-sml/GJR2/database"
	"github.com/zennon-sml/GJR2/models"
	"golang.org/x/crypto/bcrypt"
)

const SecretKey = "secret"

func Register(ctx *gin.Context) {
	//using bodyparse to set user.pass to bytes
	//	user := models.User{}
	var data map[string]string
	if err := ctx.Bind(&data); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error:": err.Error()})
		return
	}
	password, _ := bcrypt.GenerateFromPassword([]byte(data["password"]), 14)

	user := models.User{
		Username: data["username"],
		Email:    data["email"],
		Password: password,
	}
	database.DB.Create(&user)
	ctx.JSON(200, user)
}

func Login(ctx *gin.Context) {
	var data map[string]string
	if err := ctx.BindJSON(&data); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error:": err.Error()})
		return
	}

	user := models.User{}
	database.DB.Where("email = ?", data["email"]).First(&user)

	if user.Id == 0 {
		ctx.JSON(http.StatusNotFound, gin.H{"error": "user not found"})
		return
	}

	if err := bcrypt.CompareHashAndPassword(user.Password, []byte(data["password"])); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "wrong password"})
		return
	}

	claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.StandardClaims{
		Issuer:    fmt.Sprintf("%d", user.Id),
		ExpiresAt: time.Now().Add(time.Minute * 4).Unix(),
	})

	token, err := claims.SignedString([]byte(SecretKey))
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "could not log in my frend"})
		return
	}

	ctx.SetSameSite(http.SameSiteLaxMode)
	ctx.SetCookie("jwt", token, 240, "/v1/login", "localhost", false, true)
	ctx.JSON(200, gin.H{"status": "loged :)"})

}
