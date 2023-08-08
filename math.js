 const result= Math.pow(3,8); //3 to the power 8
 console.log(result)

//  parthokko ber korte
 const num1 = 25;
 const num2 =45;

 const gap= Math.abs(num1 - num2);
 console.log(gap);
 if( gap>5 ){
    console.log('you guys can be friend')
 }
 else{
    console.log('you guys cannot be friend')
 }


//  ---------------
const number = 2.974395705;
const fullNumber = Math.round(number)
console.log(fullNumber)

// uporer number neyar jonno
const result2 = Math.ceil(2.44434);
console.log(result2)

// just integer number neyar jonno
const result3 = Math.floor(232.456);
console.log(result3)


// -------------
// random
console.log(Math.random())

// kono specific number exp 0-6
const random =Math.round(Math.random()*6)
console.log(random)

// ekta random number ber ber pawar jonno
for(let i =0; i<20; i++){
    const random=Math.round(Math.random()*6)
    console.log(random)
}