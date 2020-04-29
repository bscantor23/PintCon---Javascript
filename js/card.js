class Carta {

    constructor(idCard, idImgCard){

        this.idCard = idCard;
        this.idImgCard = idImgCard;

        this.query = document.querySelector("#card-"+idCard); 
        this.img = this.query.querySelector("img");
    }

    getQuery(){
        return this.query;
    }

    getIdImgCard(){
        return this.idImgCard;
    }

    addEvents(){

        const further = this.query.querySelector(".further-space");
        further.style.backgroundImage=`url('./img/cards/img_${this.idImgCard}.jpg')`;

        const img = this.query.querySelector("img");
        const card = this.query;
        

        this.query.addEventListener("click", function(){
            if(!card.classList.contains("rotate")){
                card.classList.toggle("rotate");
                
            }
        });
    
        this.query.addEventListener("mouseover", function(){
            img.src="img/icon-selected.jpg";
        });
    
        this.query.addEventListener("mouseout", function(){
            img.src="img/icon-default.jpg";
        });

        further.addEventListener("mouseout", function(){
            couples();
        });
    }

    eventRotate(){
        let card = this.query;
        card.classList.toggle("rotate");
    }

    eventFind(){
        let card = this.query;
        card.classList.toggle("find");
    }



}