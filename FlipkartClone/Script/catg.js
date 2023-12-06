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
    displayBrands(productCags)

    displayProdRatingAboveFourToPointFive(productCags)
    displayProdRatingAboveFourPointFive(productCags)
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


function displayBrands(products) {
    console.log(products)
    let brands = products.map((prod) => {
        return prod.brand
    })
    // console.log(brands)
    let uniqBrands = brands.filter((prod, index) => {
        return brands.indexOf(prod) === index
    })
    // console.log(uniqBrands)
    let sortBrandCont = document.querySelector('.sort-brand')
    let dispBrandName = uniqBrands.map(brand => {
        let elem = `<div>
        <input type="checkbox" name="brand" id="${brand}-brand">
        <label for="${brand}-brand">${brand}</label>
    </div>`
        return elem
    })
    sortBrandCont.innerHTML = dispBrandName.join('')
    let checkboxs = document.getElementsByName('brand')
    // console.log(checkboxs)
    let collSortedProd = []
    checkboxs.forEach(function (checkbox) {
        // console.log(checkbox)
        // console.log(checkbox.checked)
        checkbox.addEventListener('click', function () {
            // console.log(checkbox.checked)
            if (checkbox.checked === true) {
                // console.log(checkbox.id.split('-')[0])
                let brandName = checkbox.id.split('-')[0].toLowerCase()
                let sortedProducts = products.filter(product => {
                    return product.brand.toLowerCase() === brandName
                })
                collSortedProd.push(...sortedProducts)
                displayCtgsProd(collSortedProd)
            }
            // else {
            //     console.log("object")
            //     let brandName = checkbox.id.split('-')[0].toLowerCase()
            //     let sortedProducts = products.filter(product => {
            //         return !product.brand.toLowerCase() === brandName
            //     })
            //     console.log(sortedProducts)
            //     collSortedProd.push(...sortedProducts)
            //     displayCtgsProd(collSortedProd)
            // }

            console.log("collSortedProd", collSortedProd)

            // if (collSortedProd.length == 0) {
            //     displayCtgsProd(products)
            // }

        })
    })

}


let checkboxRating4 = document.getElementById('above4')
let checkboxRating5 = document.getElementById('above3')
function displayProdRatingAboveFourToPointFive(products) {
    checkboxRating4.addEventListener('click', function () {
        if (checkboxRating4.checked === true) {
            checkboxRating5.checked = false
            let sortedProducts = products.filter(product => {
                return product.rating >= 4 && product.rating <= 4.5
            })
            displayCtgsProd(sortedProducts)
            console.log(sortedProducts)
        } else {
            displayCtgsProd(products)
        }
    })

}

function displayProdRatingAboveFourPointFive(products) {
    checkboxRating5.addEventListener('click', function () {
        if (checkboxRating5.checked === true) {
            checkboxRating4.checked = false
            let sortedProducts = products.filter(product => {
                return product.rating >= 4.5 && product.rating <= 5
            })
            displayCtgsProd(sortedProducts)
            console.log(sortedProducts)
        } else {
            displayCtgsProd(products)
        }
    })

}