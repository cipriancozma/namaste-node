const fs = require("fs");
const https = require("https");

console.log("Hello");

var a = 1078698;
var b = 20986;

// Synchronous -> this will break the main thread
fs.readFileSync("./file.txt", "utf-8");
console.log("This will execute only after file read")

https.get("https://dummyjson.com/products/1", (res) => {
    console.log("Data fetched successfully")
})

setTimeout(() => {
    console.log("setTimeout called after 5 seconds")
}, 5000);

// Asynchronous
fs.readFile("./file.txt", "utf8", (err, data) => {
    console.log("File data: ", data);
})

function multiplyFn(x, y) {
    const result = x * y;
    return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is: ", c);
