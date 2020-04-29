
const LogicInstance = new ControladorLogica();
const imgCards = LogicInstance.getCartas(1);

let score = document.querySelector("#score");
let numberScore = 0;

let cardObjects = new Array(12);
let qualityCouple = 0;

for(let i=0;i<12;i++){
    cardObjects[i] = new Carta(i,imgCards[i]);
    cardObjects[i].addEvents();
}

function eventScore(){
    score.textContent="Score: "+ numberScore+" points" ;
    score.classList.toggle("score-transition-1");
    setTimeout(() => {
        score.classList.toggle("score-transition-2");
    }, 600);
}

function couples(){

        let coupleCards = new Array();
        let countCards = 0;

        for(let i=0;i<12;i++){
            if(cardObjects[i].getQuery().classList.contains("rotate") && cardObjects[i].getQuery().classList.contains("find") == false){
                coupleCards.push(cardObjects[i]);
                countCards++;
            }
        }
    
        if(countCards == 2){
            if(coupleCards[0].getIdImgCard() != coupleCards[1].getIdImgCard()){
                coupleCards[0].eventRotate();
                coupleCards[1].eventRotate();
            }else{
                coupleCards[0].eventFind();
                coupleCards[1].eventFind();
                qualityCouple++;
                numberScore=numberScore+50;


                    eventScore();


                if(qualityCouple == 6){
                    qualityCouple = 0;
                    for(let i=0;i<12;i++){
                        setTimeout(() => {
                            cardObjects[i].eventFind();
                            cardObjects[i].eventRotate();
                           
                        }, 500);
                    }
                }
            }   
        }
        countCards = 0;
}



