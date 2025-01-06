"use client";
import { useState } from "react";
import Navigation from "@/app/components/Navigation";
import Link from "next/link";

export default function FavouritesPage() {
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favourites")) || []
  );

  function handleClick(id) {
    const updatedFavourites = favourites.filter((fav) => fav.id !== id);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
    setFavourites(updatedFavourites);
  }

  return (
    <>
      <Navigation />
      <div id="favourites">
        {favourites.length > 0 ? (
          favourites.map((pokemon) => (
            <div className="favPokemon" key={pokemon.id}>
              <h3>{`${pokemon.id}. ${pokemon.name}`}</h3>
              <img src={pokemon.img} alt={pokemon.name} />
              <div id="fav-buttons">
                <button id="deleteFav" onClick={() => handleClick(pokemon.id)}>
                  Delete
                </button>
                <Link key={pokemon.id} href={`/pokemon/${pokemon.id}`}>
                  <button id="see-details">See details</button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No favourites yet!</p>
        )}
      </div>
    </>
  );
}
