package controllers

import (
	"fmt"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v4"
	"github.com/zennon-sml/GJR2/database"
	"github.com/zennon-sml/GJR2/models"
	"golang.org/x/crypto/bcrypt"
)

func Register(ctx *gin.Context) {
	//get user from request
	var data map[string]string
	if err := ctx.Bind(&data); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error:": err.Error()})
		return
	}
	//encript password
	password, _ := bcrypt.GenerateFromPassword([]byte(data["password"]), 14)
	//create a user models with the data retrieved
	user := models.User{
		Username: data["username"],
		Email:    data["email"],
		Password: password,
	}
	//create the user in the database
	database.DB.Create(&user)

	ctx.JSON(200, user)
}

func Login(ctx *gin.Context) {
	//get the user from the request
	var data map[string]string
	if err := ctx.BindJSON(&data); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error:": err.Error()})
		return
	}

	user := models.User{}
	//find user by email
	database.DB.Where("email = ?", data["email"]).First(&user)

	if user.Id == 0 {
		ctx.JSON(http.StatusNotFound, gin.H{"error": "user not found"})
		return
	}
	//compare the password from the request and the user
	if err := bcrypt.CompareHashAndPassword(user.Password, []byte(data["password"])); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "wrong password"})
		return
	}
	//create the claims for the token
	claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.StandardClaims{
		Issuer:    fmt.Sprintf("%d", user.Id),
		ExpiresAt: time.Now().Add(time.Minute * 60).Unix(),
	})
	//sign the token with the secret key
	token, err := claims.SignedString([]byte(os.Getenv("SECRET")))
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "could not log in my frend"})
		return
	}
	//TODO search about
	ctx.SetSameSite(http.SameSiteLaxMode)
	//set the cookie on the browser http/only
	ctx.SetCookie("jwt", token, 3600, "", "", false, true)
	ctx.JSON(200, gin.H{"status": "loged :)"})

}

func UserAuth(ctx *gin.Context) {
	//get cookie from browser request
	cookie, _ := ctx.Cookie("jwt")
	//get the token from jwt cookie
	token, err := jwt.ParseWithClaims(cookie, &jwt.StandardClaims{}, func(token *jwt.Token) (interface{}, error) {
		//using the secret key to undo the process of signing the token
		return []byte(os.Getenv("SECRET")), nil
	})

	if err != nil {
		ctx.JSON(401, gin.H{"message": "unauthenticated"})
		return
	}
	//converting to standartclaims to get Issuer function
	claims := token.Claims.(*jwt.StandardClaims)
	//retrieve the user by id from the token, from database to validate
	var user models.User
	database.DB.Where("id = ?", claims.Issuer).First(&user)

	ctx.JSON(200, user)

}
