import Hero from "./components/Hero";
import HomeNav from "./components/HomeNav";
import "./App.css";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <HomeNav />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
