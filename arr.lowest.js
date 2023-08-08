function minInArray(number){
    let lowest =number[0];
    for(let i = 0; i<number.length; i++){
        const index =i;
        const element=number[index];
        if(element < lowest){
            lowest=element;
        }
    }
    return lowest;
}

const lowest=[123,422,555,233,122,789]
const smallest=minInArray(lowest);
console.log('smallest person is:',smallest)