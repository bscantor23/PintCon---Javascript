let board = document.querySelector("#board");


for(let i=0;i<12;i++){
    let addCard =
    `<div id='card-${i}' class='card-board'>
        <div class='front-space'>
            <img src='img/icon-default.jpg' class='icon-card'>
        </div>
        <div class='further-space'>
        </div>
    </div>`
    board.innerHTML += addCard;
    let card = document.querySelector("#card-"+i);
    console.log(card);
    card.setAttribute(`style`,`grid-area:card-${i}`);
}

