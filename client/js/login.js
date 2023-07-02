import {select} from './server_access.js'
let source = "http://127.0.0.1:8081"
let button = document.getElementById("submit").onclick = () => {
    //console.log('works')
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    
    console.log(typeof password)
    console.log(password)
    select(username, password)
    .then((res) => {
        if (res['code'] == "found"){
        window.location.href = "../HTML/index.html"
       }
       else{
        alert("error")
       }
        //console.log(res)
        
    })
}
// checkForm()
// if (select!=err){
//     window.location.href = "../HTML/index.html"
// }
