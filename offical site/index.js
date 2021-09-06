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

const character = [{name:'IRON MAN' ,
                    realName:'Anthony Edward “Tony” Stark', 
                    birth:'29/5/1970',
                    abilities:'Thông minh, chiến lược gia tài giỏi, doanh nhân thành đạt, kỹ năng cận chiến và sử dụng các bộ giáp làm công cụ chiến đấu',
                    quote:`“United? Unity isn’t about being the same. It’s about working together. What you can’t calculate, Ultron, is that our differences are our greatest strength.”`,
                    link:`https://hosonhanvat.vn/ho-so-nhan-vat-iron-man-la-ai`},

                   {name:'CAPTAIN AMERICA',
                    realName:`Steve Rogers `,
                    birth:'4/7/1918',
                    abilities:`Siêu tốc độ, siêu trâu bò, siêu phản xạ, siêu giác quan,kỹ năng cận chiến cao`,
                    quote:`“I’m not looking for forgiveness, and I’m way past asking permission. Earth just lost her best defender, so we’re here to fight. And if you want to stand in our way, we’ll fight you too.”`,
                    link:`https://hosonhanvat.vn/ho-so-nhan-vat-captain-america-steve-rogers`}]

let searchInfo = document.querySelectorAll('.list-hero div');
console.log(searchInfo);                    
searchInfo.forEach((element) => {
    element.addEventListener("click", hideInfo)
    function hideInfo(){
    for( let i = 0; i<character.length; i++){
        if(this.querySelector('p').innerText == character[i].name){
            document.querySelector('.info-hero h2').innerText = character[i].name;
            document.querySelector('.information blockquote i').innerText = character[i].quote;
            document.querySelector('.realName').innerText = character[i].realName;
            document.querySelector('.Birth').innerText = character[i].birth;
            document.querySelector('.Abilities').innerText = character[i].abilities;
            document.querySelector('.information a').href= character[i].link;
        }
    }
    }
});