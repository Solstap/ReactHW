import React from "react";
import PetList from './components/Pets/PetList';
import Counter from './components/Counter/Counter';
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>List of Pets</h1>
      <PetList />
      <Counter />
    </div>
  );
}

export default App;
