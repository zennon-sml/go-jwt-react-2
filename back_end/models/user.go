package models

import "gorm.io/gorm"

type User struct {
	gorm.Model        //sets gorm default settings as created_at, updated_at
	Id         int    `json:"id"`
	Username   string `json:"username"`
	Email      string `json:"email" gorm:"unique"`
	Password   []byte `json:"-"`
}
