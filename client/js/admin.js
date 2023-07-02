// const elTable = document.querySelector('.table')
// const users = [
//     {
//         username: 'adi',
//         id: 1,
//         isAdmin: true,
//     },
//     {
//         username: 'nadav',
//         id: 2,
//         isAdmin: true,
//     }
// ]

// const user = {
//     username: 'nadav',
//     isAdmin: false
// }
//false
//true
import {get_user, selectAll, delete_user} from './server_access.js'

get_user()

selectAll()
    .then((res) => {
        // console.log(res.length)
        let table = document.getElementById('table')
        for(let i = 0; i < res.length; i++)
        {
            let row = table.insertRow(i+1)
            let cells = []

            cells.push(row.insertCell(0))
            cells[0].innerHTML = res[i]['username']

            cells.push(row.insertCell(1))
            cells[1].innerHTML = res[i]['password']

            cells.push(row.insertCell(2))
            cells[2].innerHTML = res[i]['manager']

            cells.push(row.insertCell(3))
            let button = document.createElement('button')
            button.innerHTML = 'delete user'
            cells[3].appendChild(button)
            button.onclick = () => {
                // alert(res[i]['username'])
                // alert(i)
                let username = res[i]['username']
                delete_user(username)
            }
            //cells[3] = document.createElement('button')
        }
    })


let table = document.getElementById('table')




// function loadData() {
    // console.log('init');
//     if (user.isAdmin) {

//     } else {
//         window.location.href = 'index.html'
//     }
//     let str = `
//         <thead>
//     <th>
//     id 
//     </th>
//     <th>
//     username  
//     </th>
//     <th>
//     isAdmin
//     </th>
//     </thead>`
//     str + '<tbody>'
//     for (var i = 0; i < users.length; i++) {
//         const user = users[i]
//         str += `
//             <tr>
//             <td>${user.id}</td>
//         <td> ${user.username}</td>
//         <td>${user.isAdmin}</td>
//            </tr>
//            `
//     }
//     str += `</tbody >`
//     elTable.innerHTML = str
// }

