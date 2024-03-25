var str;
str = "Hello";
var isLoad;
isLoad = true;
var num = 10;
var app = "OK";
var undef;
undef = undefined;
var nullValue;
nullValue = null;
var unionId;
unionId = "1234567890";
unionId = 122222;
var sizes;
// console.log(sizes)
sizes = 0;
var myOject;
myOject = {
    name: "John",
    age: 30,
    isSingle: true
};
// myOject.isStudent = false;
console.log(myOject);
var myArray;
myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, true];
var strs = ["a", "b", "c", "d", "e", "f", 11];
var arr = ["TSC"];
arr[0] = "TS";
console.log(arr);
var tupleData;
tupleData = [true, "Hello", 0];
function sum(w, x) {
    return w + x;
}
var result = sum(1, 4);
var isAuth = function (k, j) {
    return k + j;
};
function getToken() {
    console.log("this is auth");
}
getToken();
function newError() {
    throw new Error("this is error");
}
newError();
console.log(isAuth("Hello", false));
