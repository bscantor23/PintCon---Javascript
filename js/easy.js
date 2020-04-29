
const LogicInstance = new ControladorLogica();
const imgCards = LogicInstance.getCartas(1);

let cardObjects = new Array(12);

let coupleCards = new Array(2);
let countCards = 0;

//console.log(imgCards);

for(let i=0;i<12;i++){
    cardObjects[i] = new Carta(i,imgCards[i]);
}
console.log(cardObjects[0].isRotate);

function couples(){
    for(let i=0;i<12;i++){
        console.log("prueba1");
        console.log(cardObjects);
        if(cardObjects[i].isRotate == true){
            console.log("prueba2");
            idCards.push(cardObjects[i]);
            countCards=+1;
        }
    }
    if(countCards == 2){
        console.log("prueba");
        if(coupleCards[0].idCard != coupleCards[1].idCard){
            coupleCards[0].eventRotate();
            coupleCards[1].eventRotate();
        }else{
            console.log("pareja encontrada");
        }
        idCards = null;
    }
}



