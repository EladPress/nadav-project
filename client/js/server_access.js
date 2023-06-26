let source = "http://127.0.0.1:8081"
function test(url){
    fetch(source + url)
        .then((response) => response.json())
        .then((res) => {
            
        })
}
//TODO: add methods disconnenct and get_user
function select(username, password) {
    return fetch(source + '/select/' + username + '/' + password)
        .then((response) => response.json())
}
function get_user() {
    return fetch(source + '/get_user')
        .then((response) => response.json())
}
function selectAll() {
    return fetch(source + '/selectAll') 
        .then((res) => res.json())
}
function disconnect() {
    return fetch(source + '/disconnect' )
}
function insert_user(username, password) {
    return fetch(source + '/insert_user/' + username + '/' + password)
}


//select('eladpress', 'elad2002').then((res) => console.log(res))
export {test, select, disconnect, get_user,insert_user, selectAll}
