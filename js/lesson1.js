// const number = prompt("Введіть число");

// if (Number(number) === 10) {
//     alert('Вірно');
// } else {
//     alert('Невіроно');
// }



// const min = Math.floor(Math.random() * (59 - 0) + 0);

// const min = Math.floor(Math.random() * (59 - 0) + 0);

// if (min <= 15) {
//     alert(`${min} входить в першу чверть`);
// } else if (min > 15 && min <= 30) {
//     alert(`${min} входить в другу чверть`);
// } else if (min > 30 && min <= 45) {
//     alert(`${min} входить в третю чверть`);
// } else {
//     alert(`${min} входить в четверту чверть`);
// }


// const num = prompt("Введи число від 1 до 4");
// let result;
// switch (num) {
//     case '1':
//         result = 'зима';
//         break;
//     case '2':
//         result = 'весна';
//         break;
//     case '3':
//         result = 'літо';
//         break;
//     case '4':
//         result = 'осінь';
//         break;
//     default:
//        result = 'Вибачте, але ви маєте ввести значення від 1 до 4 включно';
// }
// console.log(result);


// const minutesInput = prompt("Введи кількість хвилин");
// const result = Number(minutesInput);

// const hours = Math.floor(result / 60);
// const minutes = result % 60;

// const formattedHours = String(hours).padStart(2, '0');
// const formattedMinutes = String(minutes).padStart(2, '0');

// console.log(`${formattedHours}:${formattedMinutes}`);

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// const login = prompt("Введіть логін");
// console.log(login);
// let password;
// if (login.includes('Адмін')) {
//     prompt(password);
// }

// let number = 0;

// function getNumbers(min, max) {
//     for (let i = max; i >= min; i -= 1) {
//         console.log(i);
//         if (i % 2 === 0) {
//             number += i;
//         }
//     }
//     return number;
// }
// getNumbers(16, 34);
// console.log(number);

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return `Not a number!`
//     }
//         return a > b ? b : a;
// }
// console.log(min(12, 18));

