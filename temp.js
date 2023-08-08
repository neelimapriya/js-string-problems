// swap

let first = 5;
let second = 7;
console.log(first,second)

// value er jayga poriborton
const temp = first;
first = second;
second= temp;
console.log(first,second)  // 7 5


// 2nd method ---(destructuring)
[first,second]=[second,first];
console.log(first,second)