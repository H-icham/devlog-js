// you can write js here

console.log('exo-5');
var input = 'etoiles'
var vowels = ['a', 'e', 'i', 'o', 'u', 'y']
var resultArray = []

for(var i=0; i <input.length; i++){
    console.log("le caractere c'est ",input[i]);
    var indexOfVowel = vowels.indexOf(input[i]);

    console.log("son index dans le tableau de voyelle est :",indexOfVowel);
    if (indexOfVowel >= 0){
        resultArray.push(input[i])
    }
}

console.log(resultArray.join('').toUpperCase())



