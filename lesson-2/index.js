"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
var user = {
    passwod: "12345admin",
    user_name: 111,
    hash_key: "advcdsvearwf3qwer23e41",
    is_auth: true
};
var admin = {
    passwod: "12345admin",
    user_name: 1111,
    hash_key: "advcdsvearwf3qwer23e41",
    is_auth: true,
    role: "ADMIN",
    permission: {
        isAdmin: false,
        isSuper: true
    }
};
var user__001 = {
    login: "USER 001",
    passwod: "user001.7z",
    id: 122
};
var setUser = function (user) {
    return user;
};
console.log(setUser({ full_name: "USERBEK", age: 12 }));
console.log(setUser({ full_name: "USERJON", age: true }));
function errorHandeler() {
    throw new Error("xato");
}
console.log(enums_1.unitEnum.MD);
var str;
str = "ertyjkujk";
str = true;
var btn = document.querySelector('button');
var div = document.querySelector('div');
