import React from 'react'
import { Link } from "react-router-dom";
import { Image, Text } from "@chakra-ui/react";

import { PokeGridContainer, PokeGridItem } from './PokeGrid.module'

export const PokeGrid = ({pokemonList}: any) => {
    return (
        <PokeGridContainer>
            {
                pokemonList.map(({ name, id }: any) => (
                    <Link key={id} to={`/detail/${name}`}>
                        <PokeGridItem key={id}>

                            {
                                <div>
                                    <Image
                                        boxSize={{ sm: "50px", md: "100px", lg: "150px" }}
                                        objectFit="cover"
                                        src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${id.toString().padStart(3, "0")}.png`}
                                        alt={`${name} sprite`}
                                        fallbackSrc={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                                    />
                                    <Text color="gray.800" fontSize="lg" className="pokeName">
                                        {name} #{id}
                                    </Text>
                                </div>
                            }
                        </PokeGridItem>
                    </Link>
                ))
            }
        </PokeGridContainer>
    )
}
