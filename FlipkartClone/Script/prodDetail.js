// let searchUrl = new URLSearchParams(window.location.search)

let idProd = searchUrl.get('id')
console.log(idProd)

async function fetchProdDetails() {
    let fetData = await fetch(`https://dummyjson.com/products/${idProd}`)
    let res = await fetData.json()
    return res
}

fetchProdDetails()


onload = async function() {
    let data = await fetchProdDetails()
    let detailProd = data
    disImg(detailProd)
}

function disImg(detailProd){
    console.log(detailProd)
    let subImgCont = document.querySelector('.sub-imgs')
    let mainImgCont = document.querySelector('.main-img')

    let disSubImges = detailProd.images.map(i=>{
        let subImg = `<img onclick="disSubImg('${i}')" class="single-sub-img" src="${i}" alt="" srcset="">
       `
       return subImg
    })
    subImgCont.innerHTML = disSubImges.join('')

    let thumbnailImg = detailProd.thumbnail
    console.log(thumbnailImg)
    
    let mainImg = `<img class="single-Main-img" src="${thumbnailImg}" alt="" srcset=""> `
   
    mainImgCont.innerHTML = mainImg

   
}

function disSubImg(i){
    // console.log(i)
    let mainImgCont = document.querySelector('.main-img')
    let mainImg = `<img class="single-Main-img" src="${i}" alt="" srcset=""> `
   
    mainImgCont.innerHTML = mainImg

}