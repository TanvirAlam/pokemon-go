import React, { useState } from "react";
import { Routes ,Route } from "react-router";
import { useLocation, useNavigate } from 'react-router-dom';
import { Details } from "./components/details/Details";
import { PokemonNavBar } from "./components/navbar/NavBar";
import { PokeCalls } from "./components/pokecalls/PokeCalls";

function App() {
  const [typeFilters, setTypeFilters] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const handleFilters = (typeFilters: React.SetStateAction<{}>) => {
    if (!typeFilters) {
      setTypeFilters({});
    }
    setTypeFilters(typeFilters);
  };

  return (
    <>
      <PokemonNavBar navigateTo={navigate} handleFilter={handleFilters} location="" />
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PokeCalls navigateTo={navigate} filterList={typeFilters} />}/>
          <Route path="/item-limit/:num" element={<PokeCalls navigateTo={navigate} filterList={typeFilters} />}/>
          <Route path="/detail/:name" element={<Details location={location} match={typeFilters} />}/>
      </Routes>
    </>
  );
}

export default App;
