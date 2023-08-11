console.log("Hello I am testing with the console log.");

//? Writing expressions with variables

//! exercise 1
// let nicoCantarelli = "Nico Cantarelli";
// console.log(nicoCantarelli);

// ! exercise 2
// let myAge = 27;
// console.log(myAge);

// ! exercise 3
// let tanyaAge = 31;
// let ageDiff = tanyaAge - myAge;
// console.log("The difference is: " + ageDiff)

// ? Writing code with conditionals

// ! exercise 4
// if (myAge > 21) {
//     console.log("You are older than 21")
// } else {
//     console.log("You are not older than 21")
// }

// ! exercise 5
// if (myAge > tanyaAge) {
//     console.log("You are older than Tanya")
// } if (myAge < tanyaAge) {
//     console.log("You are younger than Tanya")
// } if (myAge == tanyaAge) {
//     console.log("You are the same age as Tanya")
// }

// ? JavaScript Arrays

// ! exercise 6
// let myClass = ["Dima", "Thair", "Helene", "Mischa", "Rafal", "Nico", "Heron"]
// console.log(myClass[0])
// console.log(myClass[6])

// for (let i = 0; i < myClass.length; i++) {
//     console.log(myClass[i])
// }

// ? Looping over an array

// ! exercise 7
// let classAge = [40, 34, 34, 35, 30, 27, 14]
// let i = 0;
// while (i < classAge.length) {
//     console.log(classAge[i]);
//     i++;
// }
// //************************************************* */
// let classAge2 = [40, 34, 34, 35, 30, 27]
// let a = 0;
// while (a < classAge2.length) {
//     if (classAge2[a] % 2 == 0)
//     console.log(classAge2[a]);
//     a++;
// }
// //************************************************* */
// let ages = [40, 34, 34, 35, 30, 27];
// let even = [];
// for (let e = 0; e < ages.length; e++) {
//     if (ages[e] % 2 == 0)
//         even.push(ages[e]);
// }
// console.log(even)

// ! exercise 8
// function findsum(classAge) {
//     let sum = 0;
//     for (let i = 0; i < classAge.length; i++) {
//         sum += classAge[i];
//     }
//     return sum;
// }
// let totalSum = findsum(classAge);
// console.log("The sum of all the elements in the ages array is ", totalSum);

// ! exercise 9
// function EvenNumbers(classAge) {
//     let sum = 0;
//     for (let i = 0; i < classAge.length; i++) {
//         if (classAge[i] % 2 == 0) {
//             sum += classAge[i];
//         }
//     }
//     return sum;
// }
// let evenSum = EvenNumbers(classAge);
// console.log("The sum of all the even elements in the ages array is ", evenSum);

// ! exercise 10
// function displayNumbersAtEvenIndex(classAge) {
//     for (let i = 2; i < classAge.length; i += 2) {
//      console.log(classAge[i]);       
//     }
// }
// displayNumbersAtEvenIndex(classAge);

// ? Function exercises

// ! exercise 11
// let result = 10;
// function multiplication(number) {
//     console.log(number*number);
// };
// multiplication(result);

// ! exercise 12
// let number = 10;
// function multiplication(number) {
//     return number * number;
// }
// console.log(multiplication(number));

//! exercise 13
// function multiplicationNumbers(first, second) {
//     return first * second;
// }
// let result = multiplicationNumbers(10, 20);
// console.log(result)
// //************************************************* */
// function multiNumbers(x, y) {
//     return x * y;
// }
// let total = multiNumbers(4, 5);
// console.log(total)
// //************************************************* */
// function multiplyNumbers(a, b) {
//     return a * b;
// }
// let sum = multiplyNumbers(27, 31);
// console.log(sum)

//! exercise 14
// function triangleType(side1, side2, side3) {
//     if (side1 === side2 && side2 === side3) {
//         return "Equilateral";
//     } else if (side1 === side2 || side1 === side3 || side2 === side3) {
//         return "Isosceles";
//     } else {
//         return "Scalene";
//     }
// }
// let side1 = 20;
// let side2 = 20;
// let side3 = 20;
// let typeOfTriangle = triangleType(side1, side2, side3);
// console.log("Type of triangle is", typeOfTriangle);

//! exercise 15
// let array = [10, 15, 23, 43, 56, 24, 85, 3];
// let min = Math.min(...array)
// console.log(min)

//! exercise 16
// let max = Math.max(...array)
// console.log(max)

//! exercise 17
// let array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
// let index = 27;
// function twoParameters(arr, i) {
//     console.log(arr[i]);
// }
// twoParameters(array, index);

//! exercise 18
// let colors = ["red", "green", "white", "black"];
// console.log(colors.join(" "));
//* I can't incorporate this into a function for whatever reason. Googled it but can't figure out the right wording to find a proper answer.

//? JavaScript Strings

//! exercise 19
// function reverseNumber(n) {
//     n = n + "";
//     return n.split("").reverse().join("");
// }
// console.log(Number(reverseNumber(32243)));

//! exercise 20``
// function alphabetOrder(str) {
//     return str.split("").sort().join("");
// }
// console.log(alphabetOrder("nicolas cantarelli"));

//! exercise 21
// function getLongestWord(str) {
//     let words = str.split(" ");
//     let maxLength = 0;
//     let longestWord = null;

//     for (let i = 0; i < words.length; i++) {
//         if  (maxLength < words[i].length) {
//              maxLength = words[i].length;
//              longestWord = words[i];
//         }
//     }
//     console.log(maxLength);
//     console.log(longestWord);
// }
// getLongestWord("Dog Precipitation");

//! exercise 22
// function changeCharacters() {
//     let thereIsLetters = "Caminos? A donde vamos no necesitaremos caminos.";
//     thereIsLetters = thereIsLetters.replaceAll("i", "1")
//     console.log(thereIsLetters)
// }
// changeCharacters()

//! exercise 23
// let capitalLetter = "nicolas Cantarelli"
// function capitalizeFirstLetter(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }
// console.log(capitalizeFirstLetter(capitalLetter));

//! exercise 24
// let endNumber = 21;
// function printEvenNumbers(number) {
//     for (let i = 2; i < number; i += 2) {
//         console.log(i);
//     }
// }
// printEvenNumbers(endNumber);

//! exercise 25
// let firstNumber = 50;
// let secondNumber = 61;
// function printOddNumbers(first, second) {
//     for (let i = first; i < second; i++) {
//         if (i % 2 !== 0) {
//             console.log(i);
//         }
//     }
// }
// printOddNumbers(firstNumber, secondNumber);

//! exercise 26
// var numberArray = [3, 6, 67, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 2, 2, 6, 99];
// function compareNumbers(number) {
//     number.sort((a, b) => a - b);
//     for (let i = 1; i < number.length - 1; i++) {
//         if (number[i] === number[i - 1] || number[i] === number[i + 1]) {
//             console.log(number[i]);
//         }
//     }
// }
// compareNumbers(numberArray)

//? DOM Manipulation

//! exercise 27
// let myBandList = ["Yes", "Rush", "Jethro Tull", "Renaissance"]
// function listBands(bandList) {
//     let myUl = document.getElementById("bandlist");
//     console.log(myUl);
//     let listElementsToCreate = bandList.length;

//     for (let i = 0; i < listElementsToCreate; i++) {
//         let myLiElement = document.createElement("li");
//         myLiElement.innerHTML = bandList[i];
//         myUl.appendChild(myLiElement);
//     }
// }
// listBands(myBandList);

//! exercise 28
function addMultTable(rows, cols) {
    
}