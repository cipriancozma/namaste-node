const crypto = require("crypto");

console.log("Hello again");

var a = 1078698;
var b = 20986;

crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512", (err, data) => {
    console.log("Key is generated!")
})

function multiplyFn(x, y) {
    const result = x * y;
    return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is: ", c);
