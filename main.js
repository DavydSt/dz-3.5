"use strict";

// 1 =============

const choice = "Чай";

switch (choice) {
  case "Кава":
    console.log("Кава");
    break;

  case "Чай":
    console.log("Чай");
    break;

  case "Сік":
    console.log("Сік");
    break;

  default:
    console.log("not right, do again!");
}

// 2 =============

const day = "пʼятниця";

switch (day) {
  case "понеділок":
  case "вівторок":
  case "середа":
  case "четвер":
  case "пʼятниця":
    console.log("Це робочий день");
    break;
  case "субота":
  case "неділя":
    console.log("Це вихідний день");
    break;
  default:
    console.log("not right, do again!");
}

// 3 =============

const month = 3;

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Зима");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Весна");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Літо");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Осінь");
    break;
  default:
    console.log("not right, do again!");
}

// 4 =============

const color = "червоний";

switch (color) {
  case "червоний":
    console.log("стоп");
    break;
  case "зелений":
    console.log("йти");
    break;
  case "жовтий":
    console.log("чекати");
    break;
  default:
    console.log("not right, do again!");
}

// 5 =============

const num1 = 3;
const num2 = 7;
const operator = "+";

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        console.log(num1 / num2);
        if (num1 === 0 && num2 === 0) {
            console.log("ведить інше число - не нуль");
        }
        break;
}