const removeFromArray = function(arr, ...element) {
    return arr.filter((arrElement) => element.includes(arrElement) == false);
};

// Do not edit below this line
module.exports = removeFromArray;
