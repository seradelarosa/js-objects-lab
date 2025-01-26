const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }


// console.dir(pokemon, { maxArrayLength: null });
// console.log(game);

// const starterPokemon = [pokemon[0], pokemon[3], pokemon[6], pokemon[25]];
// console.log(starterPokemon);

// == Exercise 3 ========================================

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

game.difficulty = "medium";
console.log(game.difficulty);

// == Exercise 4 ==========================================

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

//set as array bc I want to add more starter pokemon later
let starterPokemon = [];

for (let i = 0; i < pokemon.length; i++) {
    //if pokemon at index i has a true starter property...
    if (pokemon[i].starter === true) {
        // then that pokemon is a starter pokemon
        starterPokemon = pokemon[i];
        // add the starterPokemon to the game party
        game.party.push(starterPokemon);
        console.log(starterPokemon);
        //exit loop when one starter is found
        break;
    }
};

// == Exercise 5 ==================================================

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

for (let i = 0; i < pokemon.length; i++) {
    // add first pokemon that have hp > 100, but only until the party is full
    // can only have 6 pokemon in ur party, but account for one added earlier
    if (pokemon[i].hp > 100 && game.party.length <=5) {
        game.party.push(pokemon[i]);
    }
};

console.log(game.party);

// == Exercise 6 ==============================================

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty BELOW 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/


//loop through gyms
//game.gyms
for (i = 0; i < game.gyms.length; i++) {
    //if the gym AT THE CURRENT INDEX (game.gyms[i].difficulty) < 3
    if (game.gyms[i].difficulty < 3) {
        //then set THAT gym to completed = true;
        // === is an equality operator, it just checks the equality
        //it doesn't assign that value =
        game.gyms[i].completed = true;
    };
};

console.log(game.gyms);

// == Exercise 7 ===============================================