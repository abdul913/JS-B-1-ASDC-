// xhr

let btn = document.querySelector('button');

btn.addEventListener('click', function(){
   let xhr = new XMLHttpRequest()
//    console.log(xhr)
   
   xhr.responseType = 'json'
   xhr.onload = function(){
    console.log(xhr.response)
   }

   xhr.open('GET','https://dummyjson.com/products')
   xhr.send()

})