//Лабораторна робота 3: JavaScript – Робота із змінними та структурами данних

//1. Виведіть число згенероване випадковим чином. 

var randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

//2. Створити змінні базових типів, виведіть їх на екран. 

// Ціле число (number)
let age = 30;
console.log(age);

// Дійсне число (number)
let price = 19.99;
console.log(price);

// Рядок (string)
let name = "John";
console.log(name);

// Булеве значення (boolean)
let isOldEnough = true;
console.log(isOldEnough);

// Масив (array)
let fruits = ["apple", "banana", "orange"];
console.log(fruits);

// Об'єкт (object)
let person = {name: "John", age: 30};
console.log(person);

//3. Збережіть суму двох чисел і збережіть її у третю змінну, виведіть її на екран. 

let num1 = prompt("Введіть перше число:");
let num2 = prompt("Введіть друге число:");
let sum = Number(num1) + Number(num2);

console.log(sum); // виведе суму двох чисел

//4. Створіть файл script.js. Підключіть його в нижню частину файлу index.html. створіть три діалогових вікна з alert(), prompt(), confirm(). 
// Виконання завдання в інших файлах.

//5. Запитайте у користувача його вік. Виведіть фразу “Ваш вік ____”

let age = prompt('Введіть свій вік:');
alert(`Ваш вік ${age}`);

//6. Ввести кількість купленого товару, ціну за одиницю. Виведіть суму покупки.  

var amount = parseFloat(prompt('Введіть кількість товару'));
var price = parseFloat(prompt('Введіть ціну за одиницю товару'));
var total = amount * price;

alert('Сума покупки: ' + total)

//7. Введіть число – визначте чи воно від’ємне. 

let number = prompt("Введіть число:");
if (number < 0) {
  alert("Введене число є від'ємним.");
} else {
  alert("Введене число не є від'ємним.");
}

//8. Введіть номер дня тижня, виведіть його назву

let dayNumber = prompt('Введіть номер дня тижня:');

if (dayNumber == 1) {
  alert('Понеділок');
} else if (dayNumber == 2) {
  alert('Вівторок');
} else if (dayNumber == 3) {
  alert('Середа');
} else if (dayNumber == 4) {
  alert('Четвер');
} else if (dayNumber == 5) {
  alert('П’ятниця');
} else if (dayNumber == 6) {
  alert('Субота');
} else if (dayNumber == 7) {
  alert('Неділя');
} else {
  alert('Некоректне значення');
}

//9. Виведіть таблицю множення числа 6. 

for (var i = 1; i <= 10; i++) {
  var result = 6 * i;
  console.log("6 * " + i + " = " + result);
}

//10. Задайте одномірний масив n=5. Виведіть квадрат третього числа, суму першого і останнього елемента суму квадратів від’ємних елементів. 

// Задаємо масив
var n = [2, 4, -6, 1, 0];

// Виводимо квадрат третього числа
console.log(n[2] ** 2);

// Виводимо суму першого і останнього елементів
console.log(n[0] + n[n.length - 1]);

// Знаходимо суму квадратів від'ємних елементів
var sum = 0;
for (var i = 0; i < n.length; i++) {
  if (n[i] < 0) {
    sum += n[i] ** 2;
  }
}
console.log(sum);

//11. Створіть об’єкт машина. Поля: ім’я власника, назва моделі, об’єм двигуна. Створіть масив з
//кількома об’єктами, виведіть машину з мінімальним об’ємом двигуна. 

// Створення об'єкту машини
const car = {
  ownerName: 'John',
  modelName: 'Toyota Corolla',
  engineSize: 1.6,
};

// Створення масиву з об'єктами машин
const cars = [
  {
    ownerName: 'Jane',
    modelName: 'Honda Civic',
    engineSize: 1.8,
  },
  {
    ownerName: 'Mary',
    modelName: 'Mazda 3',
    engineSize: 1.5,
  },
  {
    ownerName: 'Bob',
    modelName: 'Ford Focus',
    engineSize: 1.4,
  },
];

// Пошук машини з мінімальним об'ємом двигуна
let minEngineCar = cars[0];
for (let i = 1; i < cars.length; i++) {
  if (cars[i].engineSize < minEngineCar.engineSize) {
    minEngineCar = cars[i];
  }
}

// Виведення машини з мінімальним об'ємом двигуна
console.log(`Машина з мінімальним об'ємом двигуна: ${minEngineCar.ownerName}'s ${minEngineCar.modelName} з об'ємом двигуна ${minEngineCar.engineSize} л`);


//12. Введіть 4 числа, Знайти max{min(a, b), min(c, d) 

// Введення 4 чисел
var a = parseInt(prompt('Введіть a:'));
var b = parseInt(prompt('Введіть b:'));
var c = parseInt(prompt('Введіть c:'));
var d = parseInt(prompt('Введіть d:'));

// Знаходження мінімальних значень
var min1 = Math.min(a, b);
var min2 = Math.min(c, d);

// Знаходження максимального значення між min1 та min2
var max = Math.max(min1, min2);

// Виведення результату
console.log('max{min(a, b), min(c, d)} = ' + max);

//13. Задайте слово, виведіть його довжину та запишіть його в зворотному порядку.

let word = "JavaScript"; // задане слово
let length = word.length; // довжина слова
let reverseWord = ""; // зворотнє слово

// створення зворотнього слова
for (let i = length - 1; i >= 0; i--) {
  reverseWord += word[i];
}

console.log("Довжина слова: " + length); // виведення довжини
console.log("Зворотнє слово: " + reverseWord); // виведення зворотнього слова