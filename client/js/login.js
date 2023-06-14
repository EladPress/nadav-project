import {select} from './server_access.js'
let source = "http://127.0.0.1:8081"
let button = document.getElementById("submit").onclick = () => {
    //console.log('works')
    select('eladpress', 'elad2002')
    .then((res) => {window.location.href = "../HTML/index.html"})
}
// checkForm()
if (select!=err){
    window.location.href = "../HTML/index.html"
}