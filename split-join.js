const lyrics= 'Oo aasma mila zameen ko meri. Aadhe aadhe poore hain hum. Tere naam pe meri zindagi. Likh di mere humdum';
// words alada kore
const parts=lyrics.split(' ')
console.log(parts)

// sentence alada kore
const sentence=lyrics.split('.')
console.log(sentence)



// character alada kore
const char =lyrics.split('')
console.log(char)



// slice kora
const partial=lyrics.slice(9,13)
console.log(partial)

// subString
const partial2= lyrics.substring(9,13)
console.log(partial2)


const line=[
    'Oo aasma mila zameen ko meri',
    ' Aadhe aadhe poore hain hum',
    ' Tere naam pe meri zindagi',
    ' Likh di mere humdum'
];

  const newSong =line.join('/ ')
  console.log(newSong)