package database

import(
	"os"	
	"log"
	"fmt"
	"github.com/joho/godotenv"
	"gorm.io/gorm"
	"gorm.io/driver/postgres"
)
func MakeCon(){
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal("error loading .env file")
	}
	user:= os.Getenv("DB_USER")
	password := os.Getenv("DB_PASSWORD")
    host := os.Getenv("DB_HOST")
    port := os.Getenv("DB_PORT")
    db := os.Getenv("DB_NAME")
	tzone := os.Getenv("DB_TZONE")

	domain := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable TimeZone=%s", host, user, password, db, port, tzone)
//	domain := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local", usuario, senha, host, porta, banco)

	_,err = gorm.Open(postgres.Open(domain), &gorm.Config{})
	if err != nil{
		log.Fatal("cant conect to database")
	}else{
		fmt.Println("conection suced")
	}
}