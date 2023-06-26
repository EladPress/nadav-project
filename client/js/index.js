import {get_user,disconnect} from './server_access.js'

let adminLink = document.getElementById('adminLink')
// adminLink.style.visibility = 'hidden'

get_user()
    .then((res) => {
        alert('hello ' + res['username'])
        console.log(res)
        if (res['manager'] == 1)
        {
            adminLink.style.visibility = 'visible'  
        }
        else{
            adminLink.style.visibility = 'hidden'
        }
    })

let button = document.getElementById("disconnect").onclick = () => {

    disconnect()
    .then((res) => {
        console.log(res)
        window.location.href = "../HTML/Home.html"
    })   
}