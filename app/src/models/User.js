"use strict"
const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }
    login(){
        const body = this.body;
        const { id, pwd } = UserStorage.getUserInfo(body.id);
        
        if(id){
            if(id === this.body.id && pwd === body.pwd){
                return {success: true};
            }
            return {success: false, msg: "wrong password"};
        }
        return {success: false, msg: "does not exist ID"};
    }
}


module.exports = User;