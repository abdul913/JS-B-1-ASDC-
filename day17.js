// xhr

let btn = document.querySelector('button');

function apiCall(url, callBack) {
   let xhr = new XMLHttpRequest()
   console.log(xhr)

   xhr.responseType = 'json'
   xhr.onprogress = function () {
      console.log("loading...")
   }
   xhr.onload = function () {
      callBack(xhr.response)
   }

   xhr.onerror = function(){
      console.log("err")
   }

   xhr.open('GET', url)
   xhr.send()

}

btn.addEventListener('click', function () {
   apiCall('https://dummyjso.com/users', (data) => {
      // console.log()
      apiCall(`https://dummyjson.com/users/${data.users[1].id}`, (userData) => {
         // console.log(userData.id)
         apiCall(`https://dummyjson.com/users/${userData.id}/todos`, (userTodo) => {
            console.log(userTodo)
         })
      })
   })
   //  

})