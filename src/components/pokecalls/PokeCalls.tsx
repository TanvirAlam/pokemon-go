import React, { useState, useEffect } from "react";
import { fetchPokemon } from '../../utils/pokeResources';
import { PokeGrid } from "../pokegrid/PokeGrid";

export const PokeCalls = ({ navigateTo, filterList, handleFilter }: any) => {
    const [pokemonList, setPokemonList] = useState([]);
    const urlNum = parseInt(window.location.pathname.split('/')[2])
    const ItemPerPage = urlNum ? urlNum : 20;

    useEffect(() => {
        fetchPokemon({setPokemonList, ItemPerPage});
    }, [ItemPerPage]);
    
    return (
        <>
            <PokeGrid pokemonList={pokemonList} />
        </>
    );
}
