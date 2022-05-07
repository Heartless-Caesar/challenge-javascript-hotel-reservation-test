const regularCompare = (Lake, Bridge, Ridge) => {
  /*
  
           Registra o valor total dos dias do final
           de semana de hospedagem                 */

  //Verificar se todos os valores a pagar são iguais e retornar o de maior classificacao
  if (Lake == Bridge && Lake == Ridge && Ridge == Bridge) {
    return "Ridgewood";
  }

  /* -------------------------------------------------------- */

  /* Retornos em caso de serem menores */

  //Bridgewood como menor
  if (Bridge < Lake && Bridge < Ridge) {
    return "Bridgewood";
  }
  //Ridgewood como menor
  if (Ridge < Lake && Ridge < Bridge) {
    return "Ridgewood";
  }
  //Lakewood como menor
  if (Lake < Bridge && Lake < Ridge) {
    return "Lakewood";
  }

  /* -------------------------------------------------------- */

  //Retornando por maior classificacao quando iguais

  /*     Lakewood é o de menor classificação logo não
   tem como ter um caso em que seja o de menor classificação  */

  //Bridgewood maior classificacao em relacao ao Lakewood
  if (Lake == Bridge && Bridge < Ridge) {
    return "Bridgewood";
  }

  //Ridgewood maior classificacao em relacao ao Bridgewood
  if (Bridge == Ridge && Bridge < Lake) {
    return "Ridgewood";
  }

  //Ridgewood maior classificação em relação ao Lakewood
  if (Lake == Ridge && Lake < Bridge) {
    return "Ridgewood";
  }
};

module.exports = regularCompare;
