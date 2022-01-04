let button = document.querySelector(".menu-button");

if(button){
    button.addEventListener("click", () => {
        let header = document.querySelector(".header-desktop");
        if(header){
            header.style.transform = "translateX(0%)"
        }
    });
}

let close = document.querySelector(".menu-close");
if(close){
    close.addEventListener("click",() => {
        let header = document.querySelector(".header-desktop");
        if(header){
            header.style.transform = "translateX(100%)"
        }
    });
}

let toTop = document.querySelector(".scrollToTop");
let contact = document.querySelector("#contact");
if(toTop){
    toTop.addEventListener("click",() => {
        window.scrollTo(0,0);
    });
}

document.addEventListener("scroll", () => {
    if(window.scrollY > 300){
        toTop.style.display = "block";
    }else {
        toTop.style.display = "none";
    }

    if(toTop.getBoundingClientRect().top > contact.getBoundingClientRect().top){
        toTop.style.backgroundColor = "#272727";
        document.querySelector(".scrollSvg").setAttribute("stroke","#ffffff")
    }else {
        toTop.style.backgroundColor = "#ffffff";
        document.querySelector(".scrollSvg").setAttribute("stroke","#272727")
    }
    
})

