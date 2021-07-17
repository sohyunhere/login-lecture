"use strict";

const users = {
    id: ["sohyun", "mimi", "gogo"],
    pwd: ["1234", "1234", "1234"],
};

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login : (req, res) => {
        res.render("home/login");
    },
}
const process = {
    login: (req, res) => {
        const id = req.body.id,
            pwd = req.body.pwd;

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.pwd[idx] === pwd){
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            msg: "fail to login",
        });
    },
};

module.exports = {
    output,
    process,
};