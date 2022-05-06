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

      //Log do output
      console.log(
        regularBridgewoodCounter +
          regularLakewoodCounter +
          regularRidgewoodCounter
      );

      //Verificar se todos os valores a pagar são iguais e retornar o de maior classificacao
      if (
        regularLakewoodCounter == regularBridgewoodCounter &&
        regularLakewoodCounter == regularRidgewoodCounter &&
        regularRidgewoodCounter == regularBridgewoodCounter
      ) {
        return "Ridgewood";
      }

      /* Retornos em caso de serem menores */

      //Bridgewood como menor
      if (
        regularBridgewoodCounter < regularLakewoodCounter &&
        regularBridgewoodCounter < regularRidgewoodCounter
      ) {
        return "Bridgewood";
      }
      //Ridgewood como menor
      if (
        regularRidgewoodCounter < regularLakewoodCounter &&
        regularRidgewoodCounter < regularBridgewoodCounter
      ) {
        return "Ridgewood";
      }
      //Lakewood como menor
      if (
        regularLakewoodCounter < regularBridgewoodCounter &&
        regularLakewoodCounter < regularRidgewoodCounter
      ) {
        return "Lakewood";
      }

      //Retornando por maior classificacao quando iguais

      /*     Lakewood é o de menor classificação logo não
       tem como ter um caso em que seja o de menor classificação  */

      //Bridgewood maior classificacao em relacao ao Lakewood
      if (
        regularLakewoodCounter == regularBridgewoodCounter &&
        regularBridgeCounter < regularRidgewoodCounter
      ) {
        return "Bridgewood";
      }

      //Ridgewood maior classificacao em relacao ao Bridgewood
      if (
        regularBridgewoodCounter == regularRidgewoodCounter &&
        regularBridgewoodCounter < regularLakewoodCounter
      ) {
        return "Ridgewood";
      }

      //Ridgewood maior classificação em relação ao Lakewood
      if (
        rewardsLakewoodCounter == rewardsRidgewoodCounter &&
        rewardsLakewoodCounter < rewardsBridgewoodCounter
      ) {
        return "Ridgewood";
      }

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

      //Log do output dos valores
      console.log(
        rewardsBridgewoodCounter +
          rewardsLakewoodCounter +
          rewardsRidgewoodCounter
      );

      //Verificar se todos os valores a pagar são iguais e retornar o de maior classificacao
      if (
        rewardsLakewoodCounter == rewardsBridgewoodCounter &&
        rewardsLakewoodCounter == rewardsRidgewoodCounter &&
        rewardsRidgewoodCounter == rewardsBridgewoodCounter
      ) {
        return "Ridgewood";
      }

      //Retornos em caso de serem menores

      //Bridgewood como menor
      if (
        rewardsBridgewoodCounter < rewardsLakewoodCounter &&
        rewardsBridgewoodCounter < rewardsRidgewoodCounter
      ) {
        return "Bridgewood";
      }

      //Ridgewood como menor
      if (
        rewardsRidgewoodCounter < rewardsLakewoodCounter &&
        rewardsRidgewoodCounter < rewardsBridgewoodCounter
      ) {
        return "Ridgewood";
      }

      //Lakewood como menor
      if (
        rewardsLakewoodCounter < rewardsBridgewoodCounter &&
        rewardsLakewoodCounter < rewardsRidgewoodCounter
      ) {
        return "Lakewood";
      }

      //Retornando por maior classificacao quando iguais

      /*     Lakewood é o de menor classificação logo não
       tem como ter um caso em que seja o de menor classificação  */

      //Bridgewood maior classificacao ao Lakewood
      if (
        rewardsLakewoodCounter == rewardsBridgewoodCounter &&
        rewardsBridgeCounter < rewardsRidgewoodCounter
      ) {
        return "Bridgewood";
      }

      //Ridgewood maior classificação em relacao ao Bridgewood
      if (
        rewardsBridgewoodCounter == rewardsRidgewoodCounter &&
        rewardsBridgewoodCounter < rewardsLakewoodCounter
      ) {
        return "Ridgewood";
      }

      //Ridgewood maior classificação em relação ao Lakewood
      if (
        rewardsLakewoodCounter == rewardsRidgewoodCounter &&
        rewardsLakewoodCounter < rewardsBridgewoodCounter
      ) {
        return "Ridgewood";
      }
  }
};

module.exports = checkValue;
