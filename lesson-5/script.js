'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
  income = "Фриланс",
  addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую"),
  deposit = confirm('Есть ли у вас депозит в банке?'),
  mission = 3500000,
  period = 6,
  budgetDay = 0;

let start = function() {
  
  do {
    money = +prompt("Ваш месячный доход?");
  } while (isNumber(money));

};

start();

let questionsExpenses = [],
  questionsAmount = [];

function askQuestions(numberQuestion) {

  for (var i = 0; i < numberQuestion; i++) {
    questionsExpenses[i] = prompt("Введите обязательную статью расходов.");
    questionsAmount[i] = +prompt("Во сколько это обойдется?");
  }

  return questionsAmount;
}

askQuestions(2);

function showTypeOf(data) {
  console.log(data, typeof(data));
}

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

function getExpensesMonth() {
  return questionsAmount[0] + questionsAmount[1] + questionsAmount[2] + questionsAmount[3];
}

console.log("Сумма расходов за месяц " + getExpensesMonth());

console.log(addExpenses.toLowerCase().split(", "));

function getAccumulatedMonth() {
  return money - getExpensesMonth();
}

let accumulatedMonth = getAccumulatedMonth();

function getTargetMonth() {
  return Math.round(mission / accumulatedMonth);
}

console.log("Цель будет достигнута через " + getTargetMonth() + " месяцев");

budgetDay = Math.floor(accumulatedMonth / 30);

console.log("Бюджет на день " + budgetDay);

function getStatusIncome() {
  if (budgetDay >= 1200) {
    return "У вас высокий уровень дохода";
  } 
  
  if (budgetDay >= 600 && budgetDay < 1200) {
    return "У вас средний уровень дохода";
  }
  
  if (budgetDay < 600 && budgetDay >= 0) {
    return "К сожалению у вас уровень дохода ниже среднего";
  }
  
  if (budgetDay < 0) {
    return "Что то пошло не так";
  }
}

console.log(getStatusIncome());

