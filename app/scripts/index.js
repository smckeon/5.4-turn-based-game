var $ = require ('jquery');
var Handlebars = require ('handlebars')
var _ = require('underscore');


var selectedHero;

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
    enemy.health = enemy.health - selectedHero[0].damage;
    $("."+this.name+"-health").html(enemy.health);
    console.log(enemy);
  };
};

function Hero(player){
  var player = player || {};
  this.name = player.name;
  this.health = player.health;
  this.damage = player.damage;
  this.img = player.img;
};

Hero.prototype = new Character();

var paladin = new Hero({
  name: "Paladin",
  health: 150,
  damage: 12,
  img: "images/paladin.jpg"
});


var warrior = new Hero({
  name: "Warrior",
  health: 200,
  damage: 10,
  img: "images/warrior.jpg"
});


var mage = new Hero({
  name: "Mage",
  health: 100,
  damage: 15,
  img: "images/mage.jpg"
});


var rogue = new Hero({ //
  name: "Rogue",
  health: 150,
  damage: 12,
  img: "images/rogue.jpg"
});


function Enemy(options){
var options = options || {};

var defaults = {
  name: 'i am a villain'
};

$.extend(this, defaults, options);
};

// Enemy.prototype.attack = function(hero) {
//   hero.health -= 10;
// };

var warlock = new Enemy({
  name: "Warlock",
  health: 150,
  damage: 12,
  img: "images/warlock.jpg"
});

var deathknight = new Enemy({
  name: "Death Knight",
  health: 200,
  damage: 10,
  img: "images/deathknight.jpg"
});

var necromancer = new Enemy({
  name: "Necromancer",
  health: 150,
  damage: 10,
  img: "images/necromancer.jpg"
});

var witch = new Enemy({
  name: "Witch",
  health: 150,
  damage: 10,
  img: "images/witch.jpg"
});

var heroes = [paladin, warrior, mage, rogue];
var enemies = [warlock, deathknight, necromancer, witch];
console.log('enemies', enemies);

var myBadGuy = _.sample(enemies, 1)[0];
console.log('badGuy', myBadGuy);

$('button').on('click', function(event){
  event.preventDefault();

  console.log('attack', selectedHero[0].attack(myBadGuy));
});


var villainSource = $('#villain-template').html(); console.log(villainSource);
var villainTemplate = Handlebars.compile(villainSource);
console.log(myBadGuy.name);
$(".villain").html(villainTemplate(myBadGuy));



var source = $("#hero-select-template").html();
var template = Handlebars.compile(source);

_.each(heroes, function(hero){
  $(".dropdown-hero").append(template(hero));
console.log(hero);
});

$( ".dropdown-hero").change(function(event) {
    event.preventDefault();
    selectedHero = heroes.filter(function(hero){
    return hero.name === $(".dropdown-hero").val();
  });
  var heroSource = $("#hero-template").html();
  var heroTemplate = Handlebars.compile(heroSource);
  $(".hero").html(heroTemplate(selectedHero[0]));
});

// testing
var myObject = {'name': 'inputOfName'};
