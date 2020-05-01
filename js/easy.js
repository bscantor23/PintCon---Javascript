
const LogicInstance = new ControladorLogica();
let score = document.querySelector("#score");

const imgCards = LogicInstance.getCartas(1);
let numberScore = 0;

let cardObjects = new Array(12);
let qualityCouple = 0;

for(let i=0;i<12;i++){
    cardObjects[i] = new Carta(i,imgCards[i]);
    cardObjects[i].addEvents();
}

function eventScore(cont){
    score.textContent="Score: "+ numberScore+" points" ;
    score.classList.toggle("score-transition-1");
    setTimeout(() => {
        score.classList.toggle("score-transition-2");
    }, 600);

    setTimeout(() => {
        if(!cont){
            this.eventScore(true);
        }
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
            countCards = 0;
            if(coupleCards[0].getIdImgCard() != coupleCards[1].getIdImgCard()){
                setTimeout(() => {
                    coupleCards[0].eventRotate();
                    coupleCards[1].eventRotate();
                }, 800);
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
                            numberScore = 0;
                            eventScore();
                            cardObjects[i].eventFind();
                            cardObjects[i].eventRotate();
                        }, 3000);
                    }
                }
            }   
        }
}



