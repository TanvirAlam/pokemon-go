import { Dispatch, SetStateAction } from "react";

export interface FetchPokemonProps {
    setLoaded: Dispatch<SetStateAction<boolean>>;
    ItemPerPage: number;
    setPokemonList: Dispatch<SetStateAction<never[]>>;
    filterList: {};
}