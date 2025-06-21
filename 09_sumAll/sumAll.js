const sumAll = function(firstNumber, lastNumber) {
    if (Number.isInteger(firstNumber) 
        && Number.isInteger(lastNumber)
        && firstNumber >=0
        && lastNumber >= 0) {
        let sumAll = 0;
        if(lastNumber < firstNumber) {
            for( let i = lastNumber; i <= firstNumber; i++) {
            sumAll += i;
            }
        }
        for( let i = firstNumber; i <= lastNumber; i++) {
            sumAll += i;
        }
        return sumAll;
        
    } else {
        return "ERROR";
    }

    }
    

// Do not edit below this line
module.exports = sumAll;
