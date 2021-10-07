"use strict";


let pokemon_reposetory = (function () {
    let pokemonlist = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function showLoadingMessage() {
        document.querySelector('.message').classList.remove('hidden');
    }
    function hideLoadingMessage() {
        document.querySelector('.message').classList.add('hidden');
    }

    function loadlist() {
        showLoadingMessage();
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            hideLoadingMessage();
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            })
        }).catch(function (e) {
            console.error(e);
            hideLoadingMessage();
        })

    }
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUlr = details.sprites.font_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        })
    }

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


    // function add(pokemon) {
    //     if (checkObject(pokemon)
    //         && checktype(pokemon.type)
    //         && checkheight(pokemon.height)
    //     ) {
    //         pokemonlist.push(pokemon)
    //     }
    //     else {
    //         console.log('Invalid Input')
    //     }
    // }

    // temporary simple add function 
    function add(pokemon) {
        pokemonlist.push(pokemon);
    }
    function getALL() {
        return pokemonlist;
    }
    //  Prints the Information about the Pokemon to the html Document

    function addListItem(pokemon) {

        let ulpokemonlist = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.classList.add('pokemonButton');
        ulpokemonlist.appendChild(listItem);
        listItem.appendChild(button);
        button.innerText = pokemon.name;

        button.addEventListener('click', function () {
            showDetails(pokemon);
        });


        // document.write(`That Pokemon´s Name is ${pokemon.name}! 
        // Its height is ${pokemon.height} m.
        // ${checkheight(pokemon.height)} 
        // ${checktype(pokemon.type)} <br>`)
    }

    // Prints Pokemon Details to the Console 

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            console.log(pokemon);
        })

    }

    return {
        add: add,
        getALL: getALL,
        addListItem: addListItem,
        loadlist: loadlist,
        loadDetails: loadDetails
    }


})();

pokemon_reposetory.loadlist().then(function () {
    pokemon_reposetory.getALL().forEach(function (pokemon) {
        pokemon_reposetory.addListItem(pokemon);
    });
});

// Looping trough the Pokemonlist. 

pokemon_reposetory.getALL().forEach((pokemon) => {

    pokemon_reposetory.addListItem(pokemon);
});