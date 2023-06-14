
// const errElement = document.querySelector('.err')
let source = "http://127.0.0.1:8081"

import { insert_user, select } from "./server_access.js"
let f=true
let f1=true
let button = document.getElementById('submit').onclick = () => {
    let username = document.getElementById('userName').value
    let password = document.getElementById('password').value

    insert_user(username, password)
    .then(() => {
        select(username, password)
        .then(() => {
            window.location.href = "../HTML/index.html"
        })
    })
}
function signup(ev) {
     //ev.preventDefault()
     if (user.username.length < 3) {
         alert("username is to short");
         f=false
     }
     if (user.pass.length < 3) {
         alert("password is to short");
         f1=false
     }
    //  if(f==true && f1==true)
    //  {
        
       
    
    
    //  }
 }




