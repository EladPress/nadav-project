const http = require('http')
// const options = {
//     host: '127.0.0.1:8081',
//     path: '/'
// }

var request = http.get({
    host: '127.0.0.1:8081',
    path: '/'
}, function(res) {
    
})

console.log('hello')