package models

type User struct{
	Id int
	Username string `json:"username"`
	Email string `json:"email"`
	Password []byte `json:"password"`
}