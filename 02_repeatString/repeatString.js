const repeatString = function(word, repeatingNum) {
    let store = word;
    for(let i = 0; i < repeatingNum - 1; i++) {
        store += word
    }
    return store;
};

// Do not edit below this line
module.exports = repeatString;
