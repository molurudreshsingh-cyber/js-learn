// singleton object

//const tinderuser = new Object()

 const tinderuser = {}

console.log(tinderuser);

tinderuser.id = "123"
tinderuser.name = "molu"
tinderuser.age = 18


const regularUser = {
    email : "molu@gmail.com",
    fullName : { 
        userFullname : {
        firstname : "molu",
        address : "blr"
    }
}
}

console.log(regularUser.fullName?.userFullname.firstname);


const obj1  = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}

const obj3 = {obj1, obj2}

const obj4 = Object.assign({}, obj1, obj2)

const obj5 = {...obj1, ...obj2}

console.log(obj5);

const user = [
    {
        id : 1,
        email : "molu@gooogle.com"
    }, 
    {
        id : 2,
        email : "molu@gmail.com"
    },
    {

    },
    {},
    {
      
    }
]

console.log(user[1].email)

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty("id"));
