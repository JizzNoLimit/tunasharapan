// Navbar menu
const btn_menu = document.querySelector('.btn-menu')
const open_icon = btn_menu.querySelector('.open')
const close_icon = btn_menu.querySelector('.close')
const nav = document.querySelector('.navbar_navigation')

btn_menu.addEventListener('click', () => {
    close_icon.classList.toggle('hidden')
    open_icon.classList.toggle('hidden')
    nav.classList.toggle('-translate-y-full')
    nav.classList.toggle('opacity-0')
})