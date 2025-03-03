// LOGIC
let humanScore = 0
let computerScore = 0
let choices = ['rock', 'paper', 'scissors']

const computerChoice = () => choices[Math.floor(Math.random() * choices.length)]

const playRound = (humanChoice, computerChoice) => {
    if (humanChoice == computerChoice) {
        return `It's a tie! The computer chose ${computerChoice} and the human chose ${humanChoice}. The computer has won ${computerScore} rounds and the human has won ${humanScore} rounds.`

    } else if (
        (humanChoice == 'rock' && computerChoice == 'scissors') ||
        (humanChoice == 'paper' && computerChoice == 'rock') ||
        (humanChoice == 'scissors' && computerChoice == 'paper') 
    ){
        humanScore++
        return `Human won! The computer chose ${computerChoice} and the human chose ${humanChoice}. The computer has won ${computerScore} round${computerScore == 1 ? '': `s`} and the human has won ${humanScore} round${humanScore == 1 ? '': `s`}.`

    } else {
        computerScore++
        return `Computer won! The computer chose ${computerChoice} and the human chose ${humanChoice}. The computer has won ${computerScore} round${computerScore == 1 ? '': `s`} and the human has won ${humanScore} round${humanScore == 1 ? '': `s`}.`
    }    
}

// UI
let buttons = document.querySelectorAll(".btn")
let score = document.querySelector(".score")

const updateUI = result => {
    score.textContent = `${result}`
    if(humanScore == 5 || computerScore == 5) {
        buttons.forEach(button => button.disabled = true) 
}}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const hChoice = button.textContent.toLowerCase()
        const cChoice = computerChoice()
        const result = playRound(hChoice, cChoice)
        updateUI(result)
        })})