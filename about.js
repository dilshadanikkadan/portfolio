    const sideMenu = document.getElementById("sidmenu");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("clodeIcon");


menuBtn.addEventListener("click", drawMenu);
closeBtn.addEventListener("click",closeMenu)


function drawMenu() {
    sideMenu.style.left = "0px";
}

function closeMenu(){
    sideMenu.style.left = "-800px";
}