let myDate = new Date()
console.log(myDate);
console.log(myDate.getFullYear());
console.log(myDate.getDate());
console.log(myDate.getMinutes());
console.log(myDate.getMonth());
console.log(myDate.getHours());

let istTime = new Date(
    myDate.toLocaleString("en-US",
        {
            timeZone : "Asia/Kolkata"
        }
    )
);

console.log(istTime.getHours());
console.log(istTime.getMinutes());

console.log(myDate.toString());
console.log(myDate.toLocaleString())
console.log(istTime.toString());

let createDate = new Date(2024, 5, 15, 12, 30, 1);
console.log(createDate.toString());
console.log(createDate.toDateString());
console.log(createDate.toLocaleString())

let myCreateddate = new Date("2-01-2024")
console.log(myCreateddate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreateddate.getTime())
console.log(Math.floor(Date.now() / 1000))


