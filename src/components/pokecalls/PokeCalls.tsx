import React, { useState, useEffect } from "react";
import { fetchPokemon, handleFilterList } from '../../utils/pokeResources';
import { LoadingContainer } from "../loading/Loading.module";
import { PokeGrid } from "../pokegrid/PokeGrid";

export const PokeCalls = ({ navigateTo, filterList, handleFilter }: any) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [newPokemonList, setNewPokemonList] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const urlNum = parseInt(window.location.pathname.split('/')[2])
    const ItemPerPage = urlNum ? urlNum : 20;

    useEffect(() => {
        if (Object.keys(filterList).length > 0) {
            handleFilterList({setNewPokemonList, ItemPerPage, filterList});
        } else {
            fetchPokemon({setPokemonList, setLoaded, ItemPerPage});
        }
    }, [ItemPerPage, filterList]);
    
    return (
        <>
            {!loaded && <LoadingContainer />}
            <PokeGrid pokemonList={newPokemonList.length > 0 ? newPokemonList : pokemonList} />
        </>
    );
}
