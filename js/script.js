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
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        })
    }




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
        listItem.classList.add('list-group-item');
        let button = document.createElement('button');
        button.classList.add('pokemonButton');
        button.classList.add('btn');
        button.classList.add('btn-primary');
        ulpokemonlist.appendChild(listItem);
        listItem.appendChild(button);
        button.innerText = capitalizeName(pokemon.name);

        // Event Listner for the Details 

        button.addEventListener('click', function () {
            showDetails(pokemon);
        });

    }

    // Prints Pokemon Details to the Console 

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            let modal = document.querySelector(".modal-container");
            modal.classList.remove("hidden");


            let pokemonName = capitalizeName(pokemon.name);
            document.querySelector('body').classList.add('modal-open');
            document.querySelector(".pokemon-name").innerText = pokemonName;
            document.querySelector(".pokemon-height").innerText = pokemon.height;
            document.querySelector(".pokemon-image").src = pokemon.imageUrl;

            let close = document.querySelector(".modal-close");
            close.addEventListener('click', hideDetails);

            window.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                    hideDetails();
                }
            })

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    hideDetails();
                }
            })



            console.log(pokemon);
        })

    }
    function hideDetails() {
        document.querySelector(".modal-container").classList.add("hidden");
        document.querySelector('body').classList.remove('modal-open');
    }

    function capitalizeName(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);


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
