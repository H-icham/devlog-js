// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];
console.log(secretMessage)


let last = secretMessage.pop();
console.log(secretMessage)

let newLength = secretMessage.push('to', 'program');
console.log(secretMessage)

let change = secretMessage[6] = 'right';
console.log(secretMessage)


let first = secretMessage.shift();
console.log(secretMessage)

let debuttabl = secretMessage.unshift('Programming')
console.log(secretMessage)

let pos = 5, n = 4;
let removedItems = secretMessage.splice(pos, n);
let changes = secretMessage[5] = 'know';
console.log(secretMessage)

let secret = secretMessage.join()
console.log(secret)

