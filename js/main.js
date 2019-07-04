const navBar = document.querySelector('#main-nav');
const showcase = document.querySelector('.showcase');
const menu = document.querySelector('.menu');
const navBarList = document.querySelector('.navbarList');
const logo = document.querySelector('.logo');
window.addEventListener('scroll',(e)=>{

    console.log(showcase.offsetTop);

if(window.scrollY>500){

window.addEventListener('scroll',(e)=>{
if(window.scrollY>showcase.offset().bottom)
{
    navBar.classList.add("nav-colored");
    navBar.classList.remove("nav-transparent");

}

else{
    navBar.classList.add("nav-transparent");
    navBar.classList.remove("nav-colored");
}
});

// menu.addEventListener('click',()=>{

//     if(navBarList.style.display=='none'){
//         navBarList.style.display="block";
//         logo.style.display="none";
//     }
//     else navBarList.style.display="none";
// })