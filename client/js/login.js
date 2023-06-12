import {select} from './server_access.js'
let source = "http://127.0.0.1:8081"
function checkForm(){
    return select('eladpress', 'elad2002')
   
}
if (select!=err){
    window.location.href = "../HTML/index.html"
}