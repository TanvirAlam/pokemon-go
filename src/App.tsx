import React, { useState } from "react";
import { Routes ,Route } from "react-router";
import { useLocation, useNavigate } from 'react-router-dom';
import { PokemonNavBar } from "./components/navbar/NavBar";
import { PokeCalls } from "./components/pokecalls/PokeCalls";

function App() {
  const [typeFilters, setTypeFilters] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleFilters = (typeFilters: string) => {
    if (!typeFilters) {
      setTypeFilters("");
    }
    setTypeFilters(typeFilters);
  };

  return (
    <>
      <PokemonNavBar navigateTo={navigate} handleFilter={handleFilters} location="" />
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PokeCalls navigateTo={navigate} filterList={typeFilters} handleFilter={handleFilters} />}/>
          <Route path="/item-limit/:num" element={<PokeCalls navigateTo={navigate} filterList={typeFilters} handleFilter={handleFilters} />}/>
      </Routes>
    </>
  );
}

export default App;
