console.log("SUM is executed");

function calculateSum(a, b) {
    const sum = a + b;
    console.log(sum)
}

// console.log(module.exports); // empty object

module.exports = {
    calculateSum
}