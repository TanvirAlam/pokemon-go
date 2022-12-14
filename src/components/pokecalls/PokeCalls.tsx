import React, { useState, useEffect, SetStateAction } from "react";
import { fetchPokemon, handleFilterList, pagesClicked } from '../../utils/pokeResources';
import { LoadingContainer } from "../loading/Loading.module";
import { Pagenation } from "../pagenation/Pagenation";
import { PokeGrid } from "../pokegrid/PokeGrid";

interface PokeCallsProps {
    navigateTo: (val: {}) => void;
    filterList: {};
}

export const PokeCalls = ({ navigateTo, filterList }: PokeCallsProps) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [newPokemonList, setNewPokemonList] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const urlNum = parseInt(window.location.pathname.split('/')[2])
    const ItemPerPage = urlNum ? urlNum : 20;

    useEffect(() => {
        fetchPokemon({ setLoaded, ItemPerPage, setPokemonList, filterList });
    }, [ItemPerPage, filterList]);
    
    const handlePagesClick = (direction: any) => {
        pagesClicked({ 
            direction, 
            setLoaded, 
            setPokemonList, 
            setNewPokemonList, 
            ItemPerPage, 
            filterList, 
            navigateTo 
        });
    }; 

    return (
        <>
            {!loaded && <LoadingContainer />}
            <PokeGrid pokemonList={newPokemonList.length > 0 ? newPokemonList : pokemonList} />
            <Pagenation handlePagesClick={handlePagesClick} />
        </>
    );
}
