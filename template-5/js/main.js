let backgroundOption = true;
let imgsInterval;
let colorStg = window.localStorage.getItem("color_option");
let backgroundStg = window.localStorage.getItem("background_option");
let navBulletsStg = window.localStorage.getItem("bullets_option");
if (colorStg !== null) {
    document.documentElement.style.setProperty("--main-color", colorStg);
    document.querySelectorAll(".color-list li").forEach(li => {
        li.classList.remove("active");
        if (li.dataset.color === colorStg) {
            li.classList.add("active");
        }
    });
}
if (backgroundStg !== null) {
    if (backgroundStg === "true") {
        backgroundOption = true;
    } else {
        backgroundOption = false;
    }
    document.querySelectorAll(".settings-box .option-bt.random-imgs span").forEach(ele => {
        ele.classList.remove("active");
    });
    if (backgroundStg === "true") {
        document.querySelector(".settings-box .option-bt.random-imgs .yes").classList.add("active");
    } else {
        document.querySelector(".settings-box .option-bt.random-imgs .no").classList.add("active");
    }
}
if(navBulletsStg !== null){
    if(navBulletsStg === "true"){
        document.querySelector(".nav-bullets").style.display = "block";
        if(!document.querySelector(".settings-box .option-bt.show-bullets .yes").classList.contains("active")){
            document.querySelector(".settings-box .option-bt.show-bullets .yes").classList.add("active");
        }
    }else{
        document.querySelector(".nav-bullets").style.display = "none";
        document.querySelector(".settings-box .option-bt.show-bullets .yes").classList.remove("active");
        if(!document.querySelector(".settings-box .option-bt.show-bullets .no").classList.contains("active")){
            document.querySelector(".settings-box .option-bt.show-bullets .no").classList.add("active");
        }
    }
}
// Settings Box
document.getElementById("i0toggle").children[0].onclick = (e) => {
    document.getElementById("i0settings").classList.toggle("open");
    e.target.classList.toggle("fa-spin");
};
const sColors = document.querySelectorAll(".color-list li");
sColors.forEach((li) => {
    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
        window.localStorage.setItem("color_option", e.target.dataset.color);
        e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
            ele.classList.remove("active");
        });
        li.classList.add("active");
    });
});

const RandomEle = document.querySelectorAll(".settings-box .option-bt.random-imgs span");
RandomEle.forEach(span => {
    span.addEventListener("click", (e) => {
        handleActive(e);
        if (e.target.dataset.background === 'yes') {
            backgroundOption = true;
            randmoizeImgs();
            window.localStorage.setItem("background_option", true);
        } else {
            backgroundOption = false;
            clearInterval(imgsInterval);
            window.localStorage.setItem("background_option", false);
        }
    });
});
const navBullets = document.querySelectorAll(".nav-bullets .bullet");
navBullets.forEach(bullet => {
    bullet.addEventListener("click",(e) => {
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: "smooth"
        });
    });
});

const showBullets = document.querySelectorAll(".settings-box .option-bt.show-bullets span");

showBullets.forEach(span => {
    span.addEventListener("click",(e) => {
        handleActive(e);
        if(e.target.dataset.display === "show"){
            document.querySelector(".nav-bullets").style.display = "block";
            window.localStorage.setItem("bullets_option",true);
        }else{
            document.querySelector(".nav-bullets").style.display = "none";
            window.localStorage.setItem("bullets_option",false);
        }
    });
});

document.querySelector(".settings-box .reset-options").onclick = () => {
    window.localStorage.clear();
    window.location.reload();
}
// End Settings

function randmoizeImgs() {
    if (backgroundOption) {
        imgsInterval = setInterval(() => {
            let imgsArr = [];
            for (let i = 0; i < 5; i++) {
                if (i < 10) {
                    imgsArr[i] = `0${i + 1}.jpg`;
                } else {
                    imgsArr[i] = `${i}.jpg`;
                }
            }
            let randomNum = Math.floor(Math.random() * imgsArr.length);
            document.getElementById("landing").style.backgroundImage = 'url("./images/' + imgsArr[randomNum] + '")';
        }, 10000);
    }
}
randmoizeImgs();

// Start Header Links
const toggleMenu = document.querySelector(".landing .links-container .toggle-menu");
toggleMenu.onclick = (e) => {
    document.querySelector(".landing .links").classList.toggle("open");
    toggleMenu.classList.toggle("active");
}

// Skills Section
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
    let skillsTop = ourSkills.offsetTop;
    let skillsHeight = ourSkills.offsetHeight;
    let windowHeight = this.innerHeight;
    let windowScrolled = this.pageYOffset;
    if (windowScrolled > (skillsTop + skillsHeight - windowHeight)) {
        let skillsProg = document.querySelectorAll(".skills .skill-box .skill-progress span");
        skillsProg.forEach(ele => {
            ele.style.width = ele.dataset.progress;
        });
    }
}
// Gallery Section
let galleryImgs = document.querySelectorAll(".gallery .image-box img");
galleryImgs.forEach(img => {
    img.addEventListener("click", (e) => {
        let overlay = document.createElement("div");
        overlay.className = "popup-overlay";
        document.body.appendChild(overlay);
        // PopUp Box
        let popupBox = document.createElement("div");
        popupBox.className = "popup-box";
        // PopUp Box Heading
        if (img.alt !== null) {
            let popupHeading = document.createElement("h3");
            let imgText = document.createTextNode(img.alt);
            popupHeading.appendChild(imgText);
            popupBox.appendChild(popupHeading);
        }
        // PopUp Box Image
        let popupImage = document.createElement("img");
        popupImage.src = img.src;
        popupBox.appendChild(popupImage);
        document.body.appendChild(popupBox);
        // Close Button
        let closeBt = document.createElement("span");
        let closeBtTxt = document.createTextNode('X');
        closeBt.appendChild(closeBtTxt);
        closeBt.className = "close-button";
        popupBox.appendChild(closeBt);
        document.addEventListener("click", (e) => {
            if (e.target.className === "close-button") {
                e.target.parentNode.remove();
                overlay.remove()
            }
        });
    });
});

let a = {
    i: 1,
    toString: function () {
        return a.i++;
    }
}

// Functions To Use

function handleActive(e) {
    e.target.parentElement.querySelectorAll(".active").forEach(el => {
        el.classList.remove("active");
    });
    e.target.classList.add("active");
};


