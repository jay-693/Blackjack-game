let player={
   first:"per: ",
   second:200
}
let Cards=[]
let sum=0
let hasBlackJack=false
let alive=false
let message=document.querySelector("#play")
let cardEl=document.getElementById("card-el")
let sumEl=document.getElementById("sum-el")
let playerEl=document.getElementById("money")
playerEl.textContent=player.first+"$"+player.second
function startgame() {
  alive=true
  let firstCard=getValue()
  let secondCard=getValue()
  sum=firstCard+secondCard
  Cards=[firstCard,secondCard]
  rendergame()
}
function getValue() {
    let randomNum=Math.floor(Math.random()*13)+1
    if(randomNum>10){
      return 10
    }
    else if(randomNum===1){
      return 11
    }
    else{
      return randomNum
    }
}
function rendergame() {
     cardEl.textContent="Cards: "
     for(let i=0;i<Cards.length;i++){
       cardEl.textContent+=Cards[i]+" "
     }
     sumEl.textContent="Sum:"+sum
     if(sum<=20){
       message.innerText="Do you want to draw a card?"
     }
     else if(sum===21){
       message.innerText="oh,you've got a blackjack"
       hasBlackJack=true
     }
     else {
       message.innerText="you are out of game"
       alive=false
     }
}
function newgame(){
  if(alive===true && hasBlackJack===false)
  {
  let card=getValue()
  Cards.push(card)
   sum+=card
   rendergame()
 }
}
