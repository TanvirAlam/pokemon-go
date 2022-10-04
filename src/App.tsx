import React from "react";
import { Routes ,Route } from "react-router";
import { useLocation, useNavigate } from 'react-router-dom';
import { PokemonNavBar } from "./components/navbar/NavBar";
import { PokeCalls } from "./components/pokecalls/PokeCalls";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleFilters = (typeFilters: string) => {
    console.log('handleFilters')
  };

  return (
    <>
      <PokemonNavBar navigateTo={navigate} handleFilter={handleFilters} location="" />
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PokeCalls navigateTo={navigate} handleFilter={handleFilters} />}/>
      </Routes>
    </>
  );
}

export default App;
