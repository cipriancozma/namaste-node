// const { calculateSum } = require("./calculate/sum");
// const { calculateMultiply } = require("./calculate/multiply")

// import { calculateMultiply } from "./calculate/multiply.js";
// import { calculateSum } from "./calculate/sum.js";

const { calculateMultiply, calculateSum } = require("./calculate");
const data = require("./data.json");
const { divide } = require("./iife");

var name = "Namaste Node";
var a = 10;
var b = 20;

// console.log(name);
// console.log(a + b);

// console.log(global);
// console.log(this); // empty object

calculateSum(a, b);
calculateMultiply(a, b);

console.log(JSON.stringify(data));

