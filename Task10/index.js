const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
  
    if (
      userInput === 'rock' ||
      userInput === 'paper' ||
      userInput === 'scissors' ||
      userInput === 'bomb' 
    ) {
      return userInput;
    } else {
      console.log('Error: Please choose "rock", "paper", or "scissors".');
    }
  };
  
 
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      return 'rock';
    } else if (randomNumber === 1) {
      return 'paper';
    } else {
      return 'scissors';
    }
  };
  
  
  const determineWinner = (userChoice, computerChoice) => {
   
    if (userChoice === 'bomb') {
      return 'You used the secret cheat code! You win!';
    }
  
    
    if (userChoice === computerChoice) {
      return 'The game is a tie!';
    }
  
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer won!';
      } else {
        return 'You won!';
      }
    }
  
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer won!';
      } else {
        return 'You won!';
      }
    }
  
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer won!';
      } else {
        return 'You won!';
      }
    }
  };
  
  
  const playGame = () => {
    const userChoice = getUserChoice('rock'); 
    if (!userChoice) return; 
  
    const computerChoice = getComputerChoice();
  
    console.log(`You chose: ${userChoice}`);
    console.log(`The computer chose: ${computerChoice}`);
  
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();
  