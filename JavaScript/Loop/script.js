const pass = "BabyHippo";

guess = prompt("Enter Password");
while(guess!==pass)
{
    guess = prompt("Enter Password");
}
console.log("You got it right");