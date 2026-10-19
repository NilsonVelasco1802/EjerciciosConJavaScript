const temperatures = [24, 29, 31, 22, 27, 30, 26];

let days = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo"
];

let sumTemperatures = 0;
let averageTemperatures = 0;
let position = 0;
let daysAboveAverage = 0;
let daysAbove28 = 0;

let higherTemperatureDays = temperatures[0];


for (let i = 0; i < temperatures.length; i++) {
    sumTemperatures += temperatures[i];
}


averageTemperatures = sumTemperatures / temperatures.length;


for (let i = 1; i < temperatures.length; i++) {
    if (temperatures[i] > higherTemperatureDays) {
        higherTemperatureDays = temperatures[i];
        position = i;
    }
}


for (let i = 0; i < temperatures.length; i++) {

    if (temperatures[i] > averageTemperatures) {
        daysAboveAverage++;
        console.log(days[i] + ": " + temperatures[i] + " °C");
    }

    if (temperatures[i] > 28) {
        daysAbove28++;
    }
}


console.log("Temperatura máxima: " + higherTemperatureDays + " °C");
console.log("Día con mayor temperatura: " + days[position]);

console.log("Temperatura promedio: " + averageTemperatures + " °C");
console.log("Días por encima del promedio: " + daysAboveAverage);

if (daysAbove28 > 3) {
    console.log("Alerta de calor");
}





