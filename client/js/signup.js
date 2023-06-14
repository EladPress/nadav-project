
const errElement = document.querySelector('.err')
let source = "http://127.0.0.1:8081"


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
            alert(username);
            alert(pass);
        }
     window.location.href = "../HTML/index.html"
     }
 }




