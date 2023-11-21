// async await

// function apiCall(url) {
//     let xhr = new XMLHttpRequest()
//     console.log(xhr)

//     xhr.responseType = 'json'
//     xhr.onprogress = function () {
//         console.log("loading...")
//     }

//     let promise = new Promise(function (resolve, reject) {
//         xhr.onload = function () {
//             setTimeout(function () {
//                 resolve(xhr.response)
//             }, 4000)

//         }
//         xhr.onerror = function () {
//             reject("err")
//         }
//     })

//     xhr.open('GET', url)
//     xhr.send()

//     return promise

// }

// let promise1 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve("promise2 resolve")
//     }, 6000)


// })

// let promise2 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve("promise3 resolve")
//     }, 2000)
// })

// async function handPromiseAsync() {
//     let p = await apiCall('https://dummyjson.com/users')
//     console.log("print after the Promises")
//     console.log("p ", p)

//     let p1 = await promise1
//     console.log("p1 ", p1)

//     let p2 = await promise2
//     console.log("p2 ", p2)
// }

// handPromiseAsync()


// function handPromise() {
//     apiCall('https://dummyjson.com/users')
//         .then(data => console.log(data))
//     console.log("print after the Promises")
// }

// handPromise()
// handPromiseAsync()


// function fetchDataUsers() {
//     setTimeout(async function () {
//         let fetchData = await fetch('https://dummyjson.com/users')
//         let data = await fetchData.json()
//         console.log(data)
//     }, 2000)
// console.log(fetchData)

// console.log(resData)
// return resData.users

// console.log(resData)

// }

// fetchData()
// document.getElementById("btn").addEventListener("click",function(e) {
//     fetchData()
// })


// fetch('https://dummyjson.com/users')
//     .then((data) => { 
//         console.log(data)
//         return data.json() })
//     .then((data) => console.log(data))
//     .catch(err => console.log(err))


async function fData() {
    // try {
    //     let fetchData = await fetch('https://ummyjson.com/users')
    //     let data = await fetchData.json()
    //     console.log(data)
    // } catch (error) {
    //     console.log("error")
    // }
    let fetchData = await fetch('https://ummyjson.com/users')
   .catch(error => {console.log(error)});


}

fData()