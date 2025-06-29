const reverseString = function(string) {
    const strArr = string.split("");
    const newArr = [];
    for (let i = strArr.length - 1; i >= 0; i--) {
        newArr.push(strArr[i]);        
    }
    
    return newArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
