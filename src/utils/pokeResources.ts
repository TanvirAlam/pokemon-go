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
    const { setPokemonList, setLoaded, ItemPerPage } = props;
    let offsetNum = 0;
    let currentUrlParams: URLSearchParams = new URLSearchParams(window.location.search);
    let currentPageNum: number = Number(currentUrlParams.get("page"));
    setLoaded(false);

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
    setLoaded(true);
}

export const handleFilterList = async (props: any) => {
    const { setNewPokemonList, ItemPerPage, filterList } = props;
    let endNum: number;
    let startNum: number;
    let currentUrlParams = new URLSearchParams(window.location.search);
    let currentPageNum = Number(currentUrlParams.get("page"));
    currentPageNum = parseInt(currentPageNum.toString());
    let pokeList: any = [];

    setNewPokemonList([]);

    if (!currentPageNum) {
        endNum = ItemPerPage;
        startNum = 0;
    } else {
        endNum = currentPageNum * ItemPerPage;
        startNum = endNum - ItemPerPage;
    }

    let filterPromises = Object.keys(filterList).map((filter: any) =>
        apiClient.get(`type/${filter}/`)
    );

    await Promise.all(filterPromises).then((all) => {
        const data = all.map((result) => result.data.pokemon);
        data.forEach((poke) =>
            poke.map((pokemon: any) => pokeList.push(pokemon.pokemon))
        );
    });

    pokeList.map((poke: any) => {
        let id = poke.url.match(regexPat)[1];
        return (poke["id"] = id);
    });
    let cutPokemon;

    if (startNum > pokeList.length) {
        cutPokemon = pokeList.slice(0, ItemPerPage);
    } else {
        cutPokemon = pokeList.slice(startNum, endNum);
        setNewPokemonList(cutPokemon);
    }
}