//single comment
/*
multiple comment
*/ 
// console.log("loglama");
// console.log("info");
// console.warn("warn");
// console.error("error");

// alert("pop-up bilgilendirme-1");
// window.alert("pop-up bilgilendirme-2");

// window.document.writeln("ekranda yazı");

// variable
// var result = "Js öğreniyorum";
// console.log(typeof result+"=>"+result);

// var result = 4423;
// console.log(typeof result+"=>"+result);

// var result = 44.23;
// console.log(typeof result+"=>"+result);

// var result = true;
// console.log(typeof result+"=>"+result);

// //Naming Convensition
// var deneme = "JS Data";
// console.log(deneme);

// var deneme44 = "JS Data";
// console.log(deneme44);

// var $deneme44 = "JS Data";
// console.log(deneme44);

// var denemeVerisi = "JS Data";
// console.log(denemeVerisi);

// //whoisting
// result2=56;
// var result2;

//Operators
//+ - * ** / % 
//! not &&and || or
//x++
//x--
//++x
//--x
//= (atama)
//== (türüne bakma)
//===(türüne bak)
//
// var userData =Number(prompt("Lütfen sayı giriniz"));
// console.log(userData+45);


// //undefined
// //NaN
// //isNaN
// //Infinity

// //Math
// console.log(Math.PI);

// var sayi =-5.9;
// console.log(Math.abs(sayi));

//condition
// const condi=()=>{
//     let number =4;
//     if(number>=2){
//         console.log("Büyüktür");
//     }else{
//        console.log("Küçüktür");
//     }
// }
// condi();
     
// let tryCatchTuto=()=>{
//     try {
//         alertx("pop-up");
//     } catch (error) {
//         console.log("hata mesajı: "+ error.message);
//         console.log("hata mesajı: "+ error.name);
//         console.log(error);
//     }
   
// console.log("son satır");

// }
// tryCatchTuto();

// let sumExamplesData=()=>{
    
//     let commonSum=0;
//     let oddSum=0, oddCounter=0, oddNumber=0;
//     let evenSum=0, evenCounter=0, evenNumber=0;

//     //userData
//     let user =Number(prompt("Lütfen Bitiş sayısı yazınız"));

//     for (let i = 1; i <= user; i++){
//         if (user===44){
//             console.log("secret key number failed" +user);
//         break;
//             }
//     if (i===50){
//         console.log("en fazla 50 sayısına kadar hesaplanır" + user);
//         break;
//     }
//     if (i===7) {
//         console.log("7 sayısını toplama!!!" +user);
// break;        
//     }
//     }
// }
// sumExamplesData();

// let userNameAndSurnameMasking=()=>{

//     const userNameAndSurname=prompt("Lütfen adınızı ve soyadınızı giriniz");

//     const userIndex=userNameAndSurname.indexOf(" ");
   
//     let username= userNameAndSurname.substring(0, userIndex);
   
//     for (let i = 1; i < username.length; i++) {
//         username = username.replace(username.charAt(i),"*");
               
//     }
//     username = username.toUpperCase();
//     console.log(username.toUpperCase());

//     let surname= userNameAndSurname.substring(userIndex+1, userNameAndSurname.length()).toUpperCase();
   
//     for (let i = 3; i <= username.length; i++) {
//         surname = surname.replace(surname.charAt(i),"*");
               
//     }
//     console.log(surname);
//     console.log(username.concat(" ").concat(surname));
// }
// // userNameAndSurnameMasking();

// //Monad
// const birinci=()=>{
//     let user = Number(prompt("Lütfen Sayı Giriniz"));
//     return user;
// }
// const ikinci = ()=>{
//     let data = birinci();;
//     console.log(Math.sqrt(data));
// }
// ikinci()
// //setTimeout(),setInterval()
// setTimeout(function(){
//     console.log("setTimeout çalıştı");
// },2000);

// setInterval(function(){
//     console.log("setInterval çalıştı");
// },1000);

/////////////////////////////////
// //callbackfunction
// const birinci=(data)=>{
//     return Math.pow(data,2);
   
// }
// const ikinci=(callbackFunction)=>{
//   let user=Number(prompt("Lütfen Sayı Giriniz"));
//   let data = callbackFunction(user);
//  console.log(data);
// }
// ikinci(birinci);

//promise
// const promTutorials =()=>{
//     //catch bir tane olmak zorunnda
//     let data =new Promise((resolve,reject)=>{
//         let status = 400;
//         if(status===200)
//         resolve("çalıştı");
//         else
//         reject("çalışmadı");

//     }).
//     then(
//         ()=>{console.log("olumlu")}
//         ).
//     catch(
//         (err)=>{console.error(err)}
//         );
// }
// promTutorials()

//dizi,Iterative,for, for in, for of, forEach, map,filter

// let arr=()=>{
//     const numbers =[1,3,5,6,1,9,4,66];
//    return numbers;
// };
// arr()

// let arrResult=()=>{
//     let data =arr();
//     console.log(data);

//     //Iterative For Loop
//     for(let i=0; i<data.length; i++){
//         document.write(data[i] + " ");
//     }
//     document.write("<br/>");
//     //for in
//     for (let temp in data) {
//         document.write(temp +"=>"+data[temp]+"</br>");
//     }
//     document.write("<br/>");
//     //for of
//     for (let temp in data) {
//         document.write(temp +" ");
  
//     }
//     //forEach
//     data.forEach(function(value,index,array){
//         //document.write(index+ "=> "+ value +"<br/>");
//         document.write(`${index} => ${value} <br/>`);

//     });
//diziler push
// document.write("<br/>");
// data.push("99");
// data.unshift(11);
// data.pop();//sondaki 1 elemanı çıkarır
// data.shift();//baştaki 1 elemanı çıkarır
// console.log(data);

// data.sort();
// console.log(data);

    //data.reverse();
// console.log(data);
//console.log(data.toString().substring(0,2));



// }
// arrResult()


