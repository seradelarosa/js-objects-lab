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

//want it start at index 1, since index 0 (bulbasaur) is already in the party
for (let i = 1; i < pokemon.length; i++) {
    // add pokemon that have starter as true (only 4 total)
    
    //original if statement
    //  if (pokemon[i].hp > 100 && game.party.length <=5) {
    //     game.party.push(pokemon[i]);
    // }
    //but some pokemon with hp > 100 do not have evolved forms
    //limited to a party of 6, but also there are only 4 starter pokemon
    //exercise 7 requires pokemon evolved forms so I had to change this so the evolved forms are accurate

    if (pokemon[i].starter === true) {
        game.party.push(pokemon[i]);
    }
};

console.log(game.party);

//original game party:
//bulbasaur, jigglypuff, wigglytuff, muk, rhydon, chansey

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

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

for (let i = 0; i < game.party.length; i++) {
    let currentNumber = game.party[i].number;
    let currentPokemonIndex = currentNumber - 1;
    let nextPokemonIndex = currentPokemonIndex + 1;

    game.party.splice(i, 1, pokemon[nextPokemonIndex]);
};

console.log(game.party)

//original game party:
//bulbasaur, charmander, blastoise, pikachu
//new game party:
//ivysaur, charmeleon, wartorle, raichu



// == Exercise 8 ===================================================

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

for (let i = 0; i < game.party.length; i++) {
    console.log(game.party[i].name);
};

// == Exercise 9 ===================================================

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/


pokemon.forEach((pokemon) => {
    if (pokemon.starter === true) {
        console.log(pokemon.name);
    }
});

// == Exercise 10 ================================================

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

game.catchPokemon = function(pokemonObj) {
    game.party.push(pokemonObj);
}

let lapras = pokemon[130];

game.catchPokemon(lapras);
console.log(game.party);

// == Exercise 11 ===============================================

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/

game.catchPokemon = function(pokemonObj) {
    game.party.push(pokemonObj);
    game.items[1].quantity -= 1;
}

let mew = pokemon[150];
game.catchPokemon(mew);

console.log(game.items);
console.log(game.party);





// == Exercise 12 ==============================================

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/












// == Exercise 13 ==============================================

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/










// == Exercise 14 ==============================================

/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/












// == Exercise 15 ==============================================

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/










// == Exercise 16 ==============================================

/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

