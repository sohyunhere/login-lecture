"use strict"
const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }
    login(){
        const client = this.body;
        const { id, pwd } = UserStorage.getUserInfo(client.id);
        
        if(id){
            if(id === this.client.id && pwd === client.pwd){
                return {success: true};
            }
            return {success: false, msg: "wrong password"};
        }
        return {success: false, msg: "does not exist ID"};
    }
    register() {
        const client = this.body;
        
        const response = UserStorage.save(client);
        return response;
    }
}


module.exports = User;