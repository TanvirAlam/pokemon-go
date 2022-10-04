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

export const pagesClicked = async (props: any) => {
    const { direction, setLoaded, setPokemonList, setNewPokemonList, ItemPerPage, filterList, navigateTo } = props;
    let currentUrlParams = new URLSearchParams(window.location.search);
    let currentPageNum = Number(currentUrlParams.get("page"));
    if (!currentPageNum) {
        currentPageNum = 1;
    }
    if (direction === "next") {
        currentPageNum = currentPageNum + 1;
    } else if (direction === "prev" && currentPageNum !== 1) {
        currentPageNum = currentPageNum - 1;
    } else {
        currentPageNum = 1;
    }
    currentUrlParams.set("page", currentPageNum.toString());
    navigateTo(`?page=${currentPageNum}`);

    !filterList ?
        fetchPokemon({ setLoaded, setPokemonList, setNewPokemonList, ItemPerPage }) :
        handleFilterList({ setNewPokemonList, ItemPerPage, filterList });
}

export const fetchPokeName = async (props: any) => {
    const { setIsLoaded, setPokeSpeciesData, setPokeData } = props;

    setIsLoaded(false);

    const pokeName = window.location.pathname.split('/')[2];
    const lowerCasePokeName = pokeName.toLowerCase();

    try {
        const { data } = await apiClient.get(`pokemon/${lowerCasePokeName}/`);
        const { data: speciesData } = await apiClient.get(`pokemon-species/${data.id}/`);

        setPokeSpeciesData(speciesData);
        setPokeData(data);
        setIsLoaded(true);
    } catch (error: any) {
        setIsLoaded(true);
    }
}

export const fetchPokeTypes = async (props: any) => {
    const { setLoading, setTypesData, setAbilitiesData, types, abilities } = props;
    setLoading(true);
    getPokeTypes({ types, setTypesData });
    getPokeAbilities({ abilities, setAbilitiesData });
    setLoading(false);
}

const getPokeTypes = async ({ types, setTypesData }: any) => {
    const typesArray = [];
    for (const { type } of types) {
        const { data } = await apiClient.get(type.url);
        typesArray.push(data);
    }
    const totalEffectives: any = getEffectives(typesArray);
    setTypesData(totalEffectives);
}

const getPokeAbilities = async ({ abilities, setAbilitiesData }: any) => {
    const abilitiesArray: any = [];
    for (const { ability, is_hidden } of abilities) {
        const { data } = await apiClient.get(ability.url);
        const abilityData = buildAbility(data, is_hidden);
        abilitiesArray.push(abilityData);
    }
    setAbilitiesData(abilitiesArray);
}

const buildAbility = (data: { name?: any; effect_entries?: any; }, is_hidden: any) => {
    const { effect_entries } = data;
    const englishAbility = effect_entries.find(
        ({ language }: any) => language.name === "en"
    );
    return {
        hiddenAbility: is_hidden,
        abilityText: englishAbility.short_effect,
        name: data.name,
    };
};

const covertToArrayOfNames = (array: { name: any; }[]) => {
    return array.map(({ name }) => name);
};

const getEffectives = (types: any[]) => {
    const typeEffectives = types.reduce((acc, type) => {
        // group all effectives together
        const { damage_relations } = type;
        const {
            double_damage_to,
            double_damage_from,
            half_damage_from,
            half_damage_to,
            no_damage_from,
        } = damage_relations;
        acc.superEffective = acc.superEffective
            ? acc.superEffective.concat(covertToArrayOfNames(double_damage_to))
            : covertToArrayOfNames(double_damage_to);

        acc.superWeak = acc.superWeak
            ? acc.superWeak.concat(covertToArrayOfNames(double_damage_from))
            : covertToArrayOfNames(double_damage_from);

        acc.halfWeak = acc.halfWeak
            ? acc.halfWeak.concat(covertToArrayOfNames(half_damage_from))
            : covertToArrayOfNames(half_damage_from);

        acc.halfEffective = acc.halfEffective
            ? acc.halfEffective.concat(covertToArrayOfNames(half_damage_to))
            : covertToArrayOfNames(half_damage_to);
        acc.noDamageTo = acc.noDamageTo
            ? acc.noDamageTo.concat(covertToArrayOfNames(no_damage_from))
            : covertToArrayOfNames(no_damage_from);
        return acc;
    }, {});

    typeEffectives.superEffective = typeEffectives.superEffective.filter(
        (name: any) => {
            return !typeEffectives.halfEffective.includes(name);
        }
    );

    typeEffectives.superWeak = typeEffectives.superWeak.filter(
        (name: any) => {
            return (
                !typeEffectives.halfWeak.includes(name) &&
                !typeEffectives.noDamageTo.includes(name)
            );
        }
    );

    typeEffectives.halfEffective = typeEffectives.halfEffective.filter(
        (name: any) => {
            return !typeEffectives.superEffective.includes(name);
        }
    );

    typeEffectives.halfWeak = typeEffectives.halfWeak.filter(
        (name: any) => {
            return !typeEffectives.superWeak.includes(name);
        }
    );

    return typeEffectives;
};