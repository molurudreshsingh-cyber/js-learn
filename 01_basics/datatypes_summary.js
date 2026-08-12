// primitive types

// number, string, bigint, symbol, null, undefined, boolean

let num = 123

let word = "molu"

let bigNum = 1234567234567845675678956435467434667n

let sym1 = Symbol(123)
let sym11 = Symbol(123)
console.log(sym1 === sym11);


//  refrence type or non primitive

// arrays function object

const my_arr = ["pen", "pencil", "chalk"]

let obj = {
    1 : "hello",
    2 : "molu"
}


const my_fun = function() {
    console.log("hello world");
    
}

console.log(typeof bigNum)