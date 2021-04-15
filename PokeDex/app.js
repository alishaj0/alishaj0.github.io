// PokeDex endpoint: https://pokeapi.co/api/v2/pokemon/{id or name}/

const pokeContainer = document.querySelector(`#container`);
const numOfPokemon = 150;

// The createPokeCard() function creates a new card/div and adds the new card to the webpage/document inside of the "container" div. 
// Function will run 150x each time the page loads in order to display the 150 cards for each pokemon
function createPokeCard(pokemon){
    const pokeCard = document.createElement(`div`);
        // create a new div in document for each pokeCard
    pokeCard.classList.add(`pokemon`);  
        // add class to each pokeCard created
    pokeContainer.append(pokeCard);
        // will append each card to the end of the pokeContainer

    // Setting the innerHTML for new card, using data/object passed into 'pokemon' parameter
    // Creating new HTML inside of pokeCard div, with a div for poke image and h3 heading for pokemon name
    // Creating <img src=""> and alt="" to plug in returned data for image 
    // Adding .toUppercase() for data passed into h3 heading
    pokeCard.innerHTML = `
    <div class="img-container"> 
        <img src="${pokemon.data.sprites.front_shiny}" alt="${pokemon.data.name}" />
    </div>
    <h3 class="name">${pokemon.data.name.toUpperCase()}</h3>
    `;
}

// The getPokemonData() function makes an Axios "GET" request to the PokeAPI using a specific pokemon ID/number, then takes the returned data and passes it into the createPokemonCard() functtion.
async function getPokemonData(id){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemonData = await axios.get(url);
    console.log(pokemonData);
    console.log(pokemonData.data.name);
    console.log(pokemonData.data.sprites.front_shiny);
    createPokeCard(pokemonData);
}

// The getPokemon() function loops through all of the pokemon IDs and runs/executes the getPokemonData() function for each ID
async function getPokemon(){
    for (i = 1; i <= numOfPokemon; i++){
        await getPokemonData(i);
            // need to use await, because getPokemon() function is an async function: so the cards wait for the information before moving onto the next card and the poke cards may not be in the correct order.
    }
}
getPokemon();