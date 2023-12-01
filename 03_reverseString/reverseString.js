const reverseString = function(string) {
    let reverseResult = '';
    for(let i = string.length - 1; i >= 0; i--) {
        reverseResult += string[i];
    }
    return reverseResult; 
};

// Do not edit below this line
module.exports = reverseString;



