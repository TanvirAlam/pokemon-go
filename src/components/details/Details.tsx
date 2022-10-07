import React, { useState, useEffect } from "react";
import { Text } from "@chakra-ui/layout";
import { fetchPokeName } from '../../utils/pokeResources';
import {
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Tag,
  TagLabel,
  Divider,
} from "@chakra-ui/react";

import { 
    DetailContainer, 
    DetailBodyContainer,  
    DetailNameTypeContainer,
    PokeDetailHeader,
    PokeDetailName, 
    PokeDetailHeaderTypesContainer,
    PokeSpriteContainer,
    LoadingContainer,
    TabContainer
} from './Details.module'
import { Loading } from "../loading/Loading";
import { About } from "./About/About";
import { Stats } from "./Stats/Stats";
import { Typing } from "./Typing/Typing";

interface pokeSpeciesDataProps {
    flavor_text_entries: any;
}; 

interface pokeDataProps {
    id: string;
    name: string;
    height: any;
    weight: any;
    stats: any;
    types: any;
    abilities: any;
}; 

export const Details = ({location, match}: any): JSX.Element => {
    const [pokeData, setPokeData] = useState<pokeDataProps>();
    const [isLoaded, setIsLoaded] = useState(false);
    const [pokeSpeciesData, setPokeSpeciesData] = useState<pokeSpeciesDataProps>();

    useEffect(() => {
        fetchPokeName({setIsLoaded, setPokeSpeciesData, setPokeData});        
    }, [location.pathname]);

    if (!isLoaded) {
        return (
            <LoadingContainer>
                <Loading />
            </LoadingContainer>
        );
    }
    
    return (
        <DetailContainer>
            <PokeDetailHeader>
                <DetailNameTypeContainer>
                    <PokeDetailName>
                        {pokeData?.name}
                    </PokeDetailName>
                    <PokeDetailHeaderTypesContainer>
                        {pokeData?.types.map(({ type }: any) => {
                            return (
                                <Tag
                                    bgColor={`type.${type.name}`}
                                    key={type.name}
                                    size="lg"
                                    mr="8px"
                                    ml="8px"
                                    variant="solid"
                                    borderRadius="full"
                                >
                                    <TagLabel overflow="initial" textTransform="capitalize">
                                        {type.name}
                                    </TagLabel>
                                </Tag>
                            );
                        })}
                    </PokeDetailHeaderTypesContainer>
                </DetailNameTypeContainer>
                <Text fontSize="3xl" ml="auto">
                    #{pokeData?.id}
                </Text>
            </PokeDetailHeader>
            <Divider mb="1rem" />
            <DetailBodyContainer>
                <PokeSpriteContainer>
                    <Image
                        objectFit="cover"
                        boxSize="250px"
                        src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pokeData?.id
                            .toString()
                            .padStart(3, "0")}.png`}
                        alt={`${pokeData?.name} sprite`}
                    /> 
                </PokeSpriteContainer>
            </DetailBodyContainer>
            <>
                <TabContainer>
                    <Tabs variant="soft-rounded" mt="1rem" colorScheme="cyan">
                    <TabList>
                        <Tab>About</Tab>
                        <Tab>Stats</Tab>
                        <Tab>Types / Abilites</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <About
                                height={pokeData?.height}
                                weight={pokeData?.weight}
                            />
                        </TabPanel>
                        <TabPanel>
                            <Stats stats={pokeData?.stats} />
                        </TabPanel>
                        <TabPanel>
                            <Typing
                                types={pokeData?.types}
                                abilities={pokeData?.abilities}
                            />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                </TabContainer>
            </>
        </DetailContainer>
    )
}
