// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];
// const newArray = numbers.map(number => Math.pow(number, 2));
// console.log(newArray);

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];
// const newArray = data.flatMap(data => data.values);
// console.log(newArray);

// // Дано масив об'єктів.
// // Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// // Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];
// const person = people.some(item => item.age < 20);
// console.log(person);

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const checkForEven = numbers.every(number => number % 2 === 0);
// console.log(checkForEven);

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const oddNumber = numbers.find(number => number % 2 !== 0);

// console.log(oddNumber);

// Відсортуйте масив чисел [4, 2, 5, 1, 3] 
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// const newArray = numbersArray.toSorted((a, b) => a - b);

// console.log(newArray);

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту. 
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// const sortedStringArray = stringArray.toSorted((firstElement, secondElement) => firstElement.localeCompare(secondElement));
// console.log(sortedStringArray);

//  Відсортуйте масив об'єктів за віком у порядку зростання. 
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// const sortedArray = users.toSorted((firstElement, secondElement) => firstElement.age - secondElement.age);
// console.log(sortedArray);

// Дано масив об'єктів. 
// Створіть новий масив, що містить тільки об'єкти, в яких 
// вік більше 20 років. 
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]
// const minAge = 20;
// const newArray = user.filter(user => user.age > minAge);
// console.log(newArray);

// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];
// const calculator = numbers.reduce((total, number) => total += number, 0);
// console.log(calculator);

 // Розроби клас Calculator, який дозволяє виконувати арифметичні 
 //  операції над числом за допомогою методів класу, підтримуючи  
 // ланцюжковий виклик (method chaining).
 //
 // Вимоги до класу Calculator
 // - Метод number(value)
 // Встановлює початкове значення для наступних обчислень.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод getResult, Повертає поточний результат усіх операцій.
 // Не змінює значення, просто повертає його.
 
 // - метод add - Додає value до поточного значення.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод substruct - Віднімає value від поточного значення. Повертає this.
 
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод multiply -Множить поточне значення на value. Повертає this.
 
 // Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// class Calculator {
//     constructor() {
//     this.result = 0;
//     }

//     number(value) {
//         this.result = value;
//         return this;
//     }
//     getResult() {
//         return this.result;
//     }
//     add(value) {
//         this.result += value;
//         return this;
//     }
//     substract(value) {
//         this.result -= value;
//         return this;
//     }
//     divide(value) {
//         if (value !== 0) { this.result /= value; }
//         else {
//             console.log('Error, division by zero is not allowed!');           
//         }
//         return this;
//     }
//     multiply(value) {
//         this.result *= value;
//         return this;
//     }
// }

 
 // Приклад використання:
// const calc = new Calculator();
// console.log(calc);

// const result = calc.number(10).add(5).substract(3).multiply(4).divide(2).getResult();
// const result = calc.number(10).add(5);

// console.log(result); 



 // Напиши клас Client який створює об'єкт з властивостями login email.
 // Оголоси приватні властивості #login #email, доступ до яких зроби 
 // через геттер та сеттер login email
 
// class Client {
//     #login;
//     #email;
//     constructor(params) {
//         this.#login = params.login;
//         this.#email = params.email;
//     }
//     get email() {
//         return this.#email;
//     }
//     set email(newEmail) {
//         this.#email = newEmail; 
//     }

//     get login() {
//         return this.#login;
//     }
//     set login(newLogin) {
//         this.#login = newLogin;
//     }
// }
 
// const user = new Client({ login: 'mango', email: 'mango@gamil.com'});
// console.log(user);
// console.log(user.login);
// console.log(user.email);
// user.email = 'avocado@gmail.com';
// user.login = 'avocado';
// console.log(user.login);
// console.log(user.email);

  //  Наслідування у класах!
  // Cтворіть клас `Person`, який містить наступні властивості:
  //  - `name` - ім'я людини;
  //  - `age`- вік людини;
  //  - `gender` - стать людини;
  //  - `email`- електронна пошта людини.
  
  // Крім того, клас `Person` має мати метод `getDetails()`,
  // який повертає об'єкт з ім'ям, віком, статтю 
  //та електронною поштою людини.
  
  // 
  // Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  //  - salary - зарплата співробітника;
  //  - department - відділ, в якому працює співробітник.
  // Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

class Person {
    constructor(params) {
        this.name = params.name;
        this.age = params.age;
        this.gender = params.gender;
        this.email = params.email;
    }
    getDetails() {
        return {
            name: this.name,
            age: this.age,
            gender: this.gender,
            email: this.email,
        };
    }
}

class Employee extends Person {
    constructor(params) {
        super(params);
        this.salary = params.salary;
        this.department = params.department;
    }
    getEmployeeDetails() {
        return {
            salary: this.salary,
            department: this.department,
        };
    }
}
const personOne = new Person({ name: 'Mango', age: 28, gender: 'female', email: 'mango@gmail.com' })
console.log(personOne.getDetails());

const newEmployee = new Employee({ salary: 1000, department: 'marketing' });
console.log(newEmployee.getEmployeeDetails());