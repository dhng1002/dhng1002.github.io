// Khai báo biến để làm intro 
const startIntro =document.querySelector('.intro-content button');
const disableRightClick = document.querySelector('video');

// disable right click on video
disableRightClick.addEventListener('contextmenu', disableContextmenu =>{
 disableContextmenu.preventDefault();
})

// tạo intro
startIntro.addEventListener("click", myFunction);
function myFunction(){
    document.querySelector('.intro-content').style.animationName = "hidding"
    setTimeout(introStart, 1500);
    function introStart(){
        document.querySelector('.intro-content-background').style.display ="none";
        document.querySelector('.intro video').play();
    setTimeout(currentPage, 37000);
    function currentPage(){
    window.open("offical site/index.html", "_self");
    }
    }
}