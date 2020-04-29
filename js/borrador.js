class Carta {

    constructor(idCard, idImgCard){

        this.idCard = idCard;
        this.idImgCard = idImgCard;
        this.isRotate = false;

        this.query = document.querySelector("#card-"+idCard);
        this.further = this.query.querySelector(".further-space");
        this.img = this.query.querySelector("img");

        this.further.style.backgroundImage=`url('./img/cards/img_${idImgCard}.jpg')`;
        
        this.query.addEventListener("click", function(){
            if(!this.isRotate){
                this.query.classList.toggle("rotate");
                this.isRotate = true;
                couples();
            }
        });
    
        this.query.addEventListener("mouseover", function(){
            this.img.src="img/icon-selected.jpg";
        });
    
        this.query.addEventListener("mouseout", function(){
            this.img.src="img/icon-default.jpg";
        });
    }

    eventRotate(){
        let card = document.querySelector("#card-"+idCard);
        card.classList.toggle("rotate");
    }



}