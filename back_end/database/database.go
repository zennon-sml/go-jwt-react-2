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

var DB *gorm.DB

func MakeCon() {
	er := godotenv.Load(".env")
	if er != nil {
		log.Fatal("error loading .env file")
	}
	user := os.Getenv("DB_USER")
	password := os.Getenv("DB_PASSWORD")
	host := os.Getenv("DB_HOST")
	port := os.Getenv("DB_PORT")
	db := os.Getenv("DB_NAME")
	tzone := os.Getenv("DB_TZONE")

	domain := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable TimeZone=%s", host, user, password, db, port, tzone)

	con, err := gorm.Open(postgres.Open(domain), &gorm.Config{})

	if err != nil {
		log.Fatal("cant conect to database")
	}

	con.AutoMigrate(&models.User{})
	DB = con
}
