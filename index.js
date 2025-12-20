//1----
//1.1----
// let num = [];
// num.push(1, 2, 3, 4, 5);
// let del = num.pop(4) * 2;

// num.push(del)
// console.log(num);

//1.2----
// let word = ["Salom", "Dunyo", "Javascript"];
// let n = word.pop(2);
// let arxiv = [];
// arxiv.push(n);
// console.log(arxiv);

//1.3----
// let massiv = [4, 10, 40, 32, 11];
//  let a  = massiv.pop(0);
//  let b = massiv.pop(1);
//  let c  = massiv.pop(2);
//  let d  = massiv.pop(3);
//  let e  = massiv.pop(4);
//  console.log(a + b + c + d + e);

//2----
//2.1----
// let navbat = ['Ali', 'Vali', 'Gani'];
// navbat.shift();
// console.log(navbat);
// navbat.unshift('Eshmat oka');
// console.log(navbat);

//  navbat.unshift('Ali xaridni tugatdi uje');
// console.log(navbat);

//2.2----
let age = [100, 223, 433, 431, 343];
let once = age.shift();
let l = age.push(once);
console.log(l);

//3.3----
// let news = ["newSong", "firstSnow", "Spring"];
// let newmessage = news.unshift("GOAT-CR7");
// console.log(newmessage);
// newmessage.pop(3);

//3--splice
//3.1----
let raqam = [10, 20, 30, 40, 50];
raqam.splice(2, 1);
console.log(raqam);

raqam.splice(2, 0, 31, 32);
console.log(raqam);

//3.2----
let fruits = ["Apple", "Banana", "Strawberry", "mandarin"];
fruits.splice(0, 2);
console.log(fruits);

//3.3----
let oddnum = [1, 3, 4, 7, 10, 13];
