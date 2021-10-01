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

//  Functions Checks if Pokemon Object is valid
let checkObject = function (pkobj) {
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

let checkheight = (height) => {
    if (typeof height === 'number') {
        return height >= 1.6 ? 'Wow thats big! ' : ' ';
    } else {
        return false;
    }
}


//   Function to that adds a Comments based on the Pokemons type
let checktype = function (type) {
    if (type.length === 2) {
        return 'It has two Types !';
    } else if (type.length === 1) {
        return 'It has one Type !';
    } else {
        // In case of any Invalid "Type" Values 
        return 'A Pokemon can only have 1 or 2 Types !';
    }
}



let pokemon_reposetory = (function () {
    let pokemonlist = [];


    function add(pokemon) {
        if (checkObject(pokemon)
            && checktype(pokemon.type)
            && checkheight(pokemon.height)) {
            pokemonlist.push(pokemon)
        } else {
            console.log('Invalid Input')
        }
    }
    function getALL() {
        return pokemonlist;
    }

    return {
        add: add,
        getALL: getALL
    }


})();

// let checkALL = function (pkobj) {
//     if (checkObject(pokemon)
//         && checktype(pokemon.type)
//         && checkheight(pokemon.height)) {
//         pokemon_reposetory.add(pkobj);
//     } else {
//         console.log('Invalid Input');

//     }

// }

pokemon_reposetory.add(pokemon1);
pokemon_reposetory.add(pokemon2);
pokemon_reposetory.add(pokemon3);
pokemon_reposetory.add({ name: 'Pikachu', type: ['electro'], height: 0.5 });


// Looping trough the Pokemonlist. It will write the Name and  the height of the Pokemons, while also Comment on the height via the function and also how many Types it has


pokemon_reposetory.getALL().forEach((property) => {
    console.log(property.name)
    document.write(`That Pokemon´s Name is ${property.name}! 
    Its height is ${property.height} m.
    ${checkheight(property.height)} 
    ${checktype(property.type)} <br>`)
});

