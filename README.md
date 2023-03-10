![RGB2](https://user-images.githubusercontent.com/76619871/213952536-1d431135-d0d8-4ef0-8e63-0b9d6674e636.png)




<h2> <p align="center"> GOLANG JWT AUTH API WITH REACT </p> </h2>

- [x] Using **GIN** has server and main tool
- [x] Making a basic **auth process** from the **JSON requests** 
- [x] Creating **cookies http/only** for security
- [x] Keeping the data on a **postgres** online database
- [x] **Learning** and **listening** to some **music** while at it 
- [x] And at last but not least having some **fun :}**

## SERVER
- [X] [GIN](https://pkg.go.dev/github.com/gin-gonic/gin): deal with requests and responses, set cookies and the JWT token

## ROUTES
- [x] POST   /v1/register              --> github.com/zennon-sml/GJR2/controllers.Register (3 handlers)
- [x] POST   /v1/login                 --> github.com/zennon-sml/GJR2/controllers.Login (3 handlers)
- [x] POST   /v1/logout                --> github.com/zennon-sml/GJR2/controllers.Logout (3 handlers)
- [x] GET    /v1/userauth              --> github.com/zennon-sml/GJR2/controllers.UserAuth (3 handlers)

## DATABASE
- [x] POSTGRES: database hosted on [ElephantSQL](https://www.elephantsql.com/) and also seted up a local postgres container

## ORM
- [x] [GORM](https://gorm.io/docs/index.html): object relational maping for the database

## ENVIROMENT
- [x] [godotenv](https://github.com/joho/godotenv): way to get enviroment variables from .env

## JWT
- [x] [JWT](https://pkg.go.dev/github.com/golang-jwt/jwt/v4): go package to make a json web token

## PASSWORD SAFETY
- [x] [BCRYPT](https://pkg.go.dev/golang.org/x/crypto/bcrypt): password encrypiting and decripter

## POSTMAN
- [x] [POSTMAN](https://www.postman.com/): use for testing the back end with requests
