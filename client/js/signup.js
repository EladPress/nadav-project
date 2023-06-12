
const errElement = document.querySelector('.err')
let source = "http://127.0.0.1:8081"

const user = {
    username: '',
    password: ''
}
var manager=0;

function handleChange(ev, key) {
    const value = ev.target.value
    user[key] = value
}
f=true
f1=true
 function signup(ev) {
     ev.preventDefault()
     if (user.username.length < 3) {
         alert("username is to short");
         f=false
     }
     if (user.pass.length < 3) {
         alert("password is to short");
         f1=false
     }
     if(f==true && f1==true)
     {

    
        function signup(username,password,manager) {
            return fetch(source + '/insert_user/' + username + password + manager)
            // .then fetch(source + '/select/' + username)
             
        }
     window.location.href = "../HTML/index.html"
     }
 }

function test(){
    alert(username);
    alert(pass);
}


