"use client";
import { useState, useEffect } from "react";
import Navigation from "@/app/components/Navigation";
import { useSearchParams, useRouter } from "next/navigation";
import PokemonDetails from "../components/PokemonDetails";

async function getPokemonInfo(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  // if (!response.ok) throw new Error("Pokemon not found");
  const data = await response.json();
  const types = data.types.map((x) => x.type.name);
  const img = data.sprites.other.showdown.front_default;
  const stats = data.stats.map((stat) => [stat.stat.name, stat.base_stat]);
  return {
    name: data.name,
    types: types,
    img: img,
    id: data.id,
    stats: stats,
  };
}

export default function ComparePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const last_compared = JSON.parse(localStorage.getItem("compared")) || "";
  const p1_param = last_compared.pokemon1 || searchParams.get("p1") || "";
  const p2_param = last_compared.pokemon2 || searchParams.get("p2") || "";

  const [p1, setP1] = useState(p1_param);
  const [p2, setP2] = useState(p2_param);
  const [pokemonData, setPokemonData] = useState({
    p1: "",
    p2: "",
  });

  useEffect(() => {
    async function fetchData() {
      const p1Data = p1 ? await getPokemonInfo(p1) : "";
      const p2Data = p2 ? await getPokemonInfo(p2) : "";
      setPokemonData({ p1: p1Data, p2: p2Data });
    }
    fetchData();
  }, [p1, p2]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!p1 || !p2) {
      alert("Please choose two Pokémon to compare.");
      return;
    }
    const new_compared = { pokemon1: p1, pokemon2: p2 };
    localStorage.setItem("compared", JSON.stringify(new_compared));
    const query = new URLSearchParams({ p1, p2 }).toString();
    router.push(`/compare?${query}`);
  }

  function clearCompared() {
    const new_compared = { pokemon1: "", pokemon2: "" };
    localStorage.setItem("compared", JSON.stringify(new_compared));
    setP1("");
    setP2("");
    router.push("/compare");
  }

  return (
    <>
      <Navigation />
      <div id="choose">
        <form id="compare" onSubmit={handleSubmit}>
          <input
            type="text"
            name="p1"
            value={p1}
            onChange={(e) => setP1(e.target.value)}
            placeholder="Choose the first Pokémon:"
          />
          <input
            type="text"
            name="p2"
            value={p2}
            onChange={(e) => setP2(e.target.value)}
            placeholder="Choose the second Pokémon:"
          />
          <button type="submit">Submit</button>
        </form>
        <button id="clear" onClick={clearCompared}>
          Clear
        </button>
      </div>
      <div id="compared">
        <div className="pokemon-compared">
          {pokemonData.p1 ? (
            pokemonData.p1.error ? (
              <p>{pokemonData.p1.error}</p>
            ) : (
              <PokemonDetails id={pokemonData.p1.id} />
            )
          ) : (
            <p>Pick a Pokémon!</p>
          )}
        </div>

        <div className="pokemon-compared">
          {pokemonData.p2 ? (
            pokemonData.p2.error ? (
              <p>{pokemonData.p2.error}</p>
            ) : (
              <PokemonDetails id={pokemonData.p2.id} />
            )
          ) : (
            <p>Pick a Pokémon!</p>
          )}
        </div>
      </div>
    </>
  );
}
