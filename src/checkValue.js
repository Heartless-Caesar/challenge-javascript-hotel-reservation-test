const regularCompare = require("./regularCompare");
const rewardsCompare = require("./rewardsCompare");
const checkValue = (client, checkElement) => {
  //Dias para verificacao dos valores
  const weekDays = /mon|tues|wed|thur|fri/;
  const weekEnd = /sat|sun/;

  //Switch-case para verificar o tipo de cliente
  switch (client) {
    case "Regular":
      //Contadores para registrarem os valores conforme o dia passado como argumento
      let regularLakewoodCounter = 0;
      let regularRidgewoodCounter = 0;
      let regularBridgewoodCounter = 0;

      //Verifica se ha dias úteis da semana no ciclo de hospedagem
      let regularMatchWeekDay = weekDays.test(checkElement);

      //Registra o valor total dos dias uteis de hospedagem
      if (regularMatchWeekDay) {
        regularLakewoodCounter += 110;
        regularBridgewoodCounter += 160;
        regularRidgewoodCounter += 220;
      }

      // Verifica se ha dias do final de semana no ciclo de hospedagem
      let regularMatchWeekEnd = weekEnd.test(checkElement);

      /*
           Registra o valor total dos dias do final
           de semana de hospedagem                 */
      if (regularMatchWeekEnd) {
        regularLakewoodCounter += 90;
        regularBridgewoodCounter += 60;
        regularRidgewoodCounter += 150;
      }

      return regularCompare(
        regularLakewoodCounter,
        regularBridgewoodCounter,
        regularRidgewoodCounter
      );

    /* -------------------------------------------------------- */

    /*           Comparações de cliente tipo Rewards           */

    case "Rewards":
      //Contadores para cliente do tipo Rewards
      let rewardsLakewoodCounter = 0;
      let rewardsRidgewoodCounter = 0;
      let rewardsBridgewoodCounter = 0;

      //Verifica se ha dias úteis da semana como parametro
      let rewardsMatchWeekDay = weekDays.test(checkElement);

      //Registra o valor total dos dias uteis de hospedagem
      if (rewardsMatchWeekDay) {
        rewardsLakewoodCounter += 80;
        rewardsBridgewoodCounter += 110;
        rewardsRidgewoodCounter += 100;
      }

      /* 
           Verifica se ha dias do final de semana
           no ciclo de hospedagem                 */
      const rewardsMatchWeekEnd = weekEnd.test(checkElement);

      /*
           Registra o valor total dos dias do final
           de semana de hospedagem                 */
      if (rewardsMatchWeekEnd) {
        rewardsLakewoodCounter += 80;
        rewardsBridgewoodCounter += 50;
        rewardsRidgewoodCounter += 40;
      }

      return rewardsCompare(
        rewardsLakewoodCounter,
        rewardsBridgewoodCounter,
        rewardsRidgewoodCounter
      );
  }
};

module.exports = checkValue;
