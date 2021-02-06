'use strict';

let isNumber = function (number) {
  return !isNaN(parseFloat(number) && isFinite(number));
};

let money = Number(0),
  income = "Фриланс",
  addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую"),
  deposit = confirm('Есть ли у вас депозит в банке?'),
  mission = 3500000,
  period = 6,
  budgetDay;

let start = function () {
  do {
    money = +prompt("Ваш месячный доход?");
  } while (!isNumber(money));
};

start();

let questionsExpenses = [],
  questionsAmount = [];

let showTypeOf = function (data) {
  console.log(typeof (data));
};

let getExpensesMonth = function (numbersQuestions) {

  for (let i = 0; i < numbersQuestions; i++) {
    questionsExpenses[i] = prompt("Введите обязательную статью расходов.");
    questionsAmount[i] = +prompt("Во сколько это обойдется?");
  }

  return questionsAmount[0] + questionsAmount[1];
};

function getAccumulatedMonth() {
  return money - getExpensesMonth(2);
}

let accumulatedMonth = getAccumulatedMonth();

function getTargetMonth() {
  let deadlineGoal = Math.round(mission / accumulatedMonth);

  if (deadlineGoal < 0) {
    return "Цель не будет достигнута";
  }

  return "Цель будет достигнута через " + deadlineGoal + " месяцев";
}

budgetDay = Math.floor(accumulatedMonth / 30);

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

  return "Что то пошло не так";
}

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log("Сумма расходов за месяц " + getExpensesMonth());
console.log(addExpenses.toLowerCase().split(", "));
console.log("Бюджет на день " + budgetDay);
console.log(getTargetMonth());
console.log(getStatusIncome());