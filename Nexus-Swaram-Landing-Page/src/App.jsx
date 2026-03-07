import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import FoundingTeam from "./components/FoundingTeam";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <FoundingTeam />
      <Footer />
    </>
  );
}

export default App