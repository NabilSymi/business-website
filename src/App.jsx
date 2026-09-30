import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Benefits from "./sections/Benefits";
import Services from "./sections/Services";
import Process from "./sections/Process";
import Portfolio from "./sections/Portfolio";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import CTA from "./sections/CTA";
import GetStarted from "./sections/GetStarted";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <Process />
        <Portfolio />
        <Pricing />
        <FAQ />
        <GetStarted />
        <CTA />
        <Footer />
      </main>
    </>
  );
}

export default App;