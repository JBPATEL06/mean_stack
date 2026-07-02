'use strict';
const store_name = "Piexel pages";
console.log("welcome to " + store_name);
let totalSales = 0;
const book = {
    title : "JavaScript Basics",
    price : 299,
    isAvaliable : true,
    qunatityInstock : 5
}
//get element id
let welcome_text = document.getElementById("welcome-text");
let book_tittle = document.getElementById("book-title");
let book_price = document.getElementById("book-price");
let book_isAvaliable = document.getElementById("book-isAvaliable");
let book_qunatityInstock = document.getElementById("book-qunatityInstock");

//intiliaze element
welcome_text.innerText = "Welcom to " + store_name;
book_tittle.innerText = book.title;
book_price.innerText = book.price;
book_isAvaliable.innerText = book.isAvaliable;
book_qunatityInstock.innerText = book.qunatityInstock;


function userBuy(){
let userbuy = document.getElementById("userBuy").value;
let userbyType = Number(userbuy);   
console.log(userbyType);
if(isNaN(userbyType) || userbuy.trim() === ""){
        alert("invalid input");
    }
else if(userbuy > book["qunatityInstock"]){
    alert("sorry we have only "+ book.qunatityInstock + " left")
}
else{
    alert("thank you for shopping with us");
    book.qunatityInstock = book.qunatityInstock - userbuy;
    if (book.qunatityInstock == 0){
        book.isAvaliable= false;
    }
}
welcome_text.innerText = "Welcom to " + store_name;
book_tittle.innerText = book.title;
book_price.innerText = book.price;
book_isAvaliable.innerText = book.isAvaliable;
book_qunatityInstock.innerText = book.qunatityInstock;
}

let date = new Date();
let mytime = date.getTime();
Number(mytime);
console.log(typeof(mytime));
console.log(mytime);