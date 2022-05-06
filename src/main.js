const checkValue = require("./checkValue");

function getCheapestHotel(input) {
  //DO NOT change the function's name.

  const getCheapestHotel = (input) => {
    //Regex para encontrar valores entre parenteses
    const regexDia = /\(([^()]*)\)/g;

    //Separa cada elemento separado por virgula
    const days = input.split(",");

    //Separa o primeiro elemento da string, o tipo de cliente normal ou fiel
    const clientType = input.split(":")[0];

    //Separa cada elemento separado para achar o dia entre parenteses
    console.log(clientType);

    //Verificar o valor de cada dia
    return days.forEach((x) => {
      const matches = [...x.matchAll(regexDia)];

      //Verificacao output dos dias
      console.log(Array.from(matches, (m) => m[1]));

      //Dias para verificacao dos valores
      const weekDays = /mon|tues|wed|thur|fri/;
      const weekEnd = /sat|sun/;

      return checkValue(clientType, weekDays, weekEnd, x);
    });
  };
}

exports.getCheapestHotel = getCheapestHotel;
