// for in loop return indexs/properties

let myObj = {
    "j" : "java",
    "js" : "javascript",
    "c" : "C++"
}

for (let obj in myObj) {
    console.log(`${obj}, and value is ${myObj[obj]}`)
}

let prg = ["java", "js", "cpp",4, 6]

for (let i in prg) {
    console.log(prg[i]);
    
}