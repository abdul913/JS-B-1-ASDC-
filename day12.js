let data = [{fname:"abc",lname:"xyz",age:"23"},{fname:"abc",lname:"xyz",age:"23"}];

let datStr = JSON.stringify(data,["fname","age"],4)

localStorage.setItem("data",datStr)

console.log( datStr)
let dataObj = JSON.parse(datStr,(key,value)=>{
    return key == "fname" ? value.toUpperCase() : value
});
console.log(dataObj)