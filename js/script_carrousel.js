let dots = document.querySelectorAll(".caroussel-circles-item");

dots.forEach(function(d){
    d.addEventListener("click", () => {
        let img = document.querySelector(".caroussel-img");
        let imgItem = document.querySelectorAll(".caroussel-img-item");
        document.querySelector(".img-active").classList.remove("img-active");
        if(d.id == "dot-1"){
            img.style.transform = "translateX(0%)";
            imgItem[0].classList.add("img-active");
            document.querySelector("#button-left").classList.add("is-hide");
            document.querySelector("#button-right").classList.remove("is-hide");
        }else if(d.id == "dot-2"){
            img.style.transform = "translateX(-100%)";
            imgItem[1].classList.add("img-active");
            document.querySelector("#button-left").classList.remove("is-hide");
            document.querySelector("#button-right").classList.remove("is-hide");
        }else {
            img.style.transform = "translateX(-200%)";
            imgItem[2].classList.add("img-active");
            document.querySelector("#button-right").classList.add("is-hide");
            document.querySelector("#button-left").classList.remove("is-hide");
        }
        document.querySelector(".circle-active").classList.remove("circle-active");
        d.classList.add("circle-active")
    })
});





function swapRight(){
    let dotActive = document.querySelector(".circle-active");
    let dotNextActive = dotActive.nextElementSibling;

    let imgActive = document.querySelector(".img-active");
    let imgNextActive = imgActive.nextElementSibling;

    let img = document.querySelector(".caroussel-img");
    if(img && dotNextActive){
        if(imgActive.previousElementSibling && imgNextActive){
            img.style.transform = "translateX(-200%)";
            document.querySelector("#button-right").classList.add("is-hide")
        }else {
            img.style.transform = "translateX(-100%)";
            document.querySelector("#button-left").classList.remove("is-hide")
        }
        imgActive.classList.remove("img-active");
        imgNextActive.classList.add("img-active");

        dotNextActive.classList.add("circle-active");
        dotActive.classList.remove("circle-active");
    }
}

function swapLeft(){
    let dotActive = document.querySelector(".circle-active");
    let dotPreviousActive = dotActive.previousElementSibling;

    let imgActive = document.querySelector(".img-active");
    let imgPreviousActive = imgActive.previousElementSibling;

    let img = document.querySelector(".caroussel-img");
    if(img && dotPreviousActive){
        if(imgActive.nextElementSibling && imgPreviousActive){
            img.style.transform = "translateX(0%)";
            document.querySelector("#button-left").classList.add("is-hide")
        }else{
            img.style.transform = "translateX(-100%)";
            document.querySelector("#button-right").classList.remove("is-hide")
        }
        imgActive.classList.remove("img-active");
        imgPreviousActive.classList.add("img-active");

        dotPreviousActive.classList.add("circle-active");
        dotActive.classList.remove("circle-active");
    }
}