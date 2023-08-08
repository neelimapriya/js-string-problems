function maxInArray(number){
    let largest =number[0];
    for(let i = 0; i<number.length; i++){
        const index =i;
        const element=number[index];
        if(element > largest){
            largest=element;
        }
    }
    return largest;
}

const heights=[123,422,555,233,123,789]
const tallest=maxInArray(heights);
console.log('tallest person in:',tallest)