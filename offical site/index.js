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
        document.querySelector('.list-hero').style.height = '430px';
        document.querySelector('.list-hero').style.overflowY = 'scroll';
    }
    if(document.querySelectorAll(`.list-villain [name ="keep"]`).length < 4){
        document.querySelector('.list-villain').style.height = 'auto';
        document.querySelector('.list-villain').style.overflow = 'auto';
    }else{
        document.querySelector('.list-villain').style.height = '430px';
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
                    link:`https://hosonhanvat.vn/ho-so-nhan-vat-captain-america-steve-rogers`},
                    
                    {name:'THOR',
                    realName:'THOR ODINSON (Thần Sấm)',
                    birth:'964.AD',
                    abilities:'Là vị thần chiến tranh, Thor có nhiều kiến thức về vũ trụ, thông thạo nhiều kĩ năng chiến đấu, cơ thể gần như bất hoại và khả năng khồi phục nhanh chóng',
                    quote:'“I’M ONLY ALIVE BECAUSE FATE WANTS ME ALIVE.”',
                    link:'https://hosonhanvat.net/thor-la-ai/'},
                
                    {name:`BLACK WIDOW`,
                    realName:`Natasha Romanoff`,
                    birth:`3/12/1984`,
                    abilities:`Tăng cường sinh lý học, sức mạnh thể chất cao, bền bỉ, thiện xạ, chuyên gia chiến thuật`,
                    quote:`"Even If There's A Small Chance We Can Undo This, I Mean, We Owe It To Everyone Not In This Room To Try."`,
                    link:`https://hosonhanvat.net/black-widow-la-ai/`},
                
                    {name:`HULK`,
                    realName:`Robert Bruce Banner`,
                    birth:'18/12/1969',
                    abilities:`Sức mạnh thể chất, khả năng phục hồi, bất hoại, hập thụ năng lượng gamma, thích ứng với mọi loại môi tường`,
                    quote:`."Hulk will break metal man open like a tin can. Metal man thinks he is stronger than Hulk. Metalman wrong."`,
                    link:`https://hosonhanvat.vn/ho-so-nhan-vat-the-incredible-hulk-khi-ga-khong-lo-xanh-gian-du`},
                
                    {name:`HAWKEYE`,
                    realName:`Clint Barton`,
                    birth:`18/6/1982`,
                    abilities:`Siêu cung thủ, xạ thủ lão luyện, khả năng phản xạ cùng với độ bền sức chịu đựng hơn người thường`,
                    quote:`"If I Put An Arrow Through Loki's Eye Socket I'd Sleep Better, I Suppose."`,
                    link:`https://hosonhanvat.net/hawkeye-clint-barton/`},
                
                    {name:`FALCON`,
                    realName:`Sam Wilson`,
                    birth:`23/11/1978`,
                    abilities:`Bậc thầy võ thuật, sức mạnh thể chất, sử dụng bộ cánh để chiến đấu và khả năng không chiến cao`,
                    quote:`"What Would Be The Point Of All The Pain And Sacrifice If I Wasn't Willing To Stand Up And Keep Fighting?"`,
                    link:`https://hosonhanvat.net/falcon/`},
                
                    {name:`WINTER SOLDIER`,
                    realName:`James Buchanan Barnes`,
                    birth:`10/3/1917`,
                    abilities:`Tay công nghệ sinh học, siêu sức mạnh, tăng khả năng phản xạ, bậc thầy chiến đấu`,
                    quote:`"That Little Guy From Brooklyn Who Was Too Dumb To Run Away From A Fight, I'm Following Him."`,
                    link:`https://hosonhanvat.net/winter-soldier-bucky-barnes-la-ai/`},
                
                    {name:`WAR MACHINE`,
                    realName:`James Rupert "Rhodey" Rhodes`,
                    birth:`30/10/1981`,
                    abilities:`Kỹ sữ lành nghề, điều khiển tốt các bộ giáp của Tony, kỹ năng chiến đấu và kỹ năng sống sót`,
                    quote:`“If You Want This Suit, You’re Going To Have To Pry My Cold Dead Body Out Of It.”`,
                    link:`https://hosonhanvat.vn/ho-so-nhan-vat-war-machine-co-may-chien-tranh`},
                
                    {name:`SCARLET WITCH`,
                    realName:`Wanda Maximoff`,
                    birth:`Early 1989`,
                    abilities:`Ma thuật hỗn mang, sức mạnh vô tận, khả năng thay đổi hiện thực, bay lượn với tốc độ tùy thích`,
                    quote:`"I Can't Control Their Fear, Only My Own."`,
                    link:`https://hosonhanvat.net/scarlet-witch-la-ai/`},
                
                    {name:`ANT MAN`,
                    realName:`Scott Lang`,
                    birth:`12/1962`,
                    abilities:`Sử dụng hạt Pym để thu nhỏ mọi vật thể bao gồm cả bản thân, ngoài ra khi thu nhỏ nhưng sức mạnh tương đương cơ thể bình thường`,
                    quote:`“I Know You Know A Lot Of Super-People, So...Thinks For Thanking Of Me!”`,
                    link:`https://hosonhanvat.net/ant-man/`},
                
                    {name:`THE WASP`,
                    realName:`Janet van Dyne`,
                    birth:`??/??/????`,
                    abilities:`Thu nhỏ kích thước, bay, dùng trang phục bắn ra các luồng điện sinh học, giao tiếp với côn trùng`,
                    quote:`"Aratrechina longicornis, commonly known as crazy ants, they're lightning fast and can conduct electricity which makes them useful to fry out enemy electronics."`,
                    link:`https://hosonhanvat.vn/ho-so-nhan-vat-the-wasp`},
                
                    {name:`SPIDER MAN`,
                    realName:`Peter Parker`,
                    birth:`10/8/2001`,
                    abilities:`Leo tường, bắn tơ, siêu sức mạnh, siêu dẻo dai, giác quan nhện`,
                    quote:`“Wait A Minute, You Guys Aren’t The Real Avengers! I Can Tell. Hulk Gives It Away.”`,
                    link:`https://hosonhanvat.net/spider-man-peter-parker/`},
                
                    {name:`STAR LORD`,
                    realName:`Peter Jason Quill`,
                    birth:`1980`,
                    abilities:`Độ bền siêu phàm, tuổi thọ cao, thành thạo sử dụng súng, có kiến thức sâu rộng về nhiều hành tinh, đa ngôn ngữ`,
                    quote:`"You think life takes more than it gives, but not today. Today it 's giving us something. It is giving us a chance."`,
                    link:`https://hosonhanvat.vn/ho-so-nhan-vat-star-lord`},
                
                    {name:`GAMORA`,
                    realName:`Gamora`,
                    birth:`1979`,
                    abilities:`Siêu sức mạnh, siêu tốc độ, siêu bền, kỹ năng cận chiến đỉnh của đỉnh, sử dụng thành thạo mọi vũ khí, được mệnh danh là nữ sát thủ`,
                    quote:`“I Am Going To Die Surrounded By The Biggest Idiots In The Galaxy.”`,
                    link:`https://hosonhanvat.vn/gamora`},
                    
                    {name:`NEBULA`,
                    realName:`Nebula`,
                    birth:`??/??/????`,
                    abilities:`Một chiến lược gia xuất sắc, có chuyên môn trong chiến tranh không gian, kiểm soát lực lượng và vận hành công nghệ tiên tiến. Cô cũng là một chiến binh cận chiến xuất sắc.`,
                    quote:`"Thanos pulled my eye from my head, and my brain from my skull, and my arm from my body... because of you."`,
                    link:`https://hosonhanvat.vn/ho-so-nhan-vat-nebula`},
                
                    {name:`DRAX`,
                    realName:`Arthur Douglas`,
                    birth:`1940`,
                    abilities:`Bậc thầy cận chiến, siêu khứu giác, siêu phục hồi, siêu trâu bò`,
                    quote:`What If Someone Does Something Irksome...`,
                    link:`https://hosonhanvat.vn/drax-the-destroyer`},
                
                    {name:`GROOT`,
                    realName:`GROOT`,
                    birth:'GROOT/GROOT/GROOT ??',
                    abilities:`Tái tạo tế bào, da bền, hấp thụ gỗ`,
                    quote:`I am Groot, We are Groot.....Groot`,
                    link:`https://hosonhanvat.vn/ho-so-nhan-vat-groot-nguoi-cay-tham-lang-cua-marvel`},
                
                    {name:`ROCKET RACCOON`,
                    realName:`Rocket Raccoon`,
                    birth:`1976`,
                    abilities:`Cấu trúc cơ thể sinh học hơn con người, chuyên gia vũ khí, võ thuật, phi công nhiều kinh nghiệm`,
                    quote:`"You're smiling. And for a second, I got a warm feeling. But then it was ruined..."`,
                    link:`https://hosonhanvat.vn/ho-so-nhan-vat-rocket-raccoon-gau-meo-da-cam-cua-marvel-la-ai`},
                
                    {name:`MANTIS`,
                    realName:`Mantis`,
                    birth:`??/??/????`,
                    abilities:`Thiền định để kiểm soát cơ thể của mình, bao gồm cả khả năng tự trị thương, cũng như nhận thức về đau đớn, cho phép cô nhanh chóng hồi phục. Cô cũng có được khả năng tâm linh nhờ thiền định.`,
                    quote:`"Smiling. I Hear It Is The Thing To Do To Make People Like You."`,
                    link:`https://hosonhanvat.net/mantis/`},
                    
                    {name:`DOCTOR STRANGE`,
                    realName:`Stephen Vincent Strange`,
                    birth:`1930`,
                    abilities:`Sử dụng đa dạng các loại phép thuật, ma thuật không gian, có nhiều kiến thức về vũ trụ`,
                    quote:`"I do not believe in fairy tales about chakras or energy or the power of belief."`,
                    link:`https://hosonhanvat.net/doctor-strange-la-ai/`},
                    
                    {name:`BLACK PANTHER`,
                    realName:`T'Challa`,
                    birth:`??/??/????`,
                    abilities:` Thể lực siêu phàm, siêu nhanh nhẹn, trí tuệ thiên tài, sử dụng bộ giáp để tăng khả năng chiến đấu`,
                    quote:`"Wakanda Forever!"`,
                    link:`https://hosonhanvat.net/black-panther-la-ai/`},
                    
                    {name:`VALKYRIE`,
                    realName:`Bruunhilde`,
                    birth:`??/??/????`,
                    abilities:`Sức mạnh, tốc độ, sức chịu đựng, độ bền, nhanh nhẹn, phản xạ siêu phàm, thông thạo ngôn ngữ cửu giới`,
                    quote:`But me...I choose to run toward my problems and not away from them. Because that’s what...Because that’s what heroes do."`,
                    link:`https://hosonhanvat.vn/ho-so-nhan-vat-valkyrie-cua-vu-tru-marvel-la-ai`},
                
                    {name:`CAPTAIN MARVEL`,
                    realName:`Carol Danvers`,
                    birth:`9/1980`,
                    abilities:`Thể chất siêu phàm, khả năng hấp thụ năng lượng và bắn ra các năng lượng từ bản thân, tồn tại trong không gian`,
                    quote:`“Higher, further, faster, baby.”`,
                    link:`https://hosonhanvat.vn/ho-so-nhan-vat-captain-marvel-sieu-anh-hung-manh-nhat-mcu-hien-tai-la-ai`},
                
                    {name:`LOKI`,
                    realName:` Loki Odinson`,
                    birth:`965 A.D`,
                    abilities:`Sử dụng ma thuật cực tốt, biến hình và siêu thông minh`,
                    quote:`"We May Lose. Sometimes Painfully. But We Don't Die. We Survive."`,
                    link:`https://hosonhanvat.vn/ho-so-nhan-vat-loki-la-ai`},
                
                    {name:`VISION`,
                    realName:`The Vision`,
                    birth:`5/2015`,
                    abilities:`Tạo ảnh 3D, kiểm soát năng lượng, máy quét quang học, thay đổi giọng nói`,
                    quote:`"Yes, you can. You can. If he gets this stone, half the universe dies. It's not fair. It shouldn't be you, but it is. It's all right. You could never hurt me... I just feel you."`,
                    link:`https://hosonhanvat.vn/ho-so-nhan-vat-vision-nguoi-may-voi-suc-manh-than-thanh-luon-co-tro-thanh-con-nguoi-la-ai`},
                
                    {name:`QUICK SLIVER`,
                    realName:`Pietro (Peter Maximoff)`,
                    birth:`1955`,
                    abilities:`Cơ thể thích nghi tốc độ dịch chuyển cực nhanh và giới hạn vẫn còn là bí ẩn, ngoài ra anh cũng là một tay cận chiến có hạng`,
                    quote:`You didn't see that coming?`,
                    link:`https://hosonhanvat.net/quicksilver/`},
                    
                    {name:`ANCIENT ONE`,
                    realName:'Yao',
                    birth:`1430`,
                    abilities:`Thao tác ma thuật Eldritch, thao túng thời gian, dịch chuyển tức thời, xuất hồn...`,
                    quote:`"You spent your whole life trying to widen that keyhole. To see more, to know more; and now, on hearing that it can be widened in ways you can't imagine... you reject the possibility."`,
                    link:`https://hosonhanvat.net/ancient-one-marvel-la-ai/`},
                
                    {name:`SHANG CHI`,
                    realName:`SHANG CHI`,
                    birth:`1998`,
                    abilities:`Bậc thầy Kung-fu, thể chất vật lý đỉnh cao, thành thạo nhiều loại vũ khí, kiểm soát hệ thần kinh`,
                    quote:`"If You Aim At Nothing, You Hit Nothing."`,
                    link:`https://hosonhanvat.net/shang-chi-la-ai/`},
                
                    {name:`NICK FURY`,
                    realName:`Nicholas Joseph Fury`,
                    birth:`4/7/1950`,
                    abilities:`Chiến lược gia thiên tài, nhà điều hành quân sự tài ba, thành thạo nhiều loại vũ khí`,
                    quote:`Last Time I Trusted Someone, I Lost An Eye`,
                    link:`https://hosonhanvat.vn/ho-so-nhan-vat-nick-fury-ke-hoai-nghi-va-hoang-tuong-nhat-trai-dat-la-ai`},
                
                    {name:`SHURI`,
                    realName:`Shuri`,
                    birth:`1998`,
                    abilities:`Cơ thể được tăng cường sức mạnh bằng dược thảo, siêu trí tuệ, chuyên gia chiến thuật`,
                    quote:`“‘People Are Shooting At Me. Wait, Let Me Put My Helmet On!’”`,
                    link:`https://hosonhanvat.net/shuri-la-ai/`,},
                
                    {name:`RED SKULL`,
                    realName:`Johann Shmidt`,
                    birth:`1910`,
                    abilities:`Siêu tâm linh, thần giao cách cảm, gây ảo giác, mind control, ngụy trang ảo ảnh`,
                    quote:`"Great Power Has Always Baffled Primitive Men."`,
                    link:`https://hosonhanvat.net/red-skull/`},
                    
                    {name:`OBADIAH STANE`,
                    realName:`OBADIAH STANE`,
                    birth:`??/??/????`,
                    abilities:`Trí tuệ thiên tài, chiến lược gia, sử dụng bộ giáp Iron Monger làm công cụ chiến đấu`,
                    quote:`"Technology. That's always been your Achilles heel in this part of the world. Don't worry, it'll only last for fifteen minutes. That's the least of your problems."`,
                    link:`https://hosonhanvat.vn/ho-so-nhan-vat-obadiah-stane-iron-monger`},
                    
                    {name:`ABOMINATION`,
                    realName:` Emil Blonsky`,
                    birth:`1967`,
                    abilities:`Hấp thụ Gamma, siêu sức mạnh, tái tạo mô siêu nhanh, phát ra phóng xạ Gamma`,
                    quote:`"Is that it? Is that all you got?"`,
                    link:`https://hosonhanvat.vn/ho-so-nhan-vat-abomination-ke-thu-khong-doi-troi-chung-cua-hulk`},
                
                    {name:`IVAN VANKO`,
                    realName:`Ivan Vanko`,
                    birth:`15/2/1968`,
                    abilities:`Vanko là kĩ sư có tay nghề cao và có kiến thức sâu rộng về công nghệ, nhờ đó anh ta có thể chế tạo một bộ áo giáp cho mình từ một miếng giáp của Stark.`,
                    quote:`My father is the reason you're alive`,
                    link:`https://hosonhanvat.net/whiplash/`},
                    
                    {name:`ALDRICH KILLIAN`,
                    realName:`Aldrich Killian`,
                    birth:`??/??/????`,
                    abilities:`Hấp thụ huyết thanh Extremis, tạo ra năng lượng nhiệt từ cơ thể ngoài ra hắn cũng có một trí tuệ thiên tài`,
                    quote:`"Extremis harnesses our bioelectrical potential and it goes... here. This is essentially an empty slot, and what this tells us is that our mind, our entire DNA in fact, is destined to be upgraded."`,
                    link:`https://marvelcinematicuniverse.fandom.com/wiki/Aldrich_Killian`},
                
                    {name:`MALEKITH`,
                    realName:`Malekith`,
                    birth:`??/??/????`,
                    abilities:`Sở hữu sức mạnh siêu phàm, di chuyển với tốc độ vượt quá giới hạn thể chất, kéo dài tuổi thọ, sử dụng năng lượng ma thuật`,
                    quote:` The Asgardians will suffer as we have suffered. I will reclaim the Aether. I will restore our world.`,
                    link:`https://hosonhanvat.vn/ho-so-nhan-vat-malekith`},
                    
                    {name:`ALEXANDER PIERCE`,
                    realName:`Alexander Goodwin Pierce`,
                    birth:`1790`,
                    abilities:`Thông minh, chiến lược gia`,
                    quote:`"It could be nothing. It probably is nothing. I just need time to make sure it's nothing."`,
                    link:`https://marvelcinematicuniverse.fandom.com/wiki/Alexander_Pierce`},
                
                    {name:`RONAN`,
                    realName:`Ronan the Accuser`,
                    birth:`??/??/????`,
                    abilities:`Kháng bệnh tật chất độc, chỉ số IQ cao, chiến thuật gia, thành thạo chiến đấu`,
                    quote:`"I promised Thanos I would retrieve the Orb for him only then will he destroy Xandar for me."`,
                    link:`https://hosonhanvat.vn/ho-so-nhan-vat-ronan-the-accuser`},
                
                    {name:`EGO`,
                    realName:`Ego The Living Planet`,
                    birth:`??/??/????`,
                    abilities:`Nguồn năng lượng vô cùng lớn, có năng lượng tâm linh, ử dụng quyền hạn Psionic của mình để đẩy các đơn vị không gian xung quanh`,
                    quote:`oh, Peter... death will remain a stranger to both of us, as long as the light burns within the planet.`,
                    link:`https://hosonhanvat.vn/ho-so-nhan-vat-ego-living-planet-hanh-tinh-song-ki-di-va-quyen-nang-cua-marvel-la-ai`},
                
                    {name:`ULTRON`,
                    realName:`ultron`,
                    birth:`1968`,
                    abilities:` Trí tuệ thông minh nhân tạo, lớp vỏ true Adamantium giúp cơ thể gần như bất hoại, siêu thông minh `,
                    quote:`"I mean, look at me. Do I look like Iron Man? Stark is nothing!"`,
                    link:`https://hosonhanvat.vn/ho-so-nhan-vat-ultron`},
                
                    {name:`DARREN CROSS`,
                    realName:`Darren Cross`,
                    birth:`1978`,
                    abilities:`Phóng to, thu nhỏ kích thước cơ thể, sử dụng bộ giáp làm công cụ chiến đấu`,
                    quote:`"The Yellowjacket is an all-purpose weapon of war capable of altering the size of the wearer for the ultimate combat advantage."`,
                    link:`https://lafactoriaweb.com/yellowjacket`},
                
                    {name:`DORMAMMU`,
                    realName:`DORMAMMU`,
                    birth:`??/??/????`,
                    abilities:`Quyền năng vô hạn, vận hành năng lượng vũ trụ, sức mạnh vẫn còn nhiều bí ẩn`,
                    quote:`"You've come to die! Your world is now my world, like all worlds!"`,
                    link:`http://www.photobig.net/2017/07/dormammu-la-ai-marvel.html`},
                
                    {name:`ZEMO`,
                    realName:`Baron Helmut Zemo`,
                    birth:`1978`,
                    abilities:`Trí tuệ thiên tài, chuyên gia chiến đấu, bậc thầy lừa đảo`,
                    quote:`"The desire to become a superhuman cannot be separated from supremacist ideals."`,
                    link:`https://hosonhanvat.vn/ho-so-nhan-vat-baron-helmut-zemo`},
                
                    {name:`ERIK KILLMONGER`,
                    realName:`N'Jadaka`,
                    birth:`11/1973`,
                    abilities:`Sức mạnh có được từ Tâm Hình Thảo, siêu giác quan, siêu sức mạnh, siêu tốc độ, siêu nhanh nhẹn,...`,
                    quote:`"How do you think your ancestors got these? Do you think they paid a fair price? Or did they take it, like they took everything else?"`,
                    link:`https://hosonhanvat.vn/ho-so-nhan-vat-killmonger`},
                
                    {name:`VULTURE`,
                    realName:`Adrian Toomes`,
                    birth:`??/??/????`,
                    abilities:`Sử dụng bộ giáp để bay và chiến đấu, trị tuệ cơ khí thiên tài`,
                    quote:`"The rich and the powerful, like Stark, they don't care about us. We have to pick up after them. We have to eat their table scraps."`,
                    link:`https://hosonhanvat.vn/ho-so-nhan-vat-vulture`},
                
                    {name:`HELA`,
                    realName:`Hela Odinsdottir`,
                    birth:`??/??/????`,
                    abilities:`Thao tác ma thuật, xuất hồn, cơ thể sinh học của người Asgardian cho phép cô có siêu sức mạnh, ngoài ra sức mạnh sẽ tăng lên khi ở Asgard`,
                    quote:`"Whoever you were, whatever you've done, surrender now or we will show you no mercy."`,
                    link:`https://hosonhanvat.vn/ho-so-nhan-vat-hela-ke-cai-quan-dia-nguc-asgard-la-ai`},
                
                    {name:`THANOS`,
                    realName:`Thanos (The Mad Titan)`,
                    birth:`??/??/????`,
                    abilities:`Cơ thể siêu mạnh, từng có khả năng bất tử, thao túng năng lượng vật chất, sức mạnh tâm linh,....`,
                    quote:`“Dread it Run from it Destiny Arrives all the same.”`,
                    link:`https://hosonhanvat.vn/ho-so-nhan-vat-thanos-ga-titan-dien-ro-muon-huy-diet-mot-nua-vu-tru`},
                    
                    {name:`GHOST`,
                    realName:`Ava Starr`,
                    birth:`??/??/????`,
                    abilities:`Ghost sử dụng bộ đồ của mình để cho phép cô trở nên vô hình, xuyên vật chất và dễ dàng hack được các hệ thống công nghệ cao.`,
                    quote:`"They weaponized me. I stole for them. Spied for them. I killed for them. And in exchange for my soul... they were going to cure me. They lied."`,
                    link:`https://hosonhanvat.net/the-ghost/`}]



let searchInfoHero = document.querySelectorAll('.list-hero div');
let searchInfoVillain = document.querySelectorAll('.list-villain div');                 
searchInfoHero.forEach((element) => {
    element.addEventListener("click", hideInfo)
});
searchInfoVillain.forEach((element) => {
    element.addEventListener("click", hideInfo)
});
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

var x =document.querySelectorAll('.timeline-top > div')

for (let index = 0; index < x.length ; index++) {
    x[index].addEventListener('mouseover', appear)
    function appear() {
    x[index].querySelector('.summary').style.display = 'block'
    }  
    x[index].addEventListener('mouseleave', hidden)
    function hidden() {
    x[index].querySelector('.summary').style.display = 'none'
    }  
}

var y =document.querySelectorAll('.timeline-bot > div')
for (let index = 0; index < y.length ; index++) {
    y[index].addEventListener('mouseover', appear)
    function appear() {
    y[index].querySelector('.summary').style.display = 'block'
    }
    y[index].addEventListener('mouseleave', hidden)
    function hidden() {
    y[index].querySelector('.summary').style.display = 'none'
    }
     }
    
document.querySelector('.timeline-content').scrollTo(100, 0)