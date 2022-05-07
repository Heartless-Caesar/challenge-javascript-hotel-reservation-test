/* 
                            AVISO
  O documento diz : "Utilize 'Regular' para denominar um cliente normal 
  e 'Reward' para um cliente participante do programa de fidelidade."   
  
  No entanto o parâmetro para um cliente que participa de um programa
  de fidelidade está definido como "Rewards", no plural, 
  no arquivo failing-test-spec.js, portanto esta é a razão pelo qual 
  utilizei "Rewards" como caso para o Switch-Case para a verificação do tipo 
  de cliente na função "checkValue".
                                                                        */

const checkValue = require("./checkValue");

function getCheapestHotel(input) {
  //DO NOT change the function's name.

  //Regex para encontrar valores entre parenteses
  const regexDia = /\(([^()]*)\)/g;

  //Separa cada elemento separado por virgula
  const days = input.split(",");

  //Separa o primeiro elemento da string, o tipo de cliente Regular ou Rewards
  const clientType = input.split(":")[0];

  //Inicialização das comaprações
  checkValue(clientType, days[0]);
  checkValue(clientType, days[1]);
  return checkValue(clientType, days[2]);
}

exports.getCheapestHotel = getCheapestHotel;
