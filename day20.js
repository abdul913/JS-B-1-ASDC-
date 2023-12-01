// Closures

function parent() {
    let z = 10;

    function y() {
        console.log(z)
    }
    return y
}

let cally = parent();



// function x(){
//     let a = 10;

//     console.log(a)
//     function y(){
//     }
//     return y
// }

// console.log(x()) 

// let cally = x()
// cally()

// function createCounter(val){
//     let value = val
//     let count = {
//         increment : function(){ return ++value},
//         decrement : function(){ return --value},
//         reset : function(){return value = val},
//     } 
//     return count
// } 

// let count = createCounter(0)
// console.log(count.increment())
// console.log(count.increment())
// console.log(count.decrement())
// console.log(count.increment()) //2

// let count2 =  createCounter(10)
// console.log(count2.increment()) //1


// console.log(count.increment()) //3


// function callOnce(){
//     console.log("Executed")
// }

// function func(){
//     let exc = false; --> true
//     function callOnce(){
//         if(exc==false){
//             console.log("Executed")
//             exc = true;
//         }else{
// console.log("co......")
// }
//     }
//     return callOnce
// }

// let execFun = func()
// execFun()
// execFun()

// ES-6

// Deep Copy, Shallow Copy
// Spread Operator
// Rest Operator
// Destructuring

// let a = 10
// let b = a +1

// console.log(a)
// console.log(b)

// console.log(a == b)


// let obj1 = {
//     fname:"abc",
//     lname:"xyz",
//     age:23,
//     details:{
//         address:"street1"
//     }
// }
// let obj2 = obj1

// obj2.fname = 'efg'
// console.log(obj1 == obj2)
// console.log(obj1 )
// console.log(obj2)

// let obj2 = {...obj1}

// console.log(obj1 == obj2)
// obj2.details.address = "street2"
// obj2.fname = "efg"
// console.log(obj2)

// let arr1 = [1,2,3]
// let arr2 = [...arr1]


//Rest Operator
// function fun(...args) {
//     console.log(args)
// }

// fun(1,2,3,4)

// Destructuring


let obj1 = {
    fname: "abc",
    lname: "xyz",
    age: 23,
}

let { fname, ...obj2 } = obj1
// console.log(fname)

let arr1 = [1, 2, 4]
let [a, , c] = arr1
// console.log(c)

// Oprtional Chaining(?.)
// 

console.log(obj2.details?.address) //

console.log("data" ?? "data not find")
