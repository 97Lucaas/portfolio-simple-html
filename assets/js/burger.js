
let elem = document.getElementById("header");
let open1 = document.getElementById("open");
let close1 = document.getElementById("close");
let textcont = document.getElementById('text-cont');
let nav = document.getElementById('nav');

close1.style.display = "none";

function Open(){

    //elem.classList.add("head-colapsed");
    //elem.style.transform = "translateX(" + (0) + "px)";
    textcont.style.display = "flex";

    elem.style.height = "100vh";
    open1.style.display = "none";
    close1.style.display = "block";

    nav.style.justifyContent = "center";
    nav.style.alignSelf = "auto";

    textcont.style.flexDirection = "column";
    textcont.style.width = "auto";

}

function Close(){

    //elem.style.style.removeProperty('height');
    elem.style.height = "112px";
    //elem.classList.remove("head-colapsed");
    open1.style.display = "block";
    close1.style.display = "none";

    nav.style.justifyContent = "flex-end";

    textcont.style.flexDirection = "row";
    textcont.style.width = "100vh";

    textcont.style.display = "none";

    nav.style.alignSelf = "top";

}