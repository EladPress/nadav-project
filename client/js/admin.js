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
import {get_user, selectAll} from './server_access.js'

get_user()

selectAll()
    .then((res) => {
        console.log(res)
    })
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

