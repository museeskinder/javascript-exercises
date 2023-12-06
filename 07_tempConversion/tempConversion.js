const convertToCelsius = function(temp) {
  return Number.isInteger(((temp - 32) * 5 / 9)) ? ((temp - 32) * 5 / 9) : Number(((temp - 32) * 5 / 9).toFixed(1))
};

const convertToFahrenheit = function(temp) {
  return Number.isInteger(((temp * (9 / 5)) + 32)) ? ((temp * (9 / 5)) + 32) : Number(((temp * (9 / 5)) + 32).toFixed(1));
};

convertToCelsius(-100);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
