testScores = {
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nada: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

//Prints only the keys
// for(let person in testScores)
// {
//     console.log(person);
// }


// for(let person in testScores)
// {
//     console.log(`${person} scored ${testScores[person]}`);
// }

console.log(Object.keys(testScores));  //returns an array containing all the keys

console.log(Object.values(testScores));  //returns an array containing all the values

console.log(Object.entries(testScores));//returns an array containing all the key value pairs


let sum = 0;
for(let scores of Object.values(testScores))
{
    console.log(scores);
    sum+=scores;

}
console.log(`Total is ${sum}`);
console.log(`Average of marks is ${sum/Object.values(testScores).length}`);  //can store it before hand as an array