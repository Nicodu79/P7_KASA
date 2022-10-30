import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Apropos from "../src/pages/Apropos";
import Logement from "../src/pages/Logement";
import NoPage from "../src/pages/NoPage";
import "./assets/styles/App.css";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Logement/:id" element={<Logement />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;