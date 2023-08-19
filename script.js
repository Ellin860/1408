// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

// const arr = [0,1,2,3,4,5,6,7,8,9,10];
// for (let index = 0; index < array.length; index++) {
//     // console.log(`0 - это ноль`);
//     let res = arr[index]

//     if (res % 2 === 0){
//     const element = array[index];
//     } 
// }


// let num = 10;
// if (num % 2 === 0) {
//     console.log("Четное число");
// }


// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arrTwo = [1, 2, 3, 4, 5, 6, 7];
const arrTwoNext = arrTwo.slice(0,3);
arrTwoNext.push(6,7);
console.log(arrTwoNext);



 
// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, 
// и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3







function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
 
console.log("Random Number between 0 and 9: ")
 

let numbOne = randomNumber(0, 9)
console.log(numbOne);

let numbTwo = randomNumber(0, 9);
console.log(numbTwo);

let numbThree = randomNumber(0, 9);
console.log(numbThree);

let numbFour = randomNumber(0, 9);
console.log(numbFour);

let numbFive = randomNumber(0, 9);
console.log(numbFive);

const arrThree = [numbOne, numbTwo, numbThree, numbFour, numbFive];
console.log(arrThree);


console.log(`Сумма элементов массива: ${arrThree.reduce((a,b ) => a+b)}`);

 const  minElement = Math.min(...arrThree);

console.log(`Минимальный элемент массива равен: ${minElement}`)

if (arrThree.indexOf(3)){
    console.log("В массиве есть число 3");}
    

