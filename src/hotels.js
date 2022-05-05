import data from "./data";

const getCheapestHotel = (input) => {
  //Regex para encontrar valores entre parenteses
  const regexDia = /\(([^()]*)\)/g;

  //Separa cada elemento separado por virgula
  const days = input.split(",");

  //Separa o primeiro elemento da string, o tipo de cliente normal ou fiel
  const clientType = input.split(":")[0];

  //Separa cada elemento separado para achar o dia entre parenteses
  console.log(clientType);
  days.forEach((x) => {
    const matches = [...x.matchAll(regexDia)];

    //Verificacao output dos dias
    console.log(Array.from(matches, (m) => m[1]));

    //Dias para verificacao dos valores
    const weekDays = /mon|tues|wed|thur|fri/;
    const weekEnd = /sat|sun/;

    switch (clientType) {
      case "Regular":
        let regularLakewoodCounter = 0;
        let regularRidgewoodCounter = 0;
        let regularBridgewoodCounter = 0;

        //Verifica se ha dias da semana
        let regularMatchWeekDay = weekDays.test(x);

        //Registra o valor total dos dias uteis de hospedagem
        if (regularMatchWeekDay) {
          regularLakewoodCounter += 110;
          regularBridgewoodCounter += 160;
          regularRidgewoodCounter += 220;
        }

        /* 
           Verifica se ha dias do final de semana
           no ciclo de hospedagem                 */
        let regularMatchWeekEnd = weekEnd.test(x);

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
        break;
      case "Rewards":
        let rewardsLakewoodCounter = 0;
        let rewardsRidgewoodCounter = 0;
        let rewardsBridgewoodCounter = 0;
        //Verifica se ha dias da semana
        let rewardsMatchWeekDay = weekDays.test(x);

        //Registra o valor total dos dias uteis de hospedagem
        if (rewardsMatchWeekDay) {
          rewardsLakewoodCounter += 80;
          rewardsBridgewoodCounter += 110;
          rewardsRidgewoodCounter += 100;
        }

        /* 
           Verifica se ha dias do final de semana
           no ciclo de hospedagem                 */
        const rewardsMatchWeekEnd = weekEnd.test(x);

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
  });
};

getCheapestHotel("Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)");
getCheapestHotel("Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)");
