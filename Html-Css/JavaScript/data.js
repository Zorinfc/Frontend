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

// // ODEV
//      let userData = prompt("Lütfen bir şeyler yazınız");

// // S-1
// console.log(userData.length);

// // S-2
//  console.log(userData);

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

// // S-6
// console.log(userData.startsWith("javascript"));

// // S-7
// console.log(userData.endsWith("javascript"));

// // S-8
// console.log(userData.charAt("0"));

// // S-9
// console.log(userData.concat("-ben js öğreniyorum"));

// // S-10
// console.log(userData.substring(0,4));

// Immedia function (() => {})()
// (() =>{
//      console.log("Immedia function");
// })()

// Normal Function
function normalFunction(){
     console.log("Normal Function");
}
// normalFunction();

// Anonymous Function
const anonymous = function(){
     console.log("Anonymous Function");
}
// anonymous();

//Arrow Function
const arrow=()=>{
     console.log("Arrow Function");
}
// arrow();


// Swştch Case

let data23 = () =>{
     let number =new Date().getDay();
     console.log(number);
     switch (number) {
          case 0:
               console.log("Pazar")
               break;
          case 1:
               console.log("Pazartesi")
               break;
          case 2:
               console.log("Salı")
               break;
          case 3:
               console.log("Çarşamba")
               break;
          case 4:
               console.log("Perşembe")
               break;
          case 5:
               console.log("Cuma")
               break;
          case 6:
               console.log("Cumartesi")
               break;

          default:
               console.log("hata");
               break;
     }
}
// data23();

// LOOPS



const loopTutorials = () => {

     //--For--//
     for (let i = 0; i <= 9; i++) {
          document.writeln(i)
          
     }

     document.writeln("<br/>");

     //---While---//

     let x = 1;
     while (x<=9) {
          document.writeln(x)
          x=x+1;
     }

     document.writeln("<br/>");

     //--DoWhile--//
     let y =1;
     do{
          document.writeln(y)
          y +=1;
          
     }while(y<=9);
     
}
//  loopTutorials();




// ARRAY

const dataArray = () =>{
     let arr = [4,2,3,1,9,7];
     console.log(arr);
     console.log(typeof arr);

     arr.push(23);
     // console.log(arr);

     arr.unshift(199);
     arr.pop();
     arr.shift();
     arr.sort().reverse();

     arr.forEach(function (value,index,dizi) {
          // console.log(index+"=>"+value);
          console.log(`${index} => ${value}`);
       })
       console.log(" ");
     for(let i =0;i<arr.length;i++){
          console.log(i + " ==> " +arr[i]);
     }

     let data15 = arr.join(" ");
     console.log(data15);
}    
// dataArray();

const dataArray2 = () =>{
     let array= [];
     for(let i = 0; i < 9; i++){
          array[i] = Math.floor(Math.random()*9+1)
     }
     // console.log(array);
     return array;
}
dataArray2();

const dataArray3 = () => {
     let array = dataArray2();
     console.log(array);
 
     let result = array.filter((value, index, dizi) => {
         return value % 2 == 0
     }).map((value, index, dizi) => {
         return value = value * 10;
     }).forEach((value, index, dizi) => {
         //console.log(index+" => "+value);
         console.log(`${index} => ${value}`);
     });
 
 }
//  dataArray3();

 //OBJECT

 const objectData= {
     name:"Furkan",
     surname:"Sarıkaya"
 };

 console.log(objectData);
 console.log(objectData.name);
console.log(objectData.surname);
