let searchUrl = new URLSearchParams(window.location.search)

let idCatg = searchUrl.get('id')

async function fetchDataCatgs() {
    let fetData = await fetch(`https://dummyjson.com/products/category/${idCatg}`)
    let res = await fetData.json()
    return res
}

async function fetchData() {
    let fetData = await fetch('https://dummyjson.com/products')
    let res = await fetData.json()
    return res
}

let menuItems = document.querySelector('.nav-right')
let hamburgerMenu = document.querySelector('.hamburger-menu')

console.log(menuItems)

let showSate = false

hamburgerMenu.addEventListener('click', function () {
    showSate = !showSate
    console.log(showSate)
    if (showSate) {
        menuItems.setAttribute('id', 'show-menu-items')
    } else {
        menuItems.setAttribute('id', '')

    }
})



let catgContainer = document.querySelector('.catg-cont')
let card = document.querySelector('.items')

window.onload = async function () {
    catgContainer.innerHTML = '<div class="shimmer-catg"></div><div class="shimmer-catg"></div><div class="shimmer-catg"></div><div class="shimmer-catg"></div><div class="shimmer-catg"></div><div class="shimmer-catg"></div>'
    let data = await fetchData()
    let products = data.products

    let dataCatgs = await fetchDataCatgs()
    let productCags = dataCatgs.products

    uniqCatgs(products)
    displayCtgsProd(productCags)
}

function uniqCatgs(products) {
    let catgs = products.map(items => {
        return items.category
    })
    // console.log(catgs)
    let uniqCatgs = catgs.filter((item, index) => {
        return catgs.indexOf(item) === index
    })
    // console.log(uniqCatgs)

    let elemCatgs = uniqCatgs.map((items) => {
        let elem = `<div onclick="dispCatg('${items}')">${items.toUpperCase()}</div>`
        return elem
    })
    catgContainer.innerHTML = elemCatgs.join('')
}


function displayCtgsProd(products) {
    // console.log(products[0])
    let items = products.map((item) => {
        let elemItem = `<div class="items-card">
        <div class="item-img">
            <img src="${item.thumbnail
            }"
                alt="">
        </div>
        <div class="item-details">
            <div>${item.title}</div>
            <div>${item.rating}</div>
            <div>
                ${item.stock}
            </div>
        </div>
        <div class="item-price">${item.price}</div>
        
    </div>`
        return elemItem
    })
    card.innerHTML = items.join('')
}

