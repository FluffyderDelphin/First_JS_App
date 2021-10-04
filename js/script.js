"use strict";


let pokemon1 = {
    name: 'Scizor',
    type: ['Steel', 'Bug'],
    height: 1.8

}

let pokemon2 = {
    name: 'Garchomp',
    type: ['Dragon', 'Ground'],
    height: 1.9
}

let pokemon3 = {
    name: 'Darkrai',
    type: ['Dark'],
    height: 1.5

}


let pokemon_reposetory = (function () {
    let pokemonlist = [];

    //  Functions Checks if Pokemon Object is valid
    function checkObject(pkobj) {
        if (typeof pkobj === 'object'
            && Object.keys(pkobj).includes('name')
            && Object.keys(pkobj).includes('type')
            && Object.keys(pkobj).includes('height')
        ) {
            return true;
        }
        else {
            return false;
        }
    }
    //   Function to that adds a Comments based on the Pokemons height

    function checkheight(height) {
        if (typeof height === 'number') {
            return height >= 1.6 ? 'Wow thats big! ' : ' ';
        } else {
            return false;
        }
    }


    //   Function to that adds a Comments based on the Pokemons type
    function checktype(type) {
        if (type.length === 2) {
            return 'It has two Types !';
        } else if (type.length === 1) {
            return 'It has one Type !';
        } else {
            // In case of any Invalid "Type" Values 
            return 'A Pokemon can only have 1 or 2 Types !';
        }
    }


    function add(pokemon) {
        if (checkObject(pokemon)
            && checktype(pokemon.type)
            && checkheight(pokemon.height)
        ) {
            pokemonlist.push(pokemon)
        }
        else {
            console.log('Invalid Input')
        }
    }
    function getALL() {
        return pokemonlist;
    }
    //  Prints the Information about the Pokemon to the html Document

    function printPokemon(pokemon) {
        console.log(pokemon.name);
        let ulpokemonlist = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.classList.add('pokemonButton');
        ulpokemonlist.appendChild(listItem);
        listItem.appendChild(button);
        button.innerText = pokemon.name;


        // document.write(`That Pokemon´s Name is ${pokemon.name}! 
        // Its height is ${pokemon.height} m.
        // ${checkheight(pokemon.height)} 
        // ${checktype(pokemon.type)} <br>`)
    }

    return {
        add: add,
        getALL: getALL,
        printPokemon: printPokemon
    }


})();


pokemon_reposetory.add(pokemon1);
pokemon_reposetory.add(pokemon2);
pokemon_reposetory.add(pokemon3);
pokemon_reposetory.add({ name: 'Pikachu', type: ['electro'], height: 0.5 });


// Looping trough the Pokemonlist. 

pokemon_reposetory.getALL().forEach((pokemon) => {

    pokemon_reposetory.printPokemon(pokemon);
});