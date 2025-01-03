import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <>
      <Navigation></Navigation>
      <div id="welcome">
        <p>Welcome to Pokemon Database!</p>
        <p>Start by checking out our pokemon list.</p>
      </div>
    </>
  );
}
