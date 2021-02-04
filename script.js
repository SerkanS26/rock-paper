
let computerChosen;
let userChosen;
let result; //result()
let displayResult = document.getElementById("gameResult");
let computerChoice = document.getElementById("computer-choice");
//let randomNumber = Math.round(Math.random() * (3));
let userChoice = document.getElementById("user-choice");
let buttons = document.querySelectorAll(".choices");

//get user choice
buttons.forEach(button => button.addEventListener("click", (event) =>{
  userChosen = event.target.id;
  generateComputerChoice()
  results()
  userChoice.innerHTML = userChosen
  computerChoice.innerHTML = computerChosen
  displayResult.innerHTML = result

}))

// get a random computer choices
function generateComputerChoice(){
  let randomNumber = Math.round(Math.random() *(4));
  if (randomNumber === 0 ){  //|| randomNumber === 0
    return computerChosen = "rock"
  }else if (randomNumber === 1){
    return  computerChosen = "paper"
  }else if (randomNumber === 2){
    return computerChosen = "scissors"
  }else if (randomNumber === 3){
    return computerChosen = "lizard"
  }else if (randomNumber === 4){
    return computerChosen = "spock"
  }else{
    return computerChosen = "Computer chosen: ERROR!"
  }
}
// console.log(generateComputerChoice())

// get results
function results(){
  // let result = "";
  if(computerChosen === userChosen){
    result = "It's a Tie!"
    document.getElementById("gameResult").style.color = "coral";
    return  result
  }else if(userChosen=== "rock" && (computerChosen === "scissors" || computerChosen === "lizard")) { //ok
    result = "You Win!"
    document.getElementById("gameResult").style.color = "darkgreen";
    return result
  }else if(computerChosen === "rock" && (userChosen === "scissors" || userChosen === "lizard")) {
    result = "You Lost!"
    document.getElementById("gameResult").style.color = "red";
    return result
  }else if (userChosen === "scissors" && (computerChosen === "paper"|| computerChosen === "lizard")) {
    result = "You Win!"
    document.getElementById("gameResult").style.color = "darkgreen";
    return result
  }else if(computerChosen === "scissors" && (userChosen === "paper" || userChosen === "lizard")){
    result = "You Lost!"
    document.getElementById("gameResult").style.color = "red";
    return result
  }else if (userChosen === "spock" && (computerChosen === "rock"|| computerChosen === "scissors")) {
    result = "You Win!"
    document.getElementById("gameResult").style.color = "darkgreen";
    return result
  }else if(computerChosen === "spock" && (userChosen === "rock" || userChosen === "scissors")) {
    result = "You Lost!"
    document.getElementById("gameResult").style.color = "red";
    return result
  }else if (userChosen === "lizard" && (computerChosen === "paper" || computerChosen === "spock")) {
    result = "You Win!"
    document.getElementById("gameResult").style.color = "darkgreen";
    return result
  }else if(computerChosen === "lizard" && (userChosen === "paper" || userChosen === "spock")) {
    result = "You Lost!"
    document.getElementById("gameResult").style.color = "red";
    return result
  }else if (userChosen === "paper" && (computerChosen === "spock" || computerChosen === "rock")) {
    result = "You Win!"
    document.getElementById("gameResult").style.color = "darkgreen";
    return result
  }else if(computerChosen === "paper" && (userChosen === "spock" || userChosen === "rock")) {
    result = "You Lost!"
    document.getElementById("gameResult").style.color = "red";
    return result
    }
    // displayResult.innerHTML = result
}
