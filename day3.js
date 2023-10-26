// if(condition){
    //code
// }

// var items = 0;

// if(items > 0){
//     console.log("added", items, "item")
// }else{
//     console.log("0 items, add some items to the cart to display the items")
// }

// 0-30 -> failed
// 30-50 -> C Grade
// 50-80 -> B Grade
// 80-100 -> A Grade

// var marks =110

// if(marks >= 0 && marks <= 30){
//     console.log("failed")
// }
// else if(marks > 30 && marks <= 50){
//     console.log("C Grade")
// }
// else if(marks > 50 && marks <= 80){
//     console.log("B Grade")
// }
// else if(marks>80 && marks<=100){
//     console.log("A Grade")
// }
// else{
//     console.log("invalid marks, it should be between 1-100")
// }


// switch (key) {
//     case value:
//      code
//      break;

//     default:
//         break;
// }

// var weather = ""

// switch (weather) {
//     case "sunny":
//         console.log("use sun glasses")
//         break;
//     case "rainny":
//         console.log("use rain coat")
//         break;
//     default:console.log('weather is unknown') 
// }

// Ternary Operator


// var items = 10;

// if(items > 0){
//     console.log("added", items, "item")
// }else{
//     console.log("0 items, add some items to the cart to display the items")
// }

// (condition)?true:false

// items > 0 ? console.log("added", items, "items") : console.log("0 items, add some items to the cart to display")



// Arrays
 
// let arr = []
// let arr1 = new Array()

// let programmingLanguages = [2,454,323,1]
// programmingLanguages[0] = "HTML"
// programmingLanguages[3] = "NodeJS"
// console.log(programmingLanguages.length)
// console.log(programmingLanguages.indexOf('nodejs'))
// programmingLanguages.unshift('nodeJS')
// programmingLanguages.pop()
// programmingLanguages.shift()
// programmingLanguages.splice(3,1,'nodejs')
 
// var py = programmingLanguages.slice(2,4)

// console.log(py.length)
// console.log(py)

// var newLang = ['python','java']
// var alllang = programmingLanguages.concat(newLang)
// console.log(alllang)

// var arr1 = [1,2,3]
// var arr2 = arr1.concat()
// arr2.push(4)
// console.log(arr1)
// console.log(arr2)

programmingLanguages.reverse()
programmingLanguages.sort()
console.log(programmingLanguages)