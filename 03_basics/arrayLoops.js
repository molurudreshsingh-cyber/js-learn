let arr = ["flash", "spiderman", "thor"];


for (const hero of arr) {
    console.log(hero)
}

const greeting = "hello molu"

for (const greet of greeting) {
    console.log(greet);
}

let map = new Map()

map.set("IN", "India"),
map.set("USA", "America"),
map.set("fr", "France")
map.set("IN", "India") // cannot hold duplicate key

for (let [key, value] of map) {
    console.log(value);
}

let obj = {
    game1 : "mfs",
    game2 : "spiderman"
}

// for (let [key, value] of obj) {
//     console.log(key);
    
// } not iterable for object


// for (let [key, value] of Object.entries(obj)) {
//     console.log(key, "=>", value);
    
// }

// for (let key of Object.keys(obj)) {
//     console.log(key);
    
// }

// for of loop directly give value