function reverseWord(str){
    const words= str.split(' ');
    const result =[];
    // [ 'i', 'am', 'a', 'girl' ]
    for (let i=words.length-1; i>=0; i--){
        const element=words[i];
        result.push(element);
      
    }
    const reversed=result.join(' ');
    return reversed;
}

const myString='i am a girl';
const res=reverseWord(myString);

console.log(res);