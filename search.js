const lyrics='Oo aasma mila zameen ko meri Aadhe aadhe poore hain hum Tere naam pe meri zindagi Likh di mere humdum';
// const doesExist= lyrics.includes('aasma')
const doesExist= lyrics.includes('Aasma')
console.log(doesExist)

// indexOf
console.log(lyrics.indexOf('hain'));

if(lyrics.indexOf('Mere') !== -1){
    console.log('exist inside the string')
}
else{
    console.log('cannot find it')
}

// startsWith
console.log(lyrics.startsWith('Oo'))


// endsWith

const fileName='mybiodata.pdf';
const otherFile='mypic.png';
console.log(fileName.endsWith('.pdf'))
