"use strict"

// 1 =============

const choice = "Чай";

if ( choice === "Кава" ) {
    console.log("Кава");
} else if (  choice === "Чай" ) {
    console.log("Чай");
} else if (  choice === "Сік" ) {
    console.log("Сік");
}

// 2 =============

const day = "пʼятниця"

if (day === "понеділок" || "вівторок" || "середа" || "четвер" || "пʼятниця"){
    console.log("це робочий день");
} else if (day === "субота" || "неділя") {
    console.log("це не робочий день");
}

// 3 =============

let month = 3; 

if (month >= 3 && month <= 5) {
    console.log("це весна");
} else if (month >= 6 && month <= 8) {
    console.log("це літо");
} else if (month >= 9 && month <= 11) {
    console.log("це осінь");
} else if (month === 12 || month === 1 || month === 2) {
    console.log("це зима");
}

// 4 =============

const color = "червоний";

if (color === "червоний") {
    console.log("стоп");
} else if (color === "зелений") {
    console.log("йти");
} else if (color === "жовтий") {
    console.log("чекати");
}

// 5 =============

const num1 = 3;
const num2 = 7;
const operator =  "+";

if (operator === "+") {
   console.log(num1 + num2);
} else if (operator === "-") {
    console.log(num1 - num2);
} else if (operator === "*") {
    console.log(num1 * num2);
}else if (num1 === 0 && num2 === 0) {
    console.log("ведить інше число - не нуль");
} else if (operator === "/") {
    console.log(num1 / num2);
}

// else if ((num1 === 0 && num2 === 0) || num1 / num2) {
//     console.log("рівняння не вірне");
// }


