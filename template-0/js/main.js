let infoUl = document.querySelectorAll(".information .links li");
let infoArr = document.querySelectorAll(".information .content div");
infoUl.forEach(li => {
    li.addEventListener("click",(e) => {
        e.target.parentElement.querySelectorAll(".active").forEach(ele => {
            ele.classList.remove("active");
        });
        e.target.classList.add("active");
        infoArr.forEach(div => {
            if(div.className == e.target.dataset.class){
                div.style.display = "block";
            }else{
                div.style.display = "none";
            }
        });
    });
});