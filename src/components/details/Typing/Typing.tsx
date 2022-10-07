import React, { useEffect, useState } from "react";
import { fetchPokeTypes } from '../../../utils/pokeResources';
import { Loading } from '../../loading/Loading'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Badge
} from "@chakra-ui/react";
import { Card } from "../../card/Card";

import { PokeDetailContainer } from './Typing.module'
import { TypingDetails } from "./TypingDetails";

interface TypesDataProps {
    superEffective: [];
    superWeak: []
}; 

export const Typing = ({ types, abilities }: any) => {
    const [typesData, setTypesData] = useState<TypesDataProps>();
    const [abilitiesData, setAbilitiesData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchPokeTypes({
            setLoading, 
            setTypesData, 
            setAbilitiesData, 
            types, 
            abilities
        });
    }, [abilities, types]);
  
  if (loading || !typesData) {
    return <Loading />;
  }

  return (
    <>
        <Card header="Type Effectiveness">
            <>
                <PokeDetailContainer>
                    <TypingDetails heading="Effectiveness" pokeData={typesData?.superEffective} />
                </PokeDetailContainer>
            </>
        </Card>
        <Card header="Type Weekness">
            <>
                <PokeDetailContainer>
                    <TypingDetails heading="Weekness" pokeData={typesData?.superWeak} />
                </PokeDetailContainer>
            </>
        </Card>
        <Card header="Abilities">
            <>
                <PokeDetailContainer>
                    <Accordion allowMultiple>
                        { abilitiesData && abilitiesData.map(({ index, abilityText, hiddenAbility, name }: any) => {
                            return (
                                <AccordionItem key={index}>
                                        <AccordionButton>
                                            <Box textTransform="capitalize" flex="1" textAlign="left">
                                                {name}
                                                {hiddenAbility ? (
                                                    <Badge ml="1rem" colorScheme="purple">
                                                        Hidden Ability
                                                    </Badge>
                                                ) : null}
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    <AccordionPanel pb={4}>{abilityText}</AccordionPanel>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                </PokeDetailContainer>
            </>
        </Card>
    </>
  )
}
