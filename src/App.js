import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div className="app">
        <Navbar />
        <Home />
        <Footer />
    </div>
  );
};

export default App;
