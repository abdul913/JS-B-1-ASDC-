let title = document.querySelector('input[placeholder="title"]')
let desc = document.querySelector('input[placeholder="desc"]')
let btn = document.querySelector('#btn')
let div = document.querySelector('div')


let listVals = []

let titleVal 
let descVal

title.addEventListener("keyup",function(e) {
    titleVal = e.target.value
    // console.log(titleVal)
}) 

desc.addEventListener("keyup",function(e) {
    descVal = e.target.value
    // console.log(descVal)
}) 

btn.addEventListener("click",function(e) {
    let objInps = {"titleVal" : titleVal, "descVal" : descVal}
    listVals.push(objInps)
    console.log(listVals)

    displayItems()
})

function displayItems(){
    let items = listVals.map(function(e){
        let elem = `<h1>${e.titleVal}</h1>
        <h3>${e.descVal}</h3>`
        return elem
    })
// console.log(items)
div.innerHTML = items.join('')

}
