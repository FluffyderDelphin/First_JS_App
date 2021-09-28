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


let printList = function (list) {
    for (let i = 0; i < list.length; ++i) {
        console.log(list[i].name);
        document.write(`That Pokemon´s Name is ${list[i].name}! 
        Its height is ${list[i].height}.
        ${checkheight(list[i].height)} 
        ${checktype(list[i].type)} <br>`)


    }

}

printList(pokemonlist);