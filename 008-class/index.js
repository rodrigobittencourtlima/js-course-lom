/*
Luis Otávio Miranda tem 30 anos, pesa 84 kg, tem 1.8 metros de altura e seu IMC é de 25.9. Nasceu em 1980.
*/
const name = 'Rodrigo';
const lastName = 'Bittencourt de Lima';
const age = 25;
const weight = 80.00;
const heightInMeters = 1.82;

let imc = weight / (heightInMeters * heightInMeters);
let currentTime = new Date();
let currentYear = currentTime.getFullYear();
let bornYear = currentYear - age;


let sentence = name + ' ' + lastName + ' ' + 'tem ' + age + ' anos, pesa ' + weight + ' kilos, tem ' + heightInMeters + ' metros de altura e seu IMC é de ' + imc + '. Nasceu em ' + bornYear + '.';
console.log(sentence);

// templete strings
let templeteString = `${name} ${lastName} tem ${age} anos, pesa ${weight} kilos, tem ${heightInMeters} metros de altura e seu IMC é de ${imc}. Nasceu em ${bornYear}.`;
console.log(templeteString);