console.log("Hello");

var a = 1078698;
var b = 20986;

// this callback will be pushed to call stack only after the call stack is empty
setTimeout(() => {
    console.log("Call me ASAP!!!")
}, 3000);

function multiplyFn(x, y) {
    const result = x * y;
    return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is: ",  c);
