"use strict"

class UserStorage {
    static #users = {
        id: ["sohyun", "mimi", "gogo"],
        pwd: ["1234", "1234", "1234"],
        name: ["소현", "미미", "구구"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) =>{
           if(users.hasOwnProperty(field)){
               newUsers[field] = users[field];
           }
           return newUsers;
        }, {});
        return newUsers;
    }
    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUsers, info) => {
            newUsers[info] = users[info][idx];
            return newUsers;
        }, {});

        return userInfo;
    }
}

module.exports = UserStorage;