const username='blackPink';
const userInput='blackPinK';
console.log(username.toLowerCase());
console.log(userInput.toLowerCase());
console.log(username.toUpperCase());

if(username.toLowerCase() === userInput.toLowerCase()){
    console.log('valid user');
}
else{
    console.log('invalid user');
}