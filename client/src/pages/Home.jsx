import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HomeNav from "../components/HomeNav";
import Pricing from "../components/Pricing";

const Home = () => {
  return (
    <div>
      <HomeNav />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
