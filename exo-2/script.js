// you can write js here
console.log('exo-2');
const myDate = new Date(); //jour de la semaine

var isTesting = true;


if(isTesting){
    var rld = prompt("Rentrer la date"); 
    var rlh = prompt("Rentrer l'heure"); 
       
    
 }else{
    var rld = myDate.getDay(); 
    var rlh = myDate.getHours(); 
    
 }



// 1

var semaine = 'jour de la semaine'
var weekend = 'jour de week-end'


//2
//var today = myDate.getDay();
console.log(rld);
if(rld == 1){
    console.log('pas du tout');
} else if(rld == 2){
       console.log('pas encore');
} else if(rld == 3 || rld== 4){
        console.log('presque');
    }

else {
       console.log('cest le weekend')}  

if (rld>0 && rld<6){
    console.log('jour de la semaine')}
    else { 
        console.log('jour de week-end')
    }
    
    //3
    var rlh = myDate.getHours();
    if(rld = 5 && rlh>17){
        console.log('jour de week-end')}

     //4
     if(rld = 1 && rlh<9){
        console.log('jour de week-end')
     }

     





   
        

       
        
        
        
        
        
        
        
        