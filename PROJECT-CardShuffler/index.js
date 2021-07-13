cards = [
    {
        image:"https://ih1.redbubble.net/image.547129995.6989/flat,1000x1000,075,f.jpg",
        value:1,
        status:"closed"
    },

    {
        image:"https://ih1.redbubble.net/image.547129995.6989/flat,1000x1000,075,f.jpg",
        value:1,
        status:"closed"
    },

    {
        image:"https://tse3.mm.bing.net/th?id=OIP.TfDJzxP4qAkAJ1XVIJcNfgHaHa&pid=Api&P=0&w=300&h=300",
        value:2,
        status:"closed"
    },

    {
        image:"https://tse3.mm.bing.net/th?id=OIP.TfDJzxP4qAkAJ1XVIJcNfgHaHa&pid=Api&P=0&w=300&h=300",
        value:2,
        status:"closed"
    },

    {
        image:"http://purepng.com/public/uploads/large/purepng.com-jerry-tom-and-jerrytom-and-jerrytomjerryanimated-seriesin-1940characters-1701528659592kaxzs.png",
        value:3,
        status:"closed"
    },

    {
        image:"http://purepng.com/public/uploads/large/purepng.com-jerry-tom-and-jerrytom-and-jerrytomjerryanimated-seriesin-1940characters-1701528659592kaxzs.png",
        value:3,
        status:"closed"
    },

    {
        image:"https://tse4.mm.bing.net/th?id=OIP.I1T6je68zYji_dLa5lq7dwHaJO&pid=Api&P=0&w=300&h=300",
        value:4,
        status:"closed"
    },

    {
        image:"https://tse4.mm.bing.net/th?id=OIP.I1T6je68zYji_dLa5lq7dwHaJO&pid=Api&P=0&w=300&h=300",
        value:4,
        status:"closed"
    },

]


 let cardCopy = "cards"


 //------shuffling-------

 let temp;
for(let i=cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}



function displayCards(data){

    let cardsString="";

    

    data.forEach(function(card,index){
        cardsString+=`
            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCard(${index})">
                </div>
            </div>
        `;
    });


    document.getElementById('cards').innerHTML=cardsString;

}


displayCards(cards);

let cardCount=1;
let val1=null,val2=null;
let score=0;
function openCard(index){

    console.log(cards);

    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;

            // reste after one guess 
            val1=null;
            val2=null;
            cardCount=1;

        }
        else{

            alert("game over");
            location.reload();

        }

        
    }

    displayCards(cards);

}