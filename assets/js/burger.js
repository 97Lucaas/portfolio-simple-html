
let elem = document.getElementById("overlay");
let open1 = document.getElementById("open");
let close1 = document.getElementById("close");

close1.style.display = "none";

function Open(){

    elem.style.transform = "translateX(" + (0) + "px)";
    open1.style.display = "none";
    close1.style.display = "block";

}

function Close(){

    elem.style.transform = "translateX(" + (110) + "%) translateY(-1000px)";
    open1.style.display = "block";
    close1.style.display = "none";

}