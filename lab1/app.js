"use strict";

async function getPokemonList() {
  const url = "https://pokeapi.co/api/v2/pokemon"; // Pobieranie tylko 20 Pokémonów dla wydajności
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    return json.results;
  } catch (error) {
    console.error(error.message);
  }
}

async function getPokemonInfo(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
}

async function displayPokemonList() {
  const pokemonList = await getPokemonList();
  const container = document.getElementById("pokemon-list");
  container.innerHTML = "";
  if (!pokemonList) {
    container.innerHTML = "<p>Failed to load Pokémon list.</p>";
    return;
  }
  for (let i = 0; i < pokemonList.length; i++) {
    const pokemon = pokemonList[i];
    const id = i + 1;
    const info = await getPokemonInfo(id);
    if (!info) continue;
    const button = document.createElement("button");
    button.className = "list-item";
    const img = document.createElement("img");
    img.src = info.sprites.front_default;
    img.alt = info.name;
    img.style.height = "72px";
    img.style.width = "72px";
    const text = document.createElement("p");
    text.textContent = `${id}. ${pokemon.name}`;
    button.appendChild(img);
    button.appendChild(text);
    button.onclick = () => displayPokemonInfo(info);
    container.appendChild(button);
  }
}

async function displayPokemonInfo(details) {
  const container = document.getElementById("pokemon-info");
  container.innerHTML = "";
  const loading = document.createElement("div");
  loading.textContent = "Loading...";
  container.appendChild(loading);
  setTimeout(() => {
    const name = document.createElement("h2");
    name.textContent = details.name;
    const image = document.createElement("img");
    image.src = details.sprites.front_default;
    image.alt = details.name;
    image.style.width = "100px";
    image.style.height = "100px";
    const type = document.createElement("p");
    type.textContent = `Types:`;
    const typesList = document.createElement("ul");
    typesList.innerHTML = details.types
      .map((type) => `<li>${type.type.name}</li>`)
      .join("");
    const weight = document.createElement("p");
    weight.textContent = `Weight: ${details.weight}`;
    const height = document.createElement("p");
    height.textContent = `Height: ${details.height}`;
    const listTitle = document.createElement("p");
    listTitle.textContent = "Stats:";
    const statsList = document.createElement("ul");
    statsList.innerHTML = details.stats
      .map((stat) => `<li>${stat.stat.name}: ${stat.base_stat}</li>`)
      .join("");
    container.appendChild(name);
    container.appendChild(image);
    container.appendChild(type);
    container.appendChild(typesList);
    container.appendChild(height);
    container.appendChild(weight);
    container.appendChild(listTitle);
    container.appendChild(statsList);
    loading.style.display = "none";
  }, 500);
}

async function handleSearch(event) {
  const searchTerm = event.target.value.trim().toLowerCase();
  const details = await getPokemonInfo(searchTerm);
  displayPokemonInfo(details);
}

const searchBar = document.getElementById("search-bar");
searchBar.addEventListener("input", handleSearch);

displayPokemonList();
