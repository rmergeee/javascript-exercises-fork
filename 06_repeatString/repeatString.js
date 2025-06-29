const repeatString = function(string, number) {
    let newString = "";
    if (number >= 0) {
        for(let i = 0; i < number; i++ ) {
        newString += string;
        }
        return newString;
    } else {
        return "ERROR"
    }
    
};

// Do not edit below this line
module.exports = repeatString;
