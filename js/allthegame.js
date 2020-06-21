export { VALUES ,TYPES, compare } 


const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const TYPES = ['h', 'd', 'c', 's'];
const VALUE_LABELS = 
  ["two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king", "ace"]
const TYPE_LABELS = ["hearts","diamonds","clubs","spades"];


const CARRE = {value: 7 , name: ' avec un carré'}
const FULL = {value: 6 , name: ' avec un Full'}
const FLUSH = {value: 5 , name: ' avec un flush'}
const BRELAN = {value: 4, name: ' avec un brelan'}
const TWOPAIRS ={value: 3, name: ' avec 2 pairs'}
const ONEPAIR = { value: 2, name: ' avec one pair'}
const ORDERCARDS = {value: 1, name: ' avec la hauteur'}

const reducer = (accumulator, currentValue) => accumulator + currentValue;




Array.prototype.shuffle = function ()  {
    let ary = this; // tableau utilisé ulterieurent quand on appelle la fonction
    let shuffled = []; // melange au depart tableau vide
  
    while(ary.length > 0) {
      let i = Math.floor(Math.random() * ary.length)// ary.length = Math.floor(max)
  
      shuffled.push(ary[i]) // choix des cartes une par une 
      ary.splice(i, 1) //puis on la retire du tableau pour rendre le choix unique
    }
  
    return shuffled // on retourne 
  }
function compare(hand1,hand2){


  

   if((analyseDuJeu(hand1).value) > (analyseDuJeu(hand2).value)){
       return 'HERO gagne'  +  analyseDuJeu(hand1).name  
       
   }else {return 'VILAIN gagne' + analyseDuJeu(hand2).name 
   }  
}
  //mise en place du random (shuffle) sur 7 cartes avec association des 2 tableaux (type et values)
     //let hand = VALUES.flatMap(v => TYPES.map(t => v+t)).shuffle().slice(0, 7);
  //let hand = ["Ks", "Kc", "Kd", "7s", "8s", "3s", "3s"];
               // ["As", "10s", "Js", "Qs", "10d","7h","8s"];
            
     
  
    function analyseDuJeu(hand){
    
    //let cards = hand;
    let cards  = hand; 
    //console.log(cards);
    // on recre values et types et on converti le split en string

    
    let values = cards.map( card => VALUES.indexOf(card.slice(0,-1)));
    //console.log(values);
    /* on recre un tableau qu'avec les values de la main que l'on compare au 
    tableau d'index VALUES global le slice permet de retirer le type à chaque fois*/
    let types = cards.map( card => TYPES.indexOf(card.slice(-1)));
    //console.log(types);
    /* on recre un tableau type en gardant le dernier element de chaque element de card donc que le type 
      auquel on compare à l'ordre hirarchique de l'index de TYPE*/
    let flush = types.every(type => type === types[0]);

    //let resultflush = flush.includes((types[0],0))
    
    //on verifie que c'est le meme type pour chaque card par 
    
                         
    let figures = VALUES.map( (value,i) => values
                         .filter(j => i === j).length) //on compare les values  pap rapport à la main occurence
                                                       // on cherche les values identiques si non nouveau tableau 
                         .sort( (x, y) => y - x );     // puis orderCards on classe l'ordre des cartes

    
    // let scoreV =  values.reduce(reducer); 
    // let scoreT =  types.reduce(reducer);  
    // score = scoreV+scoreT;
    // console.log(values);
    // console.log(scoreV);
    // console.log(types) ;
    // console.log(scoreT);
    // console.log(score);
   
    



    
    //let figAll = figures.map((value, i) => cards)
    
	//console.log(flush);
    //console.log(figAll)
    


    

   
    
                       
	
    
 
	

	if (figures[0] === 4) {
        return CARRE 
        
    }                   
	else if (figures[0] === 3 && figures[1] === 2){
        return FULL 
        
    } 
	else if (flush) {
        
    return FLUSH 
        
    }                            
	
	else if (figures[0] === 3) {
        return BRELAN
        
    }                   
	else if (figures[0] === 2 && figures[1] === 2){
        return TWOPAIRS 
        
    } 
	else if (figures[0] === 2) {
        return ONEPAIR 
         
         
    }                  
	else  {
        return ORDERCARDS 
        
    }  
 
    



}  



/********************************************MISE EN PLACE DU DECK */
                    

// let deck = VALUES.flatMap(v => TYPES.map(t => v+t)).shuffle();
      


// let FloorCards = deck.slice(0,5);
// let HeroCards = deck.slice(5,7);
// let VilainCards = deck.slice(7,9);


// let hand1 = [...FloorCards,...HeroCards];
// let hand2 = [...FloorCards,...VilainCards];

// console.log(FloorCards)
// console.log(HeroCards)
// console.log(VilainCards)
// console.log(compare(hand1,hand2))

//console.log(analyseDuJeu(hand))



















