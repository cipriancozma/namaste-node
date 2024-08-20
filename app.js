// const { calculateSum } = require("./calculate/sum");
// import { calculateMultiply } from "./calculate/multiply.js";
// import { calculateSum } from "./calculate/sum.js";
// const { calculateMultiply } = require("./calculate/multiply")
const { calculateMultiply, calculateSum } = require("./calculate");

var name = "Namaste Node";
var a = 10;
var b = 20;

// console.log(name);
// console.log(a + b);

// console.log(global);
// console.log(this); // empty object

calculateSum(a, b);
calculateMultiply(a, b);