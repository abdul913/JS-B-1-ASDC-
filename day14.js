// Delete,Edit

let title = document.querySelector('input[placeholder="title"]')
let desc = document.querySelector('input[placeholder="desc"]')
let btn = document.querySelector('#btn')
let div = document.querySelector('div')

let listVals = []

let inpTitleVal
let inpDescVal


window.onload = function () {
    let dataLS = JSON.parse(localStorage.getItem('data'))
    console.log(typeof dataLS, " ", dataLS)
    let items = dataLS.map(function (e) {
        let elem = `<h1>${e.titleVal}</h1>
        <h3>${e.descVal}</h3>`
        return elem
    })
    // console.log(items)
    div.innerHTML = items.join('')

}

title.addEventListener("keyup", function (e) {
    inpTitleVal = e.target.value
    // console.log(titleVal)
})

desc.addEventListener("keyup", function (e) {
    inpDescVal = e.target.value
    // console.log(descVal)
})

btn.addEventListener("click", function (e) {
    

    let objInps = { "titleVal": inpTitleVal, "descVal": inpDescVal }
    let dataLS = JSON.parse(localStorage.getItem('data')) || []
    dataLS.push(objInps)

    localStorage.setItem("data", JSON.stringify(dataLS))
    console.log(listVals)

    displayItems(dataLS)

    title.value = " "
    desc.value = " "
})

function displayItems(dataLS) {
    console.log(typeof dataLS, " ", dataLS)
    let items = dataLS.map(function (e, i) {
        let elem = `<h1>${e.titleVal}</h1>
        <div onclick="del(${i})">x</div>
        <div class="edit" onclick="edit(${i})">Edit</div>
        <h3>${e.descVal}</h3>`
        return elem
    })
    div.innerHTML = items.join('')

    // let edit = document.querySelector('.edit')
    // console.log(edit)
    // edit.addEventListener('click', () => {})
}

function del(i) {
    let dataLS = JSON.parse(localStorage.getItem('data')) || []
    dataLS.splice(i, 1)
    localStorage.setItem("data", JSON.stringify(dataLS))
    displayItems(dataLS)
}


function edit(i) {
    btn.setAttribute('class','addTodoBtn')
    let dataLS = JSON.parse(localStorage.getItem('data')) || []
    title.value = dataLS[i].titleVal
    console.log(inpTitleVal)

    title.addEventListener("keyup", function (e) {
        inpTitleVal = e.target.value
        // console.log(inpTitleVal)
    })

    let editBtn = document.querySelector('#editBtn')
    editBtn.style.display = "inline"

    editBtn.addEventListener("click", function (e) {
        title.value = " "
        desc.value = " "
        dataLS[i].titleVal = inpTitleVal
        localStorage.setItem("data", JSON.stringify(dataLS))
        displayItems(dataLS)
        editBtn.style.display = "none"
        btn.setAttribute('class','')
    }
    )
}