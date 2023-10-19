// // console.log("log log işlemi");
// // console.warn("warn log işlemi");
// // console.error("error log işlemi")

// //Variable
// var globalVariable =44;
// console.log(globalVariable);
// console.warn(globalVariable);
// console.error(globalVariable)

// //ES6(2015)
// let localVariable=23
// console.log(localVariable);
// localVariable = 50;
// console.log(localVariable);

// //CONST
// const localVariable2="Merhaba";
// console.log(localVariable2);

// // camelCase kullanılır
// // Türkçe karakter kullanılmaz 
// // Sayıyla başlamaz
// let dataVariable =44;
// console.log(dataVariable);

// let dataVariable55 =44;
// console.log(dataVariable);

// let _dataVariable55 =44;
// console.log(dataVariable);

// let $_dataVariable55 =44;
// console.log(dataVariable);


// // OPERATORLER

// let data10 ="Merhabalar";
// console.log(typeof data10);

// ODEV
     let userData = prompt("Lütfen bir şeyler yazınız");

// S-1
console.log(userData.length);

// S-2
 console.log(userData);

// S-3
// console.log(userData.toLowerCase());

// S-4
// console.log(userData.toUpperCase());

// S-5

// let findFirstWord = userData.indexOf(" ");
// console.log(findFirstWord);
// let firstWord = userData.substring(0,findFirstWord);
// console.log(firstWord);
// userData = userData.replace(firstWord,"Javascript");

// userData = userData.replace(userData.substring(0,userData.indexOf(" ")), "javascript");
// console.log(userData);

// S-6
console.log(userData.startsWith("javascript"));

// S-7
console.log(userData.endsWith("javascript"));

// S-8
console.log(userData.charAt("0"));

// S-9
console.log(userData.concat("-ben js öğreniyorum"));

// S-10
console.log(userData.substring(0,4));