const marHero = ['spiderman', 'ironman', 'hulk', "thor"];

const dcHero = ["batman", 'superman', 'shazam', "wonderwoman"];

// concat merger the two array and return a new array without changing the the original array

// push method add the element to th end of the array return the new length of the array and if we merge two arrays it attach the second array as a single element to the first array

// const pushHero = marHero.push(dcHero);
// console.log(pushHero);
// console.log(marHero);
// console.log(marHero[4][1])

const concatHero = marHero.concat(dcHero);
console.log(concatHero)


// spread operator (...) is used to spred the elements of the array and it can be used to merge two arrays and it does not change the original array it works like concat method but it is more flexible and it can be used to merge more than two arrays and it can be used to merge arrays with different datatypes like numbers,  string, objects

const spreadHero = [...marHero,  ...dcHero, "flash", 112]
console.log(spreadHero)

let myArr = [1, 2, 3, [4, 5], [6,7, [8,9]]]

const flatArr = myArr.flat(2) // flat method is used to flatten the array and it return new array with all elemanets of the original array in a single level and it does not change the original array and the default depth is 1 but we can pass the depth as an argument to flatten the array at desired level and if we pass the depth as infinity it will flatten the array at all levels

console.log(flatArr)

console.log(Array.isArray(["molu", "moluj1"]))
console.log(Array.from("molu"))

console.log(Array.of(1, 2,3,4))

console.log(Array.from({Length : 5}, (v, i) => i +1 ))

let score = 100
let score1 = 200
let score2 = 300

console.log(Array.of(score1, score2, score))