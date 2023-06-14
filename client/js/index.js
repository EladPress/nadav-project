import {get_user,disconnect} from './server_access.js'

get_user()
    .then((res) => {
        alert('hello ' + res['username'])
        console.log(res)

    })

let button = document.getElementById("disconnect").onclick = () => {

    disconnect()
    .then((res) => {
        console.log(res)
        window.location.href = "../HTML/Home.html"
    })   
}