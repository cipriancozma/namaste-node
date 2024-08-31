const crypto = require("crypto");

console.log("Hello again");

var a = 1078698;
var b = 20986;

// this one below will block the main thread, no callback is passed as it is for the one method without sync
// Synchronous Function will BLOCK THE MAIN THREAD - DON'T USE IT
crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512");
console.log("First key is generated!");

// Password Base Key Derivation Function
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, data) => {
    console.log("Key is generated!")
})

function multiplyFn(x, y) {
    const result = x * y;
    return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is: ", c);
