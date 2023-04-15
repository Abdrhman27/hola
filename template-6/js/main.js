const toggleMenu = document.getElementById("toggle-menu");
const navMenu = document.getElementById("nav-menu");
const header = document.getElementById("header");
const home = document.getElementById("home");
const scrollBt = document.getElementById("scroll-bt");
const theme = document.getElementById("theme-bt"),
darkTheme = "dark-theme",iconTheme = "bx-toggle-right";
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const sections = document.querySelectorAll("section[id]");
const themeStg = window.localStorage.getItem("theme_option");
if(themeStg != null){
    if(themeStg == "light-theme"){
        document.body.classList.remove("dark-theme");
        document.body.classList.add(themeStg);
    }else{
        document.body.classList.remove("light-theme");
        document.body.classList.add(themeStg);
    }
}
// Local Storage
toggleMenu.onclick = () => toggleS(navMenu,"open");
navLinks.forEach(e => e.addEventListener("click",removeS(navMenu,"open")));
theme.onclick = (e) => {
    if(!document.body.classList.contains("dark-theme")){
        window.localStorage.setItem("theme_option","dark-theme");
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme")
    }else{
        window.localStorage.setItem("theme_option","light-theme");
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme")
    }
    toggleS(e.target,"bx-toggle-right");
};
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