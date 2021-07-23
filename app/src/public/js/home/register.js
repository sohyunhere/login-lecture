"use strict";

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    confirmPwd = document.querySelector("#confirm-pwd"),
    pwd = document.querySelector("#pwd"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    if (!id.value)
        return alert("write ID");
    if (pwd.value !== confirmPwd.value) {
        return alert("incorrect password");
    }

    const req = {
        id: id.value,
        name: name.value,
        pwd: pwd.value,
    };

    console.log(req);
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/";
            } else {
                alert("create!");
            }
        })
        .catch((err) => {
            console.error("occur error while register");
        });
}