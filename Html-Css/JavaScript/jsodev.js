// ODEV //

// let userData = prompt("Lütfen bir şeyler yazınız");

// // S-1

// console.log(userData.length);

// // S-2
//  console.log(userData);

// // S-3
// console.log(userData.toLowerCase());

// // S-4
// console.log(userData.toUpperCase());

// // S-5

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

// Örnek
// 1.YOL normal diziyle yapalım. +
// 2.YOL map,filter, forEach ile yapalım.
// rastgele 10 elemanlı bir dizi  oluşturalım.  ==> (random) +
// bu sayılardan tek olanları bulalım.          ==> (filter) +
// bu tek sayıların sonuna 5 ekleyelim          ==> (map)
// buradaki sayıları ekranda gösterelim. ?      ==> (forEach)
// bu şarta uyan kaç tane sayı vardır ?         ==> (counter)


const randomArray = () => {
    let randomArr = [];
    for(let i =0;i<10;i++){
        randomArr.push(Math.floor(Math.random()*9));
    }
    console.log(randomArr);

    let filteredArr=[];
    let dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for(let i =0;i<10;i++){

        if(randomArr[i] % 2 === 1 ){
            filteredArr.push(randomArr[i]);
        }

    }
    console.log(filteredArr);
    let resultArr =[];
    let newArray = filteredArr.map((value, index, dizi) =>{
        return value = value +5;
    }).forEach((value, index, dizi) =>{
        console.log(`${index} => ${value}`);
        resultArr.push(value);
        console.log(resultArr);
    });


}
randomArray();

