const checkValue = require("./checkValue");

function getCheapestHotel(input) {
  //DO NOT change the function's name.

  //Regex para encontrar valores entre parenteses
  const regexDia = /\(([^()]*)\)/g;

  //Separa cada elemento separado por virgula
  const days = input.split(",");

  //Separa o primeiro elemento da string, o tipo de cliente normal ou fiel
  const clientType = input.split(":")[0];

  //Separa cada elemento separado para achar o dia entre parenteses
  console.log(clientType);

  //Dias para verificacao dos valores
  const weekDays = /mon|tues|wed|thur|fri/;
  const weekEnd = /sat|sun/;

  checkValue(clientType, weekDays, weekEnd, days[0]);
  checkValue(clientType, weekDays, weekEnd, days[1]);
  return checkValue(clientType, weekDays, weekEnd, days[2]);
}

exports.getCheapestHotel = getCheapestHotel;
