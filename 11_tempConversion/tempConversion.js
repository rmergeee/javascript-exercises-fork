const convertToCelsius = function(temperaturaF) {
  const temperaturaC = (temperaturaF - 32) * 5 / 9;
  return Math.round(temperaturaC * 10) / 10;
};

const convertToFahrenheit = function(temperaturaC) {
  const temperaturaF = temperaturaC * 9 / 5 + 32;
  return Math.round(temperaturaF * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
