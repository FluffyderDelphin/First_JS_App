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
            item.types = details.types.map(object => object.type.name);
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

            let imageContainer

            modalBody.append($(`<img class="pokemon-image img-fluid" src="${pokemon.imageFront}"></img>`));
            modalBody.append($(`<img class="pokemon-image img-fluid" src="${pokemon.imageBack}"></img>`));

            let detail_list = $('<div class="list-group detail-list"></div>')
            modalBody.append(detail_list);
            detail_list.append($(`<p class="list-group-item text-center border-0">Height : ${pokemon.height}</p>`));
            detail_list.append($(`<p class="list-group-item text-center border-0">Weight : ${pokemon.weight}</p>`));

            detail_list.append(prepareType(pokemon.types));
            console.log(pokemon.types);

            // pokemon.types.forEach(e => types_list.append($(`<span class="pokemon-type">${e} </span>`)));
            // detail_list.append(types_list);

            console.log(pokemon);
        })

    }
    function prepareType(type) {
        let types_list = $(`<p class="list-group-item text-center border-0"></p>`);
        type.forEach(e => {
            let type_entry = $(`<span class="pokemon-type">${e} </span>`);
            switch (e) {
                case "fire":
                    type_entry.addClass(fire);
                    break;
                case "water":
                    type_entry.addClass(water);
                    break;
                case "grass":
                    type_entry.addClass(grass);
                    break;
                case "poison":
                    type_entry.addClass(poison);
                    break;
                case "bug":
                    type_entry.addClass(bug);
                    break;
                case "electric":
                    type_entry.addClass(electric);
                    break;
                case "fire":
                    type_entry.addClass(fire);
                    break;
                case "normal":
                    type_entry.addClass(normal);
                    break;
                case "rock":
                    type_entry.addClass(rock);
                    break;
                case "dark":
                    type_entry.addClass(dark);
                    break;
                case "fairy":
                    type_entry.addClass(fairy);
                    break;
                case "flying":
                    type_entry.addClass(flying);
                    break;
                case "ground":
                    type_entry.addClass(ground);
                    break;
                case "steel":
                    type_entry.addClass(steel);
                    break;
                case "dragon":
                    type_entry.addClass(dragon);
                    break;
                case "fighting":
                    type_entry.addClass(fighting);
                    break;
                case "ghost":
                    type_entry.addClass(ghost);
                    break;
                case "ice":
                    type_entry.addClass(ice);
                    break;
                case "psychic":
                    type_entry.addClass(psychic);
                    break;
                case "water":
                    type_entry.addClass(water);
                    break;
            }
        }
        );
        return types_list;
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
