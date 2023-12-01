const repeatString = function(word, repeatingNum) {
    let store = "";
    for(let i = 0; i < repeatingNum; i++) {
        store += word
    }
    if(repeatingNum < 0)
        return "ERROR";
    else
        return store;
};

// Do not edit below this line
module.exports = repeatString;
