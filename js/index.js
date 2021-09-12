// Khai báo biến để làm intro 
const startIntro =document.querySelector('.intro-content button');
const disableRightClick = document.querySelector('video');

// disable right click on video
disableRightClick.addEventListener('contextmenu', disableContextmenu =>{
 disableContextmenu.preventDefault();
})

// tạo intro
let maxWidth = document.querySelector('body').offsetWidth;
window.addEventListener('resize', screenWidth);
function screenWidth(){
    document.querySelector('body').offsetWidth;
    // console.log(document.querySelector('body').offsetWidth)
}

startIntro.addEventListener("click", myFunction);
function myFunction(){
    if(maxWidth > 1024){
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
    if (maxWidth < 1024){
        document.querySelector('.intro-content').style.animationName = "hidding"
        setTimeout(currentPage, 1500);
        function currentPage(){
            window.open("offical site/index.html", "_self");
        }
    }
    if (maxWidth < 800){
        document.querySelector('.intro-content').style.animationName = "hiddingForMB"
        setTimeout(currentPage, 1500);
        function currentPage(){
            window.open("offical site/index.html", "_self");
        }
    }
}