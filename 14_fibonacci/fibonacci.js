const fibonacci = function(number) {
    let fibonacci = [1, 1];
    if (number === 0) return 0;
    if (number < 0) return "OOPS";
    if (number === "0") return 0;
    for(let i = 1; i <= number - 2; i++ ) {
        fibonacci.push(fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1]);
    }
    return fibonacci[fibonacci.length - 1];
};

console.log(fibonacci("6"));
// Do not edit below this line
module.exports = fibonacci;
