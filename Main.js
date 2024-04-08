var currentImageTimeout; // Variable para almacenar el timeout actual

function openNav() {
    document.getElementById("mySidebar").style.left = "0";
}
function closeNav() {
    document.getElementById("mySidebar").style.left = "-250px";
}
function toggleMenuDerecho() {
    var menuDerecho = document.getElementById("menuDerecho");
    menuDerecho.style.right = menuDerecho.style.right === "0px" ? "-250px" : "0";
}
function showImage(imgSrc) {
    var menuImage = document.getElementById('menuImage');
    clearTimeout(currentImageTimeout);
    menuImage.style.opacity = 0;
    currentImageTimeout = setTimeout(function() {
        menuImage.src = imgSrc;
        menuImage.style.opacity = 1;
    }, 250);
}
function hideImage() {
    var menuImage = document.getElementById('menuImage');
    menuImage.style.opacity = 0;
}
window.onclick = function(event) {
    var mySidebar = document.getElementById("mySidebar");
    var menuDerecho = document.getElementById("menuDerecho");
    if (event.target != mySidebar && event.target != document.querySelector('.menu-btn') &&
        event.target != menuDerecho && event.target != document.querySelector('.menu-btn-derecho')) {
        mySidebar.style.left = "-250px";
        menuDerecho.style.right = "-250px";
    }
}