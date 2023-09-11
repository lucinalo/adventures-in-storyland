import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Read from "./pages/Read";
import About from "./pages/About";
import Home from "./pages/Home";
import StoryCurrent from "./pages/StoryCurrent";

const App = () => {
  useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => { console.log(data)})
  }, [])
  
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/read" element={<Read />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/storycurrent" element={<StoryCurrent />} />
      </Routes>
      
  );
}

export default App;
