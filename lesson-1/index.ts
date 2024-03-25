

let str:string;
str = "Hello";

let isLoad:boolean;
isLoad = true;


let num:number = 10;
const app:any ="OK"

let undef:undefined;
undef = undefined;

let nullValue:null;
nullValue = null

let unionId:string | number;
unionId = "1234567890";
unionId=122222;

let sizes: "SM" | "MD" | "LG" | true |0;
// console.log(sizes)
sizes = 0

let myOject:{
    name: string,
    age: number,
    isSingle: boolean,
    isStudent?: boolean | undefined,
}

myOject={
    name: "John",
    age: 30,
    isSingle: true
}
// myOject.isStudent = false;

console.log(myOject)

let myArray:Array<number|string|boolean>;
myArray = [1,2,3,4,5,6,7,8,9,10, true];
let strs:any[] = ["a", "b", "c", "d", "e", "f",11];

let arr=["TSC"]
arr[0]="TS";


console.log(arr)


let tupleData:[boolean, string , number];
tupleData=[true, "Hello", 0]


function sum(w:number, x:number):number{
    return w+x;
}

const result:number=sum(1,4);

const isAuth=(k:string,j:boolean):string=>{
  return k+j;
}

function getToken():void{
    console.log("this is auth")
}

getToken();

function newError():never{
    throw new Error("this is error");
}

newError()

console.log(isAuth("Hello", false))
















