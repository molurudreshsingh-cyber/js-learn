// const user = {
//     username : "molu",
//     price : 999,

//     welcomemessage : function() {
//         console.log(`${this.username} welcome to website`)
//         console.log(this)
//     }

// }


// user.welcomemessage()
// console.log(user.username)
// user.username = "sam"
// console.log(user)

// const chai = function() {
//     let username = "molu"
//     console.log(this.username);
    
// }


const chai = () => {
    let username = "hitesh"
    console.log(this.username)
}
chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => (num1 + num2) // no need to write return explicitly

const addTwo = (num1, num2) =>({name : "molu"})
console.log(addTwo(2, 4).name);

