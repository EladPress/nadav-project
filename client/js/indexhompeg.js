const elAdminLink = document.querySelector('.admin-link')
const user = {
    username: 'nadav',
    isAdmin: true
}
function init() {
    console.log('init');
    if (user.isAdmin) {

    } else {
        elAdminLink.style.display = 'none'
    }
} 