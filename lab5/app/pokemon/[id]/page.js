import PokemonDetails from "../../components/PokemonDetails";
import Navigation from "@/app/components/Navigation";
import Link from "next/link";

export default function IdPage({ params }) {
  return (
    <>
      <Navigation></Navigation>
      <div id="breadcrumbs">
        <Link href="/">Home</Link>
        <p>&gt;</p>
        <Link href="/pokemon">Pokemons</Link>
        <p>&gt;</p>
        <Link href={`/pokemon/${params.id}`}>{params.id}</Link>
      </div>
      <div id="pokemons">
        <PokemonDetails id={params.id} />
      </div>
    </>
  );
}
