import data from "./data";

const weekDays = ["mon", "tues", "thurs", "fri"];
const weekEnd = ["sat", "sun"];

const getCheapestHotel = (input) => {
  //Regex para encontrar valores entre parenteses
  const regexDia = /\(([^()]*)\)/g;

  //Separa cada elemento separado por virgula
  const days = input.split(",");

  //Separa o primeiro elemento da string, o tipo de cliente normal ou fiel
  const type = input.split(":")[0];

  //Separa cada elemento separado para achar o dia entre parenteses
  console.log(type);
  days.forEach((x) => {
    const matches = [...x.matchAll(regexDia)];
    console.log(Array.from(matches, (m) => m[1]));
  });
};

getCheapestHotel("Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)");
