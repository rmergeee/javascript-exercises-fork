const removeFromArray = function(arr, ...items) {
    for (const item of items) {
        for (let i = 0; i < arr.length; i++ ) {
            let index = arr.findIndex(it => it === item);
            console.log(index);
            if(index >= 0) arr.splice(index, 1);    
        }
    
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;