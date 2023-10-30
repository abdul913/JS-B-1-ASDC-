// higher order functions


// c = function b(){
//     console.log("b")
// }

// function higherOrderFun(callBackFun){
//     callBackFun()
//     console.log("a")
//     // .
//     // .
//     // .
//     // .
    
// }



// higherOrderFun(callBackFun)
// higherOrderFun(function callBackFun(){
//     console.log("b")
// })

// setTimeout(callBackFun,1000)

// setTimeout(function sum(){
//     console.log(1+2)
// },5000)
// function sum(){
//     console.log(1+2)
// }
// setTimeout(sum,5000)

// setInterval(function(){},2000)

// setInterval(function(){
//     console.log(1)
// },2000)

// clearInterval()

// arrow function 

// function fun(){
// }

// () => {}

// setInterval(()=>{
//     console.log(1)
// },2000)

// var sum=()=>{1+2}
// console.log(sum())

// map

var arr = ["js",'html',"css"]

// console.log(arr[0].toUpperCase())
// console.log(arr[1].toUpperCase())
// console.log(arr[2].toUpperCase())

// var newArr = arr.map(function(elem,index,array) {
//     // console.log(elem," ",index, " ", array)
//     return elem.toUpperCase()
// })


// var newArr = arr.map((elem)=>elem.toUpperCase())
// console.log(newArr)

// filter
// reduce

// var arr = [1,2,3,4,5,6,7,8,9]
// var arr = ['INDIA','FINLAND','ENGLAND']
// var newArr = arr.filter((elem)=>elem.includes('LAND'))
// console.log(newArr)


// var arr = [1,2,3,4,5,6,7,8,9]
// .reduce((p,c)=>{},p)

// var newArr = arr.reduce((p,c)=>{
//     console.log('p', p)
//     console.log('c', c)
//     p = p + c
//     return p
// },0)

// console.log(newArr)

var arr = [1,2,3,4,5,6,7,8,9]
var largestVal = arr.reduce((p,c)=>{
    if(c>p){
       return p = c
    }
   return p
},10)

console.log(largestVal)