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
            item.imageFront = details.sprites.front_default;
            item.imageBack = details.sprites.back_default;
            item.height = details.height;
            item.types = details.types;
            item.weight = details.weight;
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

        let ulpokemonlist = $('.pokemon-list');
        let listItem = $('<li class="list-group-item"></li>');
        let button = $(`<button type="button" class="btn btn-primary pokemonButton" data-toggle="modal" data-target="#pokemonModal">
        ${capitalizeName(pokemon.name)}
      </button>`);
        ulpokemonlist.append(listItem);
        listItem.append(button);

        // Event Listner for the Details 

        button.on('click', () => {
            showDetails(pokemon);
        });

    }

    // Prints Pokemon Details to the Console 

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            let modalHeader = $('.modal-header');
            let modalBody = $('.modal-body');
            let modalTitle = $('.modal-title');

            modalTitle.empty();
            modalBody.empty();

            modalTitle.append($(`<h2>${capitalizeName(pokemon.name)}</h2>`));
            modalBody.append($(`<img class="pokemon-image img-fluid" src="${pokemon.imageFront}"></img>`));
            modalBody.append($(`<img class="pokemon-image img-fluid" src="${pokemon.imageBack}"></img>`));
            modalBody.append($(`<p>${pokemon.height}</p>`));
            modalBody.append($(`<p>${pokemon.weight}</p>`));
            // modalBody.append($(`<p>${pokemon.types}</p>`));



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
