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
    if (pokemon[i].starter === true) {
        starterPokemon = pokemon[i];
        //exit loop when one starter is found
        break;
    }
};

//add to game party
if (starterPokemon) {
    game.party.push(starterPokemon);
};

console.log(starterPokemon);

// == Exercise 5 ==================================================