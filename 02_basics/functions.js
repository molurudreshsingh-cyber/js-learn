function myName() {
    console.log("m")
    console.log("o")
    console.log("l")
    console.log("u")
}

// myName()

// function addTwoNumbers(number1, number2) {
//    console.log(number1 + number2);
    
// } 


function addTwoNumbers(number1, number2) {
   const res =  number1 + number2
   return res
    
} 

const res = addTwoNumbers(2,3)

console.log(res);

// function logInuserMessage(username) {

//     if(!username) {
//         console.log("type username first")
//         return
//     }
//     return `${username} just logged In`
// }

// console.log(logInuserMessage());


function calculatorCartPrice(val1, val2, ...num1) {
    return num1
}

console.log(calculatorCartPrice(200, 400, 600))

// const user = {
//     username : "molu",
//     price : 700
// }

function handleObject(anyObject) {
    console.log(`username  is ${anyObject.username} and the price is ${anyObject.price}`);
}

// handleObject(user)

handleObject({
    username : "molu",
    price : 700
})

const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray) {
    return getArray[2]
}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100,200, 800]));
