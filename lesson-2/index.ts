import { USER, ADMIN, ACCOUNT , USER_INFO , USER_INFO1 } from "./interface";
import { unitEnum } from "./enums";

const user: USER<string | number> = {
  passwod: "12345admin",
  user_name: 111,
  hash_key: "advcdsvearwf3qwer23e41",
  is_auth: true
};

const admin: ADMIN = {
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

const user__001: ACCOUNT<number> = {
  login: "USER 001",
  passwod: "user001.7z",
  id: 122
};



const setUser = <M>(user: M) => {
  return user;
};

console.log(setUser<USER_INFO>({full_name: "USERBEK", age: 12 }) );
console.log(setUser<USER_INFO1>({full_name:"USERJON", age:true}))

function errorHandeler(): never {
  throw new Error("xato");
}


console.log(unitEnum.MD)


let str:unknown;
str=<string>"ertyjkujk"
str=<boolean>true

let btn=document.querySelector('button') as HTMLButtonElement|null;
let div=document.querySelector('div') as HTMLElement;




