"use strict";

// let nums = [2,5,4,3,7];

// function checkOddNums(num){
//     return num%2==1
// }

// function checkEvenNums(num){
//     return num%2==0
// }


// function calculateNums(numbers, callback){
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         if (callback(numbers[i])) {
//             sum+=numbers[i]
//         }

//     }
//     console.log(sum);
// }

// calculateNums(nums, checkOddNums)
// calculateNums(nums, checkEvenNums)







// function sumOfEvemNums(numbers){
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i]%2==0) {
//             sum+=numbers[i]
//         }

//     }
//     console.log(sum);
// }

// function sumOfNumsGreaterSix(numbers){
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > 6) {
//             sum+=numbers[i]
//         }

//     }
//     console.log(sum);
// }




// function dvide(a, b, errorCallback, successCallback){

//     if (b===0) {
//         errorCallback("Can`t be devide to zero")
//     }
//     else{
//         let result  = a/b;
//         successCallback(`${result} - Diveded`)
//     }
// }

// function getError(error){
//     console.log("Error: " + error);
// }


// function getSuccess(success){
//     console.log("Success: " + success);
// }

// dvide(10,0,getError, getSuccess);

// //anonim function-dir, ozude callback-dir, elementi gotur, onun click event dinlenende bu func-i ishlet,,alert falan cixsin ya nese

// document.querySelector("button").addEventListener("click", function(){

// })







// function calculateNums(numbers, callback){
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         if (callback(numbers[i])) {
//             sum+=numbers[i]
//         }

//     }
//     console.log(sum);
// }

// calculateNums(nums, m => m%2==1);

// calculateNums(nums, m => m > 1); //anonim


// let text = "Azebaycan";

// console.log(text.length);

// console.log(text.slice(1,3));

// console.log(text.substring(0,5));

// console.log(text.substr(0,5)); ist olunmur

// let text = " Yasa Azebaycan";

// console.log(text.replace("Azer", "Test"));

// let text = " Yasa Azebaycan Azer";
// console.log(text.replaceAll("Azer", "Test"));

// let text1 = "Hello Word";

// let text2 = text1.toLocaleLowerCase();
// console.log(text2);


// let name = "Pervin";
// let surname = " Mirzeyev";

// let result = name.concat("-", surname);

// console.log(result);


// let text1 = "Salam";
// let text2 = "   Salam"

// console.log(text1 == text2.trim());

let text1 = "Salam";

// console.log(text1.charAt(1));
// console.log(text1.charCodeAt(1));


// entere click edende enter-in key kodun verir..neye click etsek kodu verir.. object verir..key kod ==13 consola nese cixart

// document.onkeydown = function(e){
//     console.log(e);
// }

//enter-e basanda alert verir... e-click olunan event--documentde hansi event bash verir,,,13 enterin kodu
// document.onkeydown = function(e){
//    if (e.keyCode==13) {
//         alert("Pressed enter")
//    }
// }



// let text = "Azerbaycan";

// for (let i = 0; i < text.length; i++) {

//     console.log(text[i]);
// }



// let text = "Azerbaycan";

// for (let i = 0; i < text.length; i++) {

//     if (text[i]=="c") {
//         console.log("yes");
//     }
// }

// let text = " Yasasin Azerbaycan dovleti ";

// let data = text.split("");

// console.log(data);


// let text = " Yasasin,Azerbaycan dovleti ";

// let data = text.split(",");

// console.log(data);


//item-lari bir bir verir

// let text = " Yasasin,Azerbaycan dovleti ";

// let data = text.split(",");

// data.forEach(element => {
//     console.log(element);
// });


// let numbers = [1,3,5,6,7];

// numbers.unshift(100);
// numbers.push(200);
// numbers.pop(200);
// numbers.shift(200);
// console.log(numbers);
// console.log(numbers.length);

// let res  = numbers.toString();
// console.log(res);


// let nums = [4,5,6,7,8];

// let result = numbers.join("-");
// console.log(result);


//kokunden deyishir
// let arr2 = numbers;

// arr2[0] = 300;

// console.log(arr2);

// console.log(numbers);


// let num1 = 5;
// let num2 = num1;

// num2= 100;

// console.log(num2);
// console.log(num1);


// let numbers = [1,3,5,6,7];


// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const children = myGirls.concat(myBoys);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.splice(2, 0, "Lemon", "Kiwi");

// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.splice(2, 0);

// console.log(fruits);


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(2);

// let address = "Ehmedli";
// console.log(address.includes());


// let nums = [1,2,3,4,5];

// let filteredDatas = nums.filter(m=>m>3);

// console.log(filteredDatas);

// let nums = [1,2,3,4,5];

// let filteredDatas = nums.find(m=>m>3);

// console.log(filteredDatas);



// let nums = [1,2,3,4,5];

// let filteredDatas = nums.findIndex(m=>m>3);

// console.log(filteredDatas);


//loremi d-ya kimi substring edek, d-ya kimi olan texti versi, avtomatik isteyirik, ve d-nin indeksin tapmaq isteyirem

// let text = "Lorem Ipsum is simply. Dummy text of the printing";
// let textArray = text.split("");
// let substringIndex = textArray.findIndex(m=> m == "D");
// let substringText = text.substring(0,substringIndex);
//  console.log(substringText);

// let text = "Lorem Ipsum is simply. Dummy text of the printing";

// const makeSubstring = text => {

//     let text = "Lorem Ipsum is simply. Dummy text of the printing";
//     let textArray = text.split("");
//     let substringIndex = textArray.findIndex(m => m == "D");
//     let substringText = text.substring(0, substringIndex);

//     return substringText;
// }

// console.log(makeSubstring(text));



// let text = "Lorem Ipsum is simply. Dummy text of the printing";

// const makeSubstring = text => {

    
//     let textArray = text.split("");
//     let substringIndex = textArray.findIndex(m => m == "D");
//     let substringText = text.substring(0, substringIndex);

//     return substringText;
// }

// document.querySelector("h1").innerText = makeSubstring(text);





// let text = "Lorem Ipsum is simply. Dummy text of the printing";

// const makeSubstring = text => {

    
//     let textArray = text.split("");
//     let substringIndex = textArray.findIndex(m => m == "D");
//     let substringText = text.substring(0, substringIndex);

//     return substringText;
// }

// let result = makeSubstring(text) + " ...";

// document.querySelector("h1").innerText = makeSubstring(text);


// let ages = [20,21,23,55,66];

// let result = ages.map(function(elem){
//     return elem*2
// })

// console.log(ages);
// console.log(result);


// let ages = [20,21,23,55,66];

// let result = ages.map(function(elem){
//     if (elem%2==0) {
//         return elem*2
//     }
//     else{
//         return elem
//     }
// })

// console.log(ages);
// console.log(result);



// let ages = [20,21,23,55,66];

// ages.forEach((element, i) => {
//     ages[i]=element*2
// });

// console.log(ages);


