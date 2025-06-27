const palindromes = function (string) {
    let regex = /!|\.|,| /gi;
    let cleanString = string.replace(regex, "").toLowerCase();
    let newString = cleanString.toLowerCase().split("").reverse().join("");
    if (newString === cleanString) {
        return true;
    } else {
        return false;
    }
};

palindromes("gd  shjhk k,wfw    e!");
// Do not edit below this line
module.exports = palindromes;
