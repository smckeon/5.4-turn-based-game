var $ = require ('jquery');
var Handlebars = require ('handlebars')

// Create


//** Game Start
//  Player chooses to be either hero or villain
//  Turn one is always players Turn


//  ** Hero/villian details
// Set the hero and villains Health pools.
//

function Character(){
  this.attack = function(){
    // alert('BY MY BEARD')
  };
};


function Hero(player){
  this.health = player.health;
};
Hero.prototype = new Character();

var player1 = new Hero({
  health: 100,
  attack: 10
});
player1.attack()
console.log(player1.health)
function Villain(){

};
