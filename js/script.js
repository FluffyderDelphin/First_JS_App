"use strict";
let pokemonlist = [];

let pokemon1 = {
    name: 'Scizor',
    type: ['Steel', 'Bug'],
    height: 1.8

}

pokemonlist.push(pokemon1);

let pokemon2 = {
    name: 'Garchomp',
    type: ['Dragon', 'Ground'],
    height: 1.9

}

pokemonlist.push(pokemon2);


let pokemon3 = {
    name: 'Darkrai',
    type: ['Dark'],
    height: 1.5

}

pokemonlist.push(pokemon3);

//   Function to that adds a Comments based on the Pokemons height

let checkheight = function (height) {
    if (height >= 1.6) {
        return 'Wow, thats big!';
    } else {
        return '';
    }

}

// Looping trough the Pokemonlist. It will write the Name and  the height of the Pokemons, while also Comment on the height via the function and also how many Types it has

for (let i = 0; i < pokemonlist.length; ++i) {
    console.log(pokemonlist[i].name);
    if (pokemonlist[i].type.length === 2) {
        document.write(` That Pokemons Name is ${pokemonlist[i].name} .Its height is ${pokemonlist[i].height}. ${checkheight(pokemonlist[i].height)} It has two Types ! <br>`);
    } else if (pokemonlist[i].type.length === 1) {
        document.write(` That Pokemons Name is ${pokemonlist[i].name} .Its height is ${pokemonlist[i].height}. ${checkheight(pokemonlist[i].height)} It has one Type ! <br>`);
    } else {
        // In case of any Invalid "Type" Values 
        document.write('A Pokemon can only have 1 or 2 Types !')
    }









}