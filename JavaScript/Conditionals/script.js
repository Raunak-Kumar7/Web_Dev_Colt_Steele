//these will appear in the console of webpage
//Can refresh and see both cases
let random = Math.random();
if(random < 0.5)
{
    console.log("Your number is less than 0.5");
    console.log(random);
}
else
{
    console.log("Your number is greater than 0.5");
    console.log(random);
}


// const dayOfWeek = prompt("Enter Day of a week").toLowerCase();
// if(dayOfWeek==='monday')
// {
//     console.log("I hate Mondays!!!");
// }
// else if(dayOfWeek==='saturday')
// {
//     console.log("I love Saturdays");
// }
// else
// {
//     console.log("MEH")
// }



//Nested Conditionals

//1. Pw must be of length >6
//2. Pw must not contain any space

const password = prompt("Enter a password");

if(password.length > 6)
{
    if(password.indexOf(' ')===-1)
    {
        console.log("Valid Password");
    }
    else
    {
        console.log("No spaces allowed");
    }
}
else{
    console.log("Password length must be greater than 6");
}
