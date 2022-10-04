import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { PokemonNavBar } from "./components/navbar/NavBar";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleFilters = (typeFilters: string) => {
    console.log('handleFilters')
  };

  return (
    <>
      <PokemonNavBar navigateTo={navigate} handleFilter={handleFilters} location="" />
    </>
  );
}

export default App;
