let countOption = true;
const skills = document.getElementById("skills");

window.addEventListener("scroll", function(){
    let windowHeight = this.innerHeight;
    let skillsHgh = skills.offsetHeight;
    let skillsTop = skills.offsetTop;
    let scrolledY = this.scrollY;
    if(scrolledY > (skillsHgh + skillsTop) - windowHeight){
        let allLoad = skills.querySelectorAll(".preload span");
        allLoad.forEach(ele => {
            ele.style.width = ele.dataset.status;
        });
    }
});

// Master Event
let countDate = new Date("May 10, 2023 9:10");
let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = countDate - dateNow;
    if(dateDiff < 0){
        clearInterval(counter);
    }
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor(dateDiff % (1000 * 60) / 1000);
    document.querySelector(".events .days").innerHTML = days < 10 ? '0'.concat(days) : days;
    document.querySelector(".events .hours").innerHTML = hours < 10 ? '0'.concat(hours) : hours;
    document.querySelector(".events .minutes").innerHTML = minutes < 10 ? '0'.concat(minutes) : minutes;
    document.querySelector(".events .seconds").innerHTML = seconds < 10 ? '0'.concat(seconds) : seconds;
},1000);


// Stats Section
let stats = document.getElementById("#stats");
window.addEventListener("scroll", function(){
    if(this.scrollY > (skills.offsetHeight + skills.offsetTop) - this.innerHeight){
        let slBoxes = document.querySelectorAll(".stat .box .number");
        slBoxes.forEach(ele => {
            startCount(ele,countOption);
        });
        countOption = false;
    }
});
function startCount(ele){
    if(countOption){
        let goal = ele.dataset.goal;
        let counter = setInterval(() => {
            ele.textContent++;
            if(ele.textContent == goal){
                clearInterval(counter);
            }
        },2000 / goal);
    }
}