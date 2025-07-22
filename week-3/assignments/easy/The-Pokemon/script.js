// Step 3.1: Get references to HTML elements
const form = document.getElementById("pokemon-form");
const numInput = document.getElementById("num-pokemon");
const categoryInput = document.getElementById("pokemon-category");
const container = document.getElementById("pokemon-container");
const loadingMessage = document.getElementById("loading");

// Step 3.4: The function to create a single Pokémon card
function createPokemonCard(pokemon) {
  // Create the main card div
  const card = document.createElement("div");
  card.classList.add("pokemon-card");

  // Get the data we need
  const name = pokemon.name;
  const id = pokemon.id;
  // The best image is in this nested location
  const imageUrl = pokemon.sprites.other["official-artwork"].front_default;
  const type = pokemon.types[0].type.name;

  // Use innerHTML to build the card's content
  card.innerHTML = `
        <img src="${imageUrl}" alt="Image of ${name}">
        <h2>${name}</h2>
        <p class="type">Type: ${type}</p>
        <p>#${id.toString().padStart(3, "0")}</p>
    `;

  return card;
}

// Step 3.3: The main function to fetch data and render cards
async function fetchAndRenderPokemons(category, num) {
  // Show loading message and clear previous results
  loadingMessage.innerText = "Fetching Pokémon...";
  loadingMessage.classList.remove("hidden");
  container.innerHTML = "";

  try {
    // Fetch the list of Pokémon by category from the API
    const typeResponse = await fetch(
      `https://pokeapi.co/api/v2/type/${category}`
    );
    if (!typeResponse.ok) {
      throw new Error("Category not found!");
    }
    const typeData = await typeResponse.json();

    // Get the list of Pokémon and slice it to the number the user wants
    const pokemonsByType = typeData.pokemon.slice(0, num);

    // Create an array of promises to fetch detailed data for each Pokémon
    const pokemonPromises = pokemonsByType.map((p) =>
      fetch(p.pokemon.url).then((res) => res.json())
    );

    // Wait for all detailed fetches to complete
    const pokemonDetails = await Promise.all(pokemonPromises);

    // Hide the loading message
    loadingMessage.classList.add("hidden");

    // Create and append a card for each Pokémon to the container
    pokemonDetails.forEach((pokemon) => {
      const card = createPokemonCard(pokemon);
      container.appendChild(card);
    });
  } catch (error) {
    // Handle errors, e.g., if the network is down or category is wrong
    loadingMessage.innerText =
      "Could not fetch Pokémon. Please check the category and try again.";
    console.error("Error fetching Pokémon:", error);
  }
}

// Step 3.2: Add the event listener to the form
form.addEventListener("submit", function (event) {
  // Prevent the form from reloading the page
  event.preventDefault();

  // Get the user's choices from the input fields
  const numPokemon = numInput.value;
  const category = categoryInput.value;

  // Call our main function
  fetchAndRenderPokemons(category, numPokemon);
});
