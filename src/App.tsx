import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
