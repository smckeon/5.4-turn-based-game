var $ = require ('jquery');
var Handlebars = require ('handlebars')

// Create


//** Game Start
//  Player chooses to be either hero or villain
//  Turn one is always players Turn


//  ** Hero/villian details
// Set the hero and villains Health pools.
//

// ** Game Mechanics
//  + start turn one
//  Turn one is always players Turn-
//  Click attack, hero attacks the villain.-
//  A timeout is set to the villan of 3 seconds.-
//  Once the timeout triggers after three seconds the villan attacks back.-
//  The health pools should reflect the damage done.-
//  End turn 1-
//  Start turn 2-

// ** Work to do **
// + Create a function that begins with a click.
// Once the player clicks "attack" the champion will attack the villain
// for a set amount of damage. reducing the villains health by that amount
// + Set the timeout on the villains attack to be 3 seconds to allow
//    player to always get the first attack.

//  every time a selected hero attacks, the enemyies health reflects the specific damage of the hero selected.

function Character(){
  this.attack = function(enemy){
    enemy.health = enemy.health - 20;
    console.log(enemy);
  };
};

function Hero(player){
  this.health = player.health;
  this.img = player.img;
};

Hero.prototype = new Character();

var paladin = new Hero({
  health: 150,
  attack: 12,
  img: "http://i.ytimg.com/vi/cQDjPv_Ykd8/maxresdefault.jpg"
});


var warrior = new Hero({
  health: 200,
  attack: 10,
  img: "app/images/warrior.jpg"
});




var mage = new Hero({
  health: 100,
  attack: 15,
  img: "http://www.artofmtg.com/wp-content/uploads/2014/04/Crimson-Mage-Art.jpg"
});


var rogue = new Hero({ //
  health: 150,
  attack: 12,
  img: "http://vignette4.wikia.nocookie.net/wowwiki/images/6/62/Human_rogue.jpg/revision/latest?cb=20080808224306"
});

// rogue.attack()
// console.log(rogue.attack)

function Enemy(computer){
this.attack = computer.attack;
this.health = computer.health;
this.img = computer.img;
};

var warlock = new Enemy({
  health: 150,
  attack: 10,
  img: "http://mmarinett.com/wp-content/uploads/2015/06/warlock.jpg"
});



var myBadGuy = warlock;

$('button').on('click', function(event){
  event.preventDefault();

  rogue.attack(myBadGuy);
});




var source = $("#hero-select-template").html();
var template = Handlebars.compile(source);

$(".hero-dropdown").append(template(source));
