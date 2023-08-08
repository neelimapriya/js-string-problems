function reverseString(text){
    let reversed ='';
    for(let i=text.length-1; i >=0; i--){
        const element= text[i];
        //elements gulo add korte
        reversed= reversed+ element;
        console.log(element, reversed)
    }
    return reversed;
}
const myString = 'i am a good girl';
const reversed = reverseString(myString);
console.log('reversed output:',reversed)