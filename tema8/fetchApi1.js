"use strict";

const body = document.getElementById("cuerpo");

let pokemons = [];
let ids = [];

//min: 1 | max: 10325

document.getElementById("ids").addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9,]/g, '');
});

document.getElementById("obtainData").addEventListener('click', function () {
    ids = document.getElementById("ids").value.split(",");
    ids.forEach(e => { e = parseInt(e); });
    ids = new Set(ids);
    ids.forEach(e => { if (!isNaN(parseInt(e))) getPokemon(parseInt(e)); });
});

async function getPokemon(id) {
    pokemons = [];
    try {
        const resPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = await resPokemon.json();
        pokemons.push(pokemon);
    } catch (error) {
        console.log("Error: ", error);
    }
    render();
}

function render() {
    body.innerHTML = null;
    pokemons.forEach(pokemon => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
                        <td>                                    
                            <picture>
                                <source srcset="${pokemon.sprites.front_default}">
                                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                            </picture>
                        </td>
                        <td>                                    
                            <p>${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.substring(1)}</p>
                        </td>
                        <td>                                    
                            <p>${pokemon.base_experience}</p>
                        </td>
                        `;
        body.appendChild(tr);
    });
}