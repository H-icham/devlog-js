// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 

console.log(joeInfo.cars)

joeInfo.bathrooms = 1
console.log(joeInfo)

joeInfo.garage = true
console.log(joeInfo)


var team = {
players: [{firstName: "Karim",
          lastName:"Benzema",
          age: 35}],


games: [{opponent: "RealMadrid",
        teamPoints: 42,
        opponentPoints: 27}],

//methode
 addPlayer(firstName, lastName, age){
    return this.players.push({
        firstName,
        lastName,
        age,
    })
},

addGame(opponent, teamPoints, opponentPoints){
    return this.games.push({
        opponent,
        teamPoints,
        opponentPoints,
    })
}

}

team.addPlayer("hicham","asdg",24);
console.log(team);

team.addGame("Bayern",72,24);
console.log(team);

function myPoint(){
    var teamPoints = 0;
    for(var i=0; i <team.games.length; i++){
       teamPoints = teamPoints + team.games[i].teamPoints 
    }
    return teamPoints;
}
console.log(myPoint());

function moyenne(){
    var opponentPoints = 0;
    for(var i=0; i <team.games.length; i++){
       opponentPoints = opponentPoints + team.games[i].opponentPoints
    }
    return opponentPoints/team.games.length;
}

console.log(moyenne());



function ageMax(){
    var agePlayer = 0;
for ( let i =0; i<team.players.length -1; i++ ){
    if (team.players[i].age > team.players[i+1].age){ 
        agePlayer = team.players[i];
    } else{
        agePlayer = team.players[i+1];
    }
        
}    
return agePlayer; 
}

ageMax();
console.log(ageMax());