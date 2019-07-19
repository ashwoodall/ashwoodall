import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      {/*<Portfolio />*/}
      <Footer />
    </div>
  );
}

export default App;
