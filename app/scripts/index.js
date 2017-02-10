var $ = require ('jquery');
var Handlebars = require ('handlebars')
var _ = require('underscore');

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



function Character(player){
  this.attack = function(enemy){
    enemy.health = enemy.health - 15;
    console.log(enemy);
  };
};

function Hero(player){
  this.name = player.name;
  this.health = player.health;
  this.attack = player.attack;
  this.img = player.img;
};

Hero.prototype = new Character();

var paladin = new Hero({
  name: "Paladin",
  health: 150,
  attack: 12,
  img: "../app/images/palading.jpg"
});


var warrior = new Hero({
  name: "Warrior",
  health: 200,
  attack: 10,
  img: "../app/images/warrior.jpg"
});


var mage = new Hero({
  name: "Mage",
  health: 100,
  attack: 15,
  img: "../app/images/mage.jpg"
});


var rogue = new Hero({ //
  name: "Rogue",
  health: 150,
  attack: 12,
  img: "../app/images/rogue.jpg"
});

// rogue.attack()
// console.log(rogue.attack)

function Enemy(computer){
this.attack = computer.attack;
this.health = computer.health;
this.img = computer.img;
};

var warlock = new Enemy({
  name: "Warlock",
  health: 150,
  attack: 12,
  img: "../app/images/warlock.jpg"
});

var deathknight = new Enemy({
  name: "Death Knight",
  health: 200,
  attack: 10,
  img: "../app/images/deathknight.jpg"
});

var necromancer = new Enemy({
  name: "Necromancer",
  health: 150,
  attack: 10,
  img: "../app/images/necromancer.jpg"
});

var witch = new Enemy({
  name: "Witch",
  health: 150,
  attack: 10,
  img: "../app/images/witch.jpg"
});

var heroes = [paladin, warrior, mage, rogue];
var enemies = [warlock, deathknight, necromancer, witch];

var myBadGuy = _.sample(enemies, 1)[0];
console.log(myBadGuy);

$('button').on('click', function(event){
  event.preventDefault();

  rogue.attack(myBadGuy);
});




var source = $("#hero-select-template").html();
var template = Handlebars.compile(source);

_.each(heroes, function(hero){
  $(".dropdown-hero").append(template(hero));
console.log(Hero);
});
