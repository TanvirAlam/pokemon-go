import { extendTheme } from "@chakra-ui/react";

const pokeTypeColors = {
    grass: "#7AC74C",
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
};

export const theme = extendTheme({
    colors: {
        cyanBG: {
            100: "hsl(209, 18%, 30%)",
        },
        type: pokeTypeColors,
    },
    borders: pokeTypeColors,
    breakpoints: {
        sm: "320px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
    },
});