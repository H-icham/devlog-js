<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>

        <h1>Exercice 0</h1>

        <script type="text/javascript">

        /* Section 1 */   

        var name = "Joe"; //je déclare une variable nommée name qui prend pour valeur Joe.
        var city = 'London'; //je déclare une variable nommée city qui prend pour valeur London.
        var age = 32; //je déclare une variable nommée age qui prend pour valeur l'entier 32.
        var isRed = true; //je déclare une variable nommée isRed qui prend pour valeur true.
        var isOld = age > 80; //je déclare une variable nommée ais0ld qui prend pour valeur age > 80.

        //je déclare une variable nommée previousJobs qui prend pour valeur ['lawyer', 'developper', 'Professionnal climber'].
        var previousJobs = ['lawyer', 'developper', 'Professionnal climber']; 

        function info(height, weight) { //je déclare une fonction nommé info et qui prend pour paramètre (height, weight) 
            if (height > 180) { // si height est supérieur à 180 
                console.log('Vous êtes grand'); // afficher dans la console 'Vous êtes grand'
            }
            if (weight < 0) { // si weight est inférieur à 0
                console.log('oups, there is a problem'); // afficher dans la console 'oups, there is a problem'
            } else if ( weight < 15) { // sinon si weight est inférieur à 15
                console.log('Are you that slim ?') // afficher dans la console 'Are you that slim ?'
            } else { // sinon
                console.log('Good !') // afficher dans la console 'Good !'
            }
        }

        info(165, 45); // je fais un appel de ma fonction info avec comme valeur (165, 45)

        var myHeight = 175; //je déclare une variable nommée myWeight qui prend pour valeur 175.
        var myWeight = 86; //je déclare une variable nommée myWeight qui prend pour valeur 86.

        info(myHeight, myWeight); // je fais un appel de ma fonction info avec comme valeur (myHeight, myWeight)

        info(myHeight + 15, myWeight - 100); // je fais un appel de ma fonction info avec comme valeur (myHeight + 15, myWeight - 100)

        function toUpper(variable) { //je déclare une fonction nommé toUpper et qui prend pour paramètre (variable)
            return variable.toUpperCase(); // retourner variable.toUpperCase()
        }

        var upperName = toUpper(name); //je déclare une variable nommée upperName qui prend pour valeur toUpper(name).

        for (i = 0; i < 3; i = i + 1) { // je déclate une boucle for avec comme paramèrtre (i = 0; i < 3; i = i + 1)
            console.log(previousJobs[i]); // afficher dans la console (previousJobs[i])
        }

        /* Section 2: */

        // afficher la ville dans laquele Joe vit. 
        var city = 'London'; 
        console.log('London');   

        // afficher si Joe est roux ou pas.
        var isRed = true;
        console.log('true'); 

        /* Section 3 */

         console.log(myVariable);
         // la variable (myVariable) n'est pas déclaré, ducoup sa met une erreur

        </script>

    </body>
</html>
