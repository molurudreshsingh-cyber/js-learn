 const coding = ['js', "ruby", "java", "python"]

// coding.forEach(function(item) {
//     console.log(item)
// })

// coding.forEach((item) => {
//     console.log(item)
// })

// function printMe(item) {
//     console.log(item)
// }

// coding.forEach(printMe);

// coding.forEach((item, inde,  ar) => {
//     console.log(item, inde, ar);
    
// })

let myCoding = [{
    languageName : "javascript",
    languageFileName : "js"
},{
     languageName : "java",
    languageFileName : "java"
},
{
    languageName : "python",
    languageFileName : "py"
}
]

// myCoding.forEach((item) => {
//     console.log(Object.values(item)[1]);
    
// })

myCoding.forEach((item) => {
    console.log(item.languageName)
    
    
})