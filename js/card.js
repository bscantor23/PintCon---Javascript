class Carta {

    constructor(idCard, idImgCard){

        this.idCard = idCard;
        this.idImgCard = idImgCard;
        this.isRotate = false;

        
        let card = document.querySelector("#card-"+idCard);

        let further = card.querySelector(".further-space");
    
        further.style.backgroundImage=`url('./img/cards/img_${idImgCard}.jpg')`;
        
        let img = card.querySelector("img");
        
        card.addEventListener("click", function(){
            if(!this.isRotate){
                card.classList.toggle("rotate");
                this.isRotate = true;
                couples();
            }
        });
    
        card.addEventListener("mouseover", function(){
            img.src="img/icon-selected.jpg";
        });
    
        card.addEventListener("mouseout", function(){
            img.src="img/icon-default.jpg";
        });
    }

    eventRotate(){
        let card = document.querySelector("#card-"+idCard);
        card.classList.toggle("rotate");
    }



}