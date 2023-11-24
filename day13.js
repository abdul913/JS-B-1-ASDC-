// adding data to LS

let title = document.querySelector('input[placeholder="title"]')
let desc = document.querySelector('input[placeholder="desc"]')
let btn = document.querySelector('#btn')
let div = document.querySelector('div')

let listVals = []

let titleVal
let descVal 


window.onload = function() {
    let dataLS = JSON.parse(localStorage.getItem('data'))
    console.log(typeof dataLS," ",dataLS)
    let items = dataLS.map(function (e) {
        let elem = `<h1>${e.titleVal}</h1>
        <h3>${e.descVal}</h3>`
        return elem
    })
    // console.log(items)
    div.innerHTML = items.join('')

}

title.addEventListener("keyup", function (e) {
    titleVal = e.target.value
    // console.log(titleVal)
})

desc.addEventListener("keyup", function (e) {
    descVal = e.target.value
    // console.log(descVal)
})

btn.addEventListener("click", function (e) {
    let objInps = { "titleVal": titleVal, "descVal": descVal }
    let dataLS = JSON.parse(localStorage.getItem('data')) ?? []
    dataLS.push(objInps)

    localStorage.setItem("data",JSON.stringify(dataLS) )
    console.log(listVals)

    displayItems(dataLS)


})

function displayItems(dataLS) {
    console.log(typeof dataLS," ",dataLS)
    let items = dataLS.map(function (e) {
        let elem = `<h1>${e.titleVal}</h1>
        <h3>${e.descVal}</h3>`
        return elem
    }) 
    div.innerHTML = items.join('')

}
