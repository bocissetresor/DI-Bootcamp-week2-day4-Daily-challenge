// red,blue,orange,white,gray,purple

//Daily Challenge: Words In The Stars
// 1. Prompt the user for several words (separated by commas).
// 2. Put the words into an array.
// 3. Console.log the words one per line, in a rectangular frame as seen below.
// 4. Check out the Hints and Requirements below.
let phrase = prompt("Saisir l'ensemble des mots :");
// recuperation du separateur 
let separateur = phrase.split(" ");
let Mot = '';
let MaxTail = 0;

separateur.forEach((cmp)=>{
    if(MaxTail < cmp.length){
        MaxTail = cmp.length
    }
});

MaxTail_2 = MaxTail + 4;
Mot +=   "*".repeat(MaxTail_2);
Mot += "\n";
let space = '';

for(let index=0; index < separateur.length; index++){
    let Space = MaxTail_2 - separateur[index].length - 3 ;
    space = ' '.repeat(Space)
    Mot +=  "* " + separateur[index] + space + "* \n";
}

Mot = Mot + "*".repeat(MaxTail_2);
console.log(Mot);