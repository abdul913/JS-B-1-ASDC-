// Promises

// new Promise((res,rej)=>{})
// .then()
// .catch()

// let cart = ["item1","item2","item3","item4","item5","item6","item7","item8"]

// let promise = new Promise((res,rej)=>{
//     if(cart.length>0){
//         res(cart)
//     }else{
//         rej("add some items to the cart")
//     }
//     // rej("promise rejected")
// })

// console.log(promise)

// promise
// .then((data)=>{return data})
// .then((data)=>{console.log(data , "Total amount : 200" )})
// .catch((data)=>{console.log(data)})



function apiCall(url) {
    let xhr = new XMLHttpRequest()
    console.log(xhr)

    xhr.responseType = 'json'
    xhr.onprogress = function () {
        console.log("loading...")
    }

    let promise = new Promise(function (resolve, reject) {
        xhr.onload = function () {
            resolve(xhr.response)
        }
        xhr.onerror = function () {
            reject("err")
        }
    })

    xhr.open('GET', url)
    xhr.send()

    return promise

}


// apiCall('https://dummyjson.com/users')
//     .then((data) => { return data })
//     .then(data => { return apiCall(`https://dummyjson.com/users/${data.users[1].id}`) })
//     .then((userData) => { return apiCall(`https://dummyjson.com/users/${userData.id}/todos`) })
//     .then((todos) => { console.log(todos) })
//     .catch((err) => { console.log(err) })
//     .finally(()=>{console.log("data")})


// apiCall('https://dummyjson.com/users', (data) => {
//     // console.log()
//     apiCall(`https://dummyjson.com/users/${data.users[1].id}`, (userData) => {
//         // console.log(userData.id)
//         apiCall(`https://dummyjson.com/users/${userData.id}/todos`, (userTodo) => {
//             console.log(userTodo)
//         })
//     })
// })
//  

fetch('https://dummyjson.com/users')
    .then((data) => { 
        console.log(data)
        return data.json() })
    .then((data) => console.log(data))
    .catch(err => console.log(err))