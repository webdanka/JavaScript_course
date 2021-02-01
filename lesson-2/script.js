const money = 26500, 
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