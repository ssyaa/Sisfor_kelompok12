// src/App.js
import React from "react";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import './App.css';

function App() {
    return (
    <div className="App">
        <Hero />
        <Destinations />
    </div>
    );
}

export default App;
