import React from "react";

import { BrowserRouter } from "react-router-dom";

import { Hero, Navbar } from "./components";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
