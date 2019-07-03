const navBar = document.querySelector('#main-nav');
const showcase = document.querySelector('.showcase');


window.addEventListener('scroll',(e)=>{
console.log(showcase.offsetTop);
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

    // if (document.body.scrollTop >= 10 ) {
    // } 
    // else {
    //    
    // }
// };