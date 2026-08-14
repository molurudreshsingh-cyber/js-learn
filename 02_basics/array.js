const myArr = [1, 2, 3, 4, 5];

const strArr = ["a", "abc"]

console.log(myArr[0]);

// arrays methods

myArr.push(6);
myArr.push(7, 8);
myArr.pop()
myArr.unshift(10)
myArr.shift()
console.log(myArr)

// slice method don't change the original array and it does not include the last index
// splice method change tghe original array it removes the elements from the original array and returns the removed elements including the last index

const newArr = myArr.slice(1, 3)
console.log(newArr);
console.log(myArr)
const newArr2 = myArr.splice(1, 3)

console.log(newArr2);
console.log(myArr);