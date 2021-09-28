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
let checkheight = (height) => height >= 1.6 ? 'Wow thats big! ' : '';


//   Function to that adds a Comments based on the Pokemons type
let checktype = function (type) {
    if (type.length === 2) {
        return 'It has two Types !';
    } else if (type.length === 1) {
        return 'It has one Type !';
    } else {
        // In case of any Invalid "Type" Values 
        return 'A Pokemon can only have 1 or 2 Types !'
    }
}

// Looping trough the Pokemonlist. It will write the Name and  the height of the Pokemons, while also Comment on the height via the function and also how many Types it has


pokemonlist.forEach((property) => {
    console.log(property.name)
    document.write(`That Pokemon´s Name is ${property.name}! 
    Its height is ${property.height}.
    ${checkheight(property.height)} 
    ${checktype(property.type)} <br>`)
});

