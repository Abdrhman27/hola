const toggleMenu = document.getElementById("toggle-menu");
const menuLinks = document.querySelector(".header .nav-menu");
const overlay = document.querySelector(".header .overlay");
const fadeEle = document.querySelectorAll(".has-fade");
toggleMenu.onclick = (e) => {
    toggleMenu.classList.toggle("open");
    menuLinks.classList.toggle("show");
    fadeEle.forEach(fadeEle => {
        if(fadeEle.classList.contains("fade-in")){
            fadeEle.classList.remove("fade-in");
            fadeEle.classList.add("fade-out");
        }else if(fadeEle.classList.contains("fade-out")){
            fadeEle.classList.remove("fade-out");
            fadeEle.classList.add("fade-in");
        }else{
            fadeEle.classList.add("fade-in");
        }
    });
}

// Header Shadow

const headerE = document.getElementById("header");
window.addEventListener("scroll",() => {
    if(this.scrollY > 50){
        if(!headerE.classList.contains("bt-shadow")){
            headerE.classList.add("bt-shadow");
        }
    }else if(headerE.classList.contains("bt-shadow")){
        headerE.classList.remove("bt-shadow");
    }
});