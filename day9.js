// var - funtion scope
// let,const - block scope
// Lexical Environment
//DOM
// 
// debugger
// console.log(a)
// console.log(z)
// let z =10;
// var a = 10;

// if(true){
//     var b =20
//     let c = 30
//     let f = 30
// }
// b=30
// function f1(){
//     var e = 20
//     let g = 30
//     const k = 12
// }

// console.log(b)

// console.log(g)
// console.log(k)
// console.log(f)

// let a =10 
// function f1(){
//     console.log(b)
//     var b =10
//     f2()
//     function f2(){
//         console.log(a)
//         console.log(b)
//     }
// }

// f1()
// var i =10 
// for(var i = 0; i <=4;i++){

// }

// console.log(i)


// function clsr(){
// var a = 10;
// function fn(){
//     console.log(a)
// }
// }
// console.log(a) //10


var div = document.getElementsByClassName('cls')
console.log(div)
let text = "text"
div.innertext = `<i>${text}</i>`