"use client";
import * as React from "react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Navigation from "../components/Navigation";
import PokemonList from "../components/PokemonList";

export default function PokemonListPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const limit_param = searchParams.get("limit") || 20;
  const search_param = searchParams.get("search") || "";
  const type_param = searchParams.get("type") || "";
  const [formData, setFormData] = useState({
    type: type_param,
    search: search_param,
    limit: limit_param,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const query = new URLSearchParams(formData).toString();
    router.push(`/pokemon?${query}`);
  }

  return (
    <>
      <Navigation />
      <form id="filter" onSubmit={handleSubmit}>
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
          placeholder="Choose a type:"
        />
        <input
          type="text"
          name="search"
          value={formData.search}
          onChange={handleChange}
          placeholder="Search for a name:"
        />
        <input
          type="number"
          name="limit"
          value={formData.limit}
          onChange={handleChange}
          placeholder="Choose a limit:"
          min="1"
        />
        <button type="submit">Submit</button>
      </form>
      <div id="pokemon-list">
        <PokemonList
          limit={limit_param}
          search={search_param}
          type={type_param}
        />
      </div>
    </>
  );
}
