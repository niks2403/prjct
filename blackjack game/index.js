
let player = {
     name : "Nikhil",
     chips : 150
}
let cards = []
let sum = 0
let msgs = ""
let msgel=document.getElementById("msg-el")
let sumel = document.getElementById ("sum-el")
let cardel = document.getElementById ("card-el")
let isalive = false
let hasblackjack = false
let playerel = document.getElementById("player-el")

playerel.textContent = player.name + ": $" + player.chips

function randomcard()
{
  let card= Math.floor( Math.random()*13)+1
  if(card>10)
  {
    return 10
  }
  else if(card===1)
  {
    return 11
  }
  else
  {
  return card
  }
}

function startgame()
{   isalive=true
    let card1= randomcard()
    let card2= randomcard()
    cards = [card1,card2]
    sum = card1 + card2
    rendergame()
}

function rendergame()
{  
    cardel.textContent = "Cards: " 

    for(let i=0 ; i < cards.length ; i++)
    {
        cardel.textContent+=cards[i]+ " "
    }
    
    sumel.textContent = "Sum: "+ sum

    if(sum<21)
    {
        msgs="Do you want to draw a new card? 😊"
        isalive = true
    
    }

    else if(sum==21)
    {
        msgs=" You have got blackjack! 🥳"
        hasblackjack=true
    }

    else
    {
        msgs=" You are out of the game! 🙁"
        isalive=false
    }

    msgel.textContent = msgs


}

function newcard()
{
    if(isalive===true && hasblackjack ===false )
    {
    let card3 =  randomcard()
    sum += card3
    cards.push(card3)
    rendergame()
    }
}
