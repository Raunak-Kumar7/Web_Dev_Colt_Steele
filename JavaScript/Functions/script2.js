//Showing Factory Function

function isBetween(min,max)
{
    return function(num)
    {
        return num>=min && num<=max;
    };
}



//all these are functions
const isChild = isBetween(0,18);
const isAdult = isBetween(19,64);
const isSenior = isBetween(65,120);


console.log(isChild(14));  //true
console.log(isAdult(30));  //true
console.log(isSenior(33));  //false