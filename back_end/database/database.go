package database

import (
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"github.com/zennon-sml/GJR2/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// can be accessed by the package because is a global variable
var DB *gorm.DB

func MakeCon() {
	//loading the .env file with the enviroment variables
	er := godotenv.Load(".env")
	if er != nil {
		log.Fatal("error loading .env file")
	}
	// defining all the variables needed
	user := os.Getenv("DB_USER")
	password := os.Getenv("DB_PASSWORD")
	host := os.Getenv("DB_HOST")
	port := os.Getenv("DB_PORT")
	db := os.Getenv("DB_NAME")
	tzone := os.Getenv("DB_TZONE")
	//creating the string for my postgres connection
	domain := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable TimeZone=%s", host, user, password, db, port, tzone)
	//opening the connection
	con, err := gorm.Open(postgres.Open(domain), &gorm.Config{})

	if err != nil {
		log.Fatal("cant conect to database")
	}
	//migrating my existent models (user)
	con.AutoMigrate(&models.User{})
	//declaring that the global variable now is the connection
	DB = con
}
