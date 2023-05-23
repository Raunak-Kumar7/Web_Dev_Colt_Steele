if (false) {
  console.log('false is truthy');
} else {
  console.log('false is falsy');
}

if (0) {
  console.log('0 is truthy');
} else {
  console.log('0 is falsy');
}

if ('') {
  console.log('Empty string is truthy');
} else {
  console.log('Empty string is falsy');
}

if (null) {
  console.log('null is truthy');
} else {
  console.log('null is falsy');
}

if (undefined) {
  console.log('undefined is truthy');
} else {
  console.log('undefined is falsy');
}

if (NaN) {
  console.log('NaN is truthy');
} else {
  console.log('NaN is falsy');
}


const userInput = prompt("Check Falsy");
if(userInput!='') //We can not only do if(userInput) becuase output of prompt is alwyas a string which is not falsy
{
    console.log("It is truthy");
} 
else //dont enter anything directly ok button
{
  console.log("It is falsy");
}
    


