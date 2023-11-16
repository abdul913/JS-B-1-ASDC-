// xhr

let btn = document.querySelector('button');



btn.addEventListener('click', function () {
   
   function apiCall(url, callBack) {
      let xhr = new XMLHttpRequest()
      console.log(xhr)
   
      xhr.responseType = 'json'
      xhr.onprogress = function () {
         console.log("loading...")
      }
      xhr.onload = function () {
         callBack(xhr.response)
         //  console.log()
      }
   
      xhr.open('GET', url)
      xhr.send()
   //  
}

})