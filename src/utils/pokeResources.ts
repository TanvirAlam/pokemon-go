import apiClient from './http-common';

export const types = [
    "fire",
    "water",
    "ice",
    "dragon",
    "fighting",
    "flying",
    "grass",
    "rock",
    "ground",
    "fairy",
    "poison",
    "dark",
    "ghost",
    "electric",
    "steel",
    "bug",
    "normal",
    "psychic",
];

let regexPat: RegExp = /\/pokemon\/(\d+)\//;

export const fetchPokemon = async (props: any) => {
    const { setPokemonList, ItemPerPage } = props;
    let offsetNum = 0;
    let currentUrlParams: URLSearchParams = new URLSearchParams(window.location.search);
    let currentPageNum: number = Number(currentUrlParams.get("page"));

    if (currentPageNum > ItemPerPage) { }
    if (!currentPageNum) {
        offsetNum = 0;
    } else {
        offsetNum = currentPageNum * ItemPerPage - ItemPerPage;
    }


    const res = await apiClient.get(`pokemon/?limit=${ItemPerPage}&offset=${offsetNum}`);
    let pokemon = res.data.results;
    pokemon.map((pokemon: any) => {
        let id = pokemon.url.match(regexPat)[1];
        return (pokemon["id"] = id);
    });

    setPokemonList(pokemon);
}