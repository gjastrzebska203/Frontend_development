const pokemon_list = [
  {
    name: "bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    types: ["grass", "poison"],
    stats: [
      {
        base_stat: 45,
        name: "hp",
      },
      {
        base_stat: 49,
        name: "attack",
      },
      {
        base_stat: 49,
        name: "defense",
      },
      {
        base_stat: 65,
        name: "special-attack",
      },
      {
        base_stat: 65,
        name: "special-defense",
      },
      {
        base_stat: 45,
        name: "speed",
      },
    ],
    weight: 69,
    height: 7,
  },
  {
    name: "ivysaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    types: ["grass", "poison"],
    stats: [
      {
        base_stat: 60,
        name: "hp",
      },
      {
        base_stat: 62,
        name: "attack",
      },
      {
        base_stat: 63,
        name: "defense",
      },
      {
        base_stat: 80,
        name: "special-attack",
      },
      {
        base_stat: 80,
        name: "special-defense",
      },
      {
        base_stat: 60,
        name: "speed",
      },
    ],
    weight: 130,
    height: 10,
  },
  {
    name: "venusaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    types: ["grass", "poison"],
    stats: [
      {
        base_stat: 80,
        name: "hp",
      },
      {
        base_stat: 82,
        name: "attack",
      },
      {
        base_stat: 83,
        name: "defense",
      },
      {
        base_stat: 100,
        name: "special-attack",
      },
      {
        base_stat: 100,
        name: "special-defense",
      },
      {
        base_stat: 80,
        name: "speed",
      },
    ],
    weight: 1000,
    height: 20,
  },
  {
    name: "charmander",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    types: ["fire"],
    stats: [
      {
        base_stat: 39,
        name: "hp",
      },
      {
        base_stat: 52,
        name: "attack",
      },
      {
        base_stat: 43,
        name: "defense",
      },
      {
        base_stat: 60,
        name: "special-attack",
      },
      {
        base_stat: 50,
        name: "special-defense",
      },
      {
        base_stat: 65,
        name: "speed",
      },
    ],
    weight: 85,
    height: 6,
  },
  {
    name: "charmeleon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    types: ["fire"],
    stats: [
      {
        base_stat: 58,
        name: "hp",
      },
      {
        base_stat: 64,
        name: "attack",
      },
      {
        base_stat: 58,
        name: "defense",
      },
      {
        base_stat: 80,
        name: "special-attack",
      },
      {
        base_stat: 65,
        name: "special-defense",
      },
      {
        base_stat: 80,
        name: "speed",
      },
    ],
    weight: 190,
    height: 11,
  },
  {
    name: "charizard",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    types: ["fire", "flying"],
    stats: [
      {
        base_stat: 78,
        name: "hp",
      },
      {
        base_stat: 84,
        name: "attack",
      },
      {
        base_stat: 78,
        name: "defense",
      },
      {
        base_stat: 109,
        name: "special-attack",
      },
      {
        base_stat: 85,
        name: "special-defense",
      },
      {
        base_stat: 100,
        name: "speed",
      },
    ],
    weight: 905,
    height: 17,
  },
  {
    name: "squirtle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    types: ["water"],
    stats: [
      {
        base_stat: 44,
        name: "hp",
      },
      {
        base_stat: 48,
        name: "attack",
      },
      {
        base_stat: 65,
        name: "defense",
      },
      {
        base_stat: 50,
        name: "special-attack",
      },
      {
        base_stat: 64,
        name: "special-defense",
      },
      {
        base_stat: 43,
        name: "speed",
      },
    ],
    weight: 90,
    height: 5,
  },
  {
    name: "wartortle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    types: ["water"],
    stats: [
      {
        base_stat: 59,
        name: "hp",
      },
      {
        base_stat: 63,
        name: "attack",
      },
      {
        base_stat: 80,
        name: "defense",
      },
      {
        base_stat: 65,
        name: "special-attack",
      },
      {
        base_stat: 80,
        name: "special-defense",
      },
      {
        base_stat: 58,
        name: "speed",
      },
    ],
    weight: 225,
    height: 10,
  },
  {
    name: "blastoise",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    types: ["water"],
    stats: [
      {
        base_stat: 79,
        name: "hp",
      },
      {
        base_stat: 83,
        name: "attack",
      },
      {
        base_stat: 100,
        name: "defense",
      },
      {
        base_stat: 85,
        name: "special-attack",
      },
      {
        base_stat: 105,
        name: "special-defense",
      },
      {
        base_stat: 78,
        name: "speed",
      },
    ],
    weight: 855,
    height: 16,
  },
  {
    name: "caterpie",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    types: ["bug"],
    stats: [
      {
        base_stat: 45,
        name: "hp",
      },
      {
        base_stat: 30,
        name: "attack",
      },
      {
        base_stat: 35,
        name: "defense",
      },
      {
        base_stat: 20,
        name: "special-attack",
      },
      {
        base_stat: 20,
        name: "special-defense",
      },
      {
        base_stat: 45,
        name: "speed",
      },
    ],
    weight: 29,
    height: 3,
  },
  {
    name: "metapod",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    types: ["bug"],
    stats: [
      {
        base_stat: 50,
        name: "hp",
      },
      {
        base_stat: 20,
        name: "attack",
      },
      {
        base_stat: 55,
        name: "defense",
      },
      {
        base_stat: 25,
        name: "special-attack",
      },
      {
        base_stat: 25,
        name: "special-defense",
      },
      {
        base_stat: 30,
        name: "speed",
      },
    ],
    weight: 0,
    height: 99,
  },
  {
    name: "butterfree",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    types: ["bug", "flying"],
    stats: [
      {
        base_stat: 60,
        name: "hp",
      },
      {
        base_stat: 45,
        name: "attack",
      },
      {
        base_stat: 50,
        name: "defense",
      },
      {
        base_stat: 90,
        name: "special-attack",
      },
      {
        base_stat: 80,
        name: "special-defense",
      },
      {
        base_stat: 70,
        name: "speed",
      },
    ],
    weight: 320,
    height: 11,
  },
  {
    name: "weedle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    types: ["bug", "poison"],
    stats: [
      {
        base_stat: 40,
        name: "hp",
      },
      {
        base_stat: 35,
        name: "attack",
      },
      {
        base_stat: 30,
        name: "defense",
      },
      {
        base_stat: 20,
        name: "special-attack",
      },
      {
        base_stat: 20,
        name: "special-defense",
      },
      {
        base_stat: 50,
        name: "speed",
      },
    ],
    weight: 32,
    height: 3,
  },
  {
    name: "kakuna",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    types: ["bug", "poison"],
    stats: [
      {
        base_stat: 45,
        name: "hp",
      },
      {
        base_stat: 25,
        name: "attack",
      },
      {
        base_stat: 50,
        name: "defense",
      },
      {
        base_stat: 25,
        name: "special-attack",
      },
      {
        base_stat: 25,
        name: "special-defense",
      },
      {
        base_stat: 35,
        name: "speed",
      },
    ],
    weight: 6,
    height: 100,
  },
  {
    name: "beedrill",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    types: ["bug", "poison"],
    stats: [
      {
        base_stat: 65,
        name: "hp",
      },
      {
        base_stat: 90,
        name: "attack",
      },
      {
        base_stat: 40,
        name: "defense",
      },
      {
        base_stat: 45,
        name: "special-attack",
      },
      {
        base_stat: 80,
        name: "special-defense",
      },
      {
        base_stat: 75,
        name: "speed",
      },
    ],
    weight: 295,
    height: 10,
  },
  {
    name: "pidgey",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    types: ["normal", "flying"],
    stats: [
      {
        base_stat: 40,
        name: "hp",
      },
      {
        base_stat: 45,
        name: "attack",
      },
      {
        base_stat: 40,
        name: "defense",
      },
      {
        base_stat: 35,
        name: "special-attack",
      },
      {
        base_stat: 35,
        name: "special-defense",
      },
      {
        base_stat: 56,
        name: "speed",
      },
    ],
    weight: 18,
    height: 3,
  },
  {
    name: "pidgeotto",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    types: ["normal", "flying"],
    stats: [
      {
        base_stat: 63,
        name: "hp",
      },
      {
        base_stat: 60,
        name: "attack",
      },
      {
        base_stat: 55,
        name: "defense",
      },
      {
        base_stat: 50,
        name: "special-attack",
      },
      {
        base_stat: 50,
        name: "special-defense",
      },
      {
        base_stat: 71,
        name: "speed",
      },
    ],
    weight: 300,
    height: 11,
  },
  {
    name: "pidgeot",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    types: ["normal", "flying"],
    stats: [
      {
        base_stat: 83,
        name: "hp",
      },
      {
        base_stat: 80,
        name: "attack",
      },
      {
        base_stat: 75,
        name: "defense",
      },
      {
        base_stat: 70,
        name: "special-attack",
      },
      {
        base_stat: 70,
        name: "special-defense",
      },
      {
        base_stat: 101,
        name: "speed",
      },
    ],
    weight: 395,
    height: 15,
  },
  {
    name: "rattata",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    types: ["normal"],
    stats: [
      {
        base_stat: 30,
        name: "hp",
      },
      {
        base_stat: 56,
        name: "attack",
      },
      {
        base_stat: 35,
        name: "defense",
      },
      {
        base_stat: 25,
        name: "special-attack",
      },
      {
        base_stat: 35,
        name: "special-defense",
      },
      {
        base_stat: 72,
        name: "speed",
      },
    ],
    types: [
      {
        base_stat: 30,
        name: "hp",
      },
      {
        base_stat: 56,
        name: "attack",
      },
      {
        base_stat: 35,
        name: "defense",
      },
      {
        base_stat: 25,
        name: "special-attack",
      },
      {
        base_stat: 35,
        name: "special-defense",
      },
      {
        base_stat: 72,
        name: "speed",
      },
    ],
    weight: 35,
    height: 3,
  },
  {
    name: "raticate",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    types: ["normal"],
    stats: [
      {
        base_stat: 55,
        name: "hp",
      },
      {
        base_stat: 81,
        name: "attack",
      },
      {
        base_stat: 60,
        name: "defense",
      },
      {
        base_stat: 50,
        name: "special-attack",
      },
      {
        base_stat: 70,
        name: "special-defense",
      },
      {
        base_stat: 97,
        name: "speed",
      },
    ],
    weight: 185,
    height: 7,
  },
];

function MySearch() {
  function handleSearch(event) {
    const searchQuery = event.target.value.trim().toLowerCase();
    const pokemon = pokemon_list.find((p) => p.name === searchQuery);

    const infoContainer = document.getElementById("pokemon-info");
    if (pokemon) {
      infoContainer.innerHTML = `
        <h2>${pokemon.name}</h2>
        <img src="${pokemon.image}" alt="${pokemon.name}" />
        <p>Types: ${pokemon.types.join(", ")}</p>
        <p>Weight: ${pokemon.weight} hectograms</p>
        <p>Height: ${pokemon.height} decimetres</p>
        <h3>Stats:</h3>
        <ul>
          ${pokemon.stats
            .map((stat) => `<li>${stat.name}: ${stat.base_stat}</li>`)
            .join("")}
        </ul>
      `;
    } else if (searchQuery === "") {
      infoContainer.innerHTML = "<p>Search for a Pokémon!</p>";
    } else {
      infoContainer.innerHTML = "<p>No Pokémon found!</p>";
    }
  }

  return (
    <input
      type="text"
      placeholder="Search by Pokémon name"
      id="search-bar"
      onChange={handleSearch}
    />
  );
}

function PokemonDetails({ pokemon }) {
  if (!pokemon) {
    return <p>No Pokémon selected!</p>;
  }

  return (
    <>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.image} alt={pokemon.name} />
      <p>Types: {pokemon.types.join(", ")}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Height: {pokemon.height}</p>
      <h3>Stats:</h3>
      <ul>
        {pokemon.stats.map((stat, index) => (
          <li key={index}>
            {stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </>
  );
}

function PokemonList({ pokemons }) {
  function handleClick(pokemon) {
    const infoContainer = document.getElementById("pokemon-info");
    ReactDOM.render(<PokemonDetails pokemon={pokemon} />, infoContainer);
  }

  return (
    <div id="pokemon-list">
      {pokemons.map((pokemon, index) => (
        <button
          className="list-item"
          key={index}
          onClick={() => handleClick(pokemon)}
        >
          {index + 1}. {pokemon.name}
          <img src={pokemon.image} alt={pokemon.name} />
        </button>
      ))}
    </div>
  );
}

function MyApp() {
  return (
    <>
      <div id="search">
        <MySearch />
      </div>
      <div id="content">
        <PokemonList pokemons={pokemon_list} />
        <div id="pokemon-info">
          <p>Search for a Pokémon!</p>
        </div>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyApp />);
