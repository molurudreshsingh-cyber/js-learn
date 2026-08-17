// Object liteerals
const mySym = Symbol(1)
const jsUser = {
    name : "molu",
    age : 18,
    location : "jaipur",
    email : "molu@gmail.com",
    isLoggedIn : false,
    lastLoggedInDay : ["Monday" , "Wednesday"],
    [mySym] : "key1"
    
}

console.log(jsUser["age"]);
 console.log(typeof jsUser["mySym"]);
console.log(jsUser[mySym]);

jsUser.email = "molu@microsoft.com"
// Object.freeze("jsUser")

 jsUser.greeting = function() {
    console.log("hello js user");
    
}

console.log(jsUser.greeting);
console.log(jsUser["greeting"]());

jsUser.greeting2 = function() {
    console.log(`hello jsUser, ${this["name"]}`);
    
}

console.log(jsUser.greeting2());
