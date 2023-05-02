const toggleMenu = document.querySelector(".navbar .navbar-toggler");
toggleMenu.onclick = () => {
    toggleMenu.classList.toggle("active");
}
// Featuers
let featCount = 1;
document.querySelectorAll(".featuers .feat .feat-number").forEach(featNum => {
    featNum.classList.add("fa-"+featCount);
    featCount++;
});
// Our Work
const shuffleLinks = document.querySelectorAll(".our-work .shuffle li");
const workBoxes = document.querySelectorAll(".our-work .box");
shuffleLinks.forEach(e => {
    e.addEventListener("click",() => {
        document.querySelectorAll(".our-work .shuffle li").forEach(ele => {
            ele.classList.remove("active");
        });
        e.classList.add("active");
        if(e.dataset.show == "true"){
            workBoxes.forEach(box => {
                box.parentElement.style.display = "block";
            });
        }else{
            workBoxes.forEach(box => {
                if(box.dataset.show == e.dataset.show | box.dataset.show2 == e.dataset.show){
                    box.parentElement.style.display = "block";
                }else{
                    box.parentElement.style.display = "none";
                }
            });
        }
    });
});
workBoxes.forEach(box => {
    box.addEventListener("click", (e) => {
        let popUp = document.createElement("div");
        popUp.className = "popup-overlay";
        let popUpBox = document.createElement("div");
        popUpBox.className = "popup-box";
        let popUpImg = document.createElement("img");
        popUpImg.className = "popup-img";
        popUpImg.src = box.firstElementChild.src;
        if(box.firstElementChild.alt != ''){
            let popUpImgText = document.createTextNode(box.firstElementChild.alt);
            popUpImgText.className = "popup-text";
            popUpBox.appendChild(popUpImgText);
        }
        let popUpExit = document.createElement("span");
        popUpExit.appendChild(document.createTextNode('X'));
        popUpExit.className = "popup-exit";
        popUpExit.addEventListener("click", () => {
            document.body.removeChild(popUpBox);
            document.body.removeChild(popUp);
        });
        popUpBox.appendChild(popUpExit);
        popUpBox.appendChild(popUpImg);
        document.body.appendChild(popUp);
        document.body.appendChild(popUpBox);
    });
});