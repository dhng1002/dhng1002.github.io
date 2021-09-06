const checkType = document.querySelector('.checkType');
document.querySelector('.list-villain').style.display= 'none';
checkType.addEventListener("change", selectHero);
function selectHero(){
    if(checkType.value == "SAH"){
        document.querySelector('.list-hero').style.display = 'flex';
        document.querySelector('.list-villain').style.display= 'none';
    }else{
        document.querySelector('.list-hero').style.display = 'none';
        document.querySelector('.list-villain').style.display = 'flex';
    }
}


const inputKey = document.querySelector('.searchHero');
inputKey.addEventListener('keyup', findCharacter);
function findCharacter(){
    let inputValue = inputKey.value.toUpperCase();
    let findHero = document.querySelectorAll('.list-hero p');
    let hideHero = document.querySelectorAll('.list-hero div');
    let findVillain = document.querySelectorAll('.list-villain p');
    let hideVillain = document.querySelectorAll('.list-villain div');
    for( let i = 0; i<findHero.length ; i++){
        if(findHero[i].innerText.indexOf(inputValue) > -1 ){
            hideHero[i].style.display = 'block';
            hideHero[i].setAttribute('name', 'keep')
        }else{
            hideHero[i].style.display ='none';
            hideHero[i].removeAttribute('name');
        }
    }
    for( let i = 0; i<findVillain.length ; i++){
        if(findVillain[i].innerText.indexOf(inputValue) > -1 ){
            hideVillain[i].style.display = 'block';
            hideVillain[i].setAttribute('name', 'keep')
        }else{
            hideVillain[i].style.display ='none';
            hideVillain[i].removeAttribute('name');
        }
    }

    console.log(document.querySelectorAll(`[name ="keep"]`))
    if(document.querySelectorAll(`.list-hero [name ="keep"]`).length < 4){
        document.querySelector('.list-hero').style.height = 'auto';
        document.querySelector('.list-hero').style.overflow = 'auto';
        
    }else{
        document.querySelector('.list-hero').style.height = '80vh';
        document.querySelector('.list-hero').style.overflowY = 'scroll';
    }
    if(document.querySelectorAll(`.list-villain [name ="keep"]`).length < 4){
        document.querySelector('.list-villain').style.height = 'auto';
        document.querySelector('.list-villain').style.overflow = 'auto';
    }else{
        document.querySelector('.list-villain').style.height = '80vh';
        document.querySelector('.list-villain').style.overflowY = 'scroll';
    
    }
}