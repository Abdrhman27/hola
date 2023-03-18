


let slLikIco = document.querySelector("#latestPost .post-stats .fr-likes > i");
let slComIco = document.querySelector("#latestPost .post-stats .fr-comment > i");
slLikIco.onclick = function () {
    if(this.classList.contains("fa-regular")){
        this.classList.remove("fa-regular");
        this.classList.add("fa-solid");
        this.style.color = "var(--red-color)";
        document.querySelector("#latestPost .post-stats .fr-likes > span").style.color = "var(--red-color)";
    }else if(this.classList.contains("fa-solid")){
        document.querySelector("#latestPost .post-stats .fr-likes > span").style.color = "";
        this.classList.remove("fa-solid");
        this.classList.add("fa-regular");
        this.style.color = "";
    }
}
slComIco.onclick = function () {
    if(this.classList.contains("fa-regular")){
        this.classList.remove("fa-regular");
        this.classList.add("fa-solid");
        this.style.color = "var(--blue-color)";
        document.querySelector("#latestPost .post-stats .fr-comment > span").style.color = "var(--blue-color)";
    }else if(this.classList.contains("fa-solid")){
        document.querySelector("#latestPost .post-stats .fr-comment > span").style.color = "";
        this.classList.remove("fa-solid");
        this.classList.add("fa-regular");
        this.style.color = "";
    }
}