const checkValue = (client, dayCheck, weekEndCheck, checkElement) => {
  switch (client) {
    case "Regular":
      let regularLakewoodCounter = 0;
      let regularRidgewoodCounter = 0;
      let regularBridgewoodCounter = 0;

      //Verifica se ha dias da semana
      let regularMatchWeekDay = dayCheck.test(checkElement);

      //Registra o valor total dos dias uteis de hospedagem
      if (regularMatchWeekDay) {
        regularLakewoodCounter += 110;
        regularBridgewoodCounter += 160;
        regularRidgewoodCounter += 220;
      }

      /* 
           Verifica se ha dias do final de semana
           no ciclo de hospedagem                 */
      let regularMatchWeekEnd = weekEndCheck.test(checkElement);

      /*
           Registra o valor total dos dias do final
           de semana de hospedagem                 */
      if (regularMatchWeekEnd) {
        regularLakewoodCounter += 90;
        regularBridgewoodCounter += 60;
        regularRidgewoodCounter += 150;
      }

      //Log do output
      console.log(
        regularBridgewoodCounter +
          regularLakewoodCounter +
          regularRidgewoodCounter
      );

      //Verificar se ha valores a pagar iguais e retornar o de maior classificacao
      if (
        regularLakewoodCounter == regularBridgewoodCounter &&
        regularLakewoodCounter == regularRidgewoodCounter &&
        regularRidgewoodCounter == regularBridgewoodCounter
      ) {
        return "Ridgewood";
      }

      //Retornos em caso de serem menores
      if (
        regularBridgewoodCounter < regularLakewoodCounter &&
        regularBridgewoodCounter < regularRidgewoodCounter
      ) {
        return "Bridgewood";
      }
      if (
        regularRidgewoodCounter < regularLakewoodCounter &&
        regularRidgewoodCounter < regularBridgewoodCounter
      ) {
        return "Ridgewood";
      }
      if (
        regularLakewoodCounter < regularBridgewoodCounter &&
        regularLakewoodCounter < regularRidgewoodCounter
      ) {
        return "Lakewood";
      }

      //Retornando por maior classificacao quando iguais
      //Bridgewood maior classificacao
      if (
        regularLakewoodCounter == regularBridgewoodCounter &&
        regularBridgeCounter < regularRidgewoodCounter
      ) {
        return "Bridgewood";
      }
      //Ridgewood maior classificacao
      if (
        regularBridgewoodCounter == regularRidgewoodCounter &&
        regularBridgewoodCounter < regularLakewoodCounter
      ) {
        return "Ridgewood";
      }
      break;

    case "Rewards":
      let rewardsLakewoodCounter = 0;
      let rewardsRidgewoodCounter = 0;
      let rewardsBridgewoodCounter = 0;
      //Verifica se ha dias da semana
      let rewardsMatchWeekDay = dayCheck.test(checkElement);

      //Registra o valor total dos dias uteis de hospedagem
      if (rewardsMatchWeekDay) {
        rewardsLakewoodCounter += 80;
        rewardsBridgewoodCounter += 110;
        rewardsRidgewoodCounter += 100;
      }

      /* 
           Verifica se ha dias do final de semana
           no ciclo de hospedagem                 */
      const rewardsMatchWeekEnd = weekEndCheck.test(checkElement);

      /*
           Registra o valor total dos dias do final
           de semana de hospedagem                 */
      if (rewardsMatchWeekEnd) {
        rewardsLakewoodCounter += 80;
        rewardsBridgewoodCounter += 50;
        rewardsRidgewoodCounter += 40;
      }

      //Log do output
      console.log(
        rewardsBridgewoodCounter +
          rewardsLakewoodCounter +
          rewardsRidgewoodCounter
      );
      break;
  }
};

module.exports = checkValue;
