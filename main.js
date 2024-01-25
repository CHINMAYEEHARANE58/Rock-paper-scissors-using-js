
let yourHand = document.getElementById("yourHand")
let compHand = document.getElementById("compHand")

let rockbtn = document.getElementById("rockbtn")
let paperbtn = document.getElementById("paperbtn")
let scissorsbtn = document.getElementById("scissorsbtn")

let userScore = document.getElementById("player1")
let compScore = document.getElementById("player2")

let gameOver = document.getElementById("gameOver")
let result = document.getElementById("result")

let playAgain = document.getElementById("playAgain")

let yourScoree = 0
let computerScore = 0

let rock = './assets/rock-hand.png'
let paper = './assets/paper-hand.png'
let scissor = './assets/scissors-hand.png'

let random = [rock,paper,scissor]
let user;
let computer;

function compHand1(){
    let randomHand = random[Math.floor(Math.random()*random.length)];
    compHand.src= randomHand
    compHand.style.width = "80%"
    computer = randomHand
}

rockbtn.onclick =()=>{
    yourHand.src = rock;
    yourHand.style.width = "80%"
    user = rock
    compHand1()
    Compare()
    console.log("heoo")
}

paperbtn.onclick =()=>{
    yourHand.src = paper;
    yourHand.style.width = "80%"
    user = paper
    compHand1()
    Compare()
}

scissorsbtn.onclick=()=>{
    yourHand.src = scissor;
    yourHand.style.width = "80%"
    user = scissor
    compHand1()
    Compare()
}

function Compare(){
    if(user == rock && computer== scissor){
        yourScoree++;
    }
    else if(user==rock && computer== paper ){
        computerScore++
        
    }

    if(user==paper && computer== rock ){
        yourScoree++
        
    }
    else if(user==paper && computer== scissor ){
        computerScore++
     
    }

    if(user==scissor && computer== paper ){
        yourScoree++
       
    }
    else if(user==scissor && computer== rock ){
        computerScore++
        
    }

    userScore.innerHTML = yourScoree
    compScore.innerHTML = computerScore

    if(yourScoree == 5){
        gameOver.style.display = 'block'
        result.innerHTML = 'You won the game'
        location.href = "#gameOver"
    }
    else if(computerScore == 5){
        gameOver.style.display = 'block'
        result.innerHTML = 'Computer won the game'
        location.href = "#gameOver"
    }

}

playAgain.onclick=()=>{
    location.reload()
}