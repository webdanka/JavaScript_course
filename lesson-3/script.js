'use strict';

let money = 26500, 
  income = "Фриланс",
  addExpenses = "Аренда квартиры, Интеренет, Подписка на Netflix",
  deposit = false, 
  mission = 3500000,
  period = 6;

console.log(typeof money, income, deposit);
console.log(addExpenses.length);
console.log("Период равен " + period +  " месяцев. Цель заработать " + mission + " рублей.");

console.log(addExpenses.toLowerCase().split(", "));

let budgetDay = money / 30;

console.log(budgetDay);

/* 3 урок */

money = +prompt("Ваш месячный доход?");

addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");

deposit = confirm('Есть ли у вас депозит в банке?');

let questionsExpenses = [], 
questionsAmount = [];

function askQuestions(numberQuestion) {

  for (var i = 0; i < numberQuestion; i++) {
    questionsExpenses[i] = prompt("Введите обязательную статью расходов.");
    questionsAmount[i] = +prompt("Во сколько это обойдется?");
  }

  return questionsAmount;
}

askQuestions(4);

let budgetMonth = money - (questionsAmount[0] + questionsAmount[1] + questionsAmount[2] + questionsAmount[3]);
console.log("Бюджет на месяц: " + budgetMonth);

let monthsAchieving  = Math.round(mission / budgetMonth);
console.log('Вы достигните цель за ' + monthsAchieving + ' месяцев');

budgetDay = Math.floor(budgetMonth / 30);
console.log(budgetDay);

if (budgetDay >= 1200) {
  console.log("У вас высокий уровень дохода");
} 

if (budgetDay >= 600 && budgetDay < 1200) {
  console.log("У вас средний уровень дохода");
}

if (budgetDay < 600 && budgetDay >= 0) {
  console.log("К сожалению у вас уровень дохода ниже среднего");
}

if (budgetDay < 0) {
  console.log("Что то пошло не так");
}
