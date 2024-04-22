let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');
// console.log(menu,navbar);

menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
})
window.addEventListener('scroll',()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle'); 
})