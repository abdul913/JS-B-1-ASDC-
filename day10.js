// let div = document.querySelectorAll('div')[0]

// div.setAttribute('id','div0' )
// div.classList = "div0"
// div.id = "div0"

// let b = document.createElement("b")
//     div.appendChild(b)
//     b.innerHTML = "Hello"



// if(div.style.backgroundColor == "gray"){
//     div.style.backgroundColor = "black"
//     div.style.color = "white"
//     // console.log(div)
//     // div.removeChild(b)
    
    
// // console.log(div.style.backgroundColor)
// }

// let em = document.createElement("em")
// div.replaceChild(em,b)

// em.innerText = "Hello"
// console.log(div)
// console.log(b)

let arr = [
    {fName:"abc",lName:'xyz'},
    {fName:"efg",lName:'lmn'},
    {fName:"abc",lName:'xyz'}
]

let div = document.querySelector('div')
// console.log(div)
let items = arr.map(function(e){
    let txt = `<h1>${e.fName}</h1>`
    return txt
})
div.innerHTML = items.join('')

// console.log(items)




