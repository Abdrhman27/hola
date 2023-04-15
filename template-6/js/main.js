const toggleMenu = document.getElementById("toggle-menu");
const navMenu = document.getElementById("nav-menu");
const header = document.getElementById("header");
const home = document.getElementById("home");
const scrollBt = document.getElementById("scroll-bt");
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const themeIcon = document.querySelector(".header .nav-list i");
const sections = document.querySelectorAll("section[id]");
toggleMenu.onclick = () => toggleS(navMenu,"open");
navLinks.forEach(e => e.addEventListener("click",removeS(navMenu,"open")));
themeIcon.onclick = (e) => toggleS(e,"bx-toggle-right");
window.onscroll = () => {
    if(window.scrollY > home.offsetHeight + 100 ){
        document.getElementById("scroll-bt").classList.add("show");
    }else{
        document.getElementById("scroll-bt").classList.remove("show");
    }
}
window.addEventListener("scroll", () => {
    const scrolledY = this.scrollY;
    sections.forEach(sec => {
        const sectionHeight = sec.offsetHeight,
        sectionTop = sec.offsetTop - 50,
        sectionId = sec.getAttribute("id");
        if(scrolledY > sectionTop && scrolledY <= sectionTop + sectionHeight){
            if(document.querySelector('.nav-menu a[href*=' + sectionId + ']') != null){
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add("active-link");
            }
        }else if( document.querySelector('.nav-menu a[href*=' + sectionId + ']') != null){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove("active-link");
        }
    });
});
window.addEventListener("scroll",scrollHeader);
function toggleS(ele,nam){
    ele.classList.toggle(nam);
}
function removeS(ele,nam){
    ele.classList.remove(nam);
}
function scrollHeader(){
    if(this.scrollY > 80) header.classList.add("scroll-header"); else header.classList.remove("scroll-header");
}