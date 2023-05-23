let maximum = parseInt(prompt("Enter the Maximum Number"));
while(!maximum)  //NaN is falsy
{
  let maximum = parseInt(prompt("Enter a VALID Maximum Number"));
}

let randomInteger = Math.floor(Math.random() * (maximum - 1 + 1)) + 1;   //(max-min+1) + min

let guess = prompt("Guess a Number (Type 'q' to quit the game)");  //all inputs are in the form of string
let count = 1;

while(true)
{
    if(guess==='q')
    {
      console.log("Okay Quitting");
      break;
    }
    if(isNaN(parseInt(guess)))
    {
      guess = prompt("Guess a Number only");
    }
    else if(parseInt(guess) < randomInteger)
    {
      guess = prompt("Guess a Number Higher (Type 'q' to quit the game)");
      
    }  
    else if(parseInt(guess) > randomInteger)
    {
      guess = prompt("Guess a Number Lower (Type 'q' to quit the game)");
      count++;
    }
        
    else if(parseInt(guess) === randomInteger)
    {
        console.log(`You guessed it correctly in ${count} Guesses`);
        break;
    }
    
}


