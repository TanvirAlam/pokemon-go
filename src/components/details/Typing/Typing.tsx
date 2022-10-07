import React, { useEffect, useState } from "react";
import { fetchPokeTypes } from '../../../utils/pokeResources';
import { Loading } from '../../loading/Loading'
import {
  Text,
  Tag,
  HStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Badge
} from "@chakra-ui/react";
import { Card } from "../../card/Card";

import { TypesListContainer, PokeDetailContainer } from './Typing.module'

interface TypesDataProps {
    superEffective: any;
    superWeak: any
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
    }, []);
  
  if (loading || !typesData) {
    return <Loading />;
  }

  console.log(typesData?.superWeak)
  return (
    <>
        <Card header="Type Effectiveness">
            <>
                <PokeDetailContainer>
                    <Text>Effectiveness:</Text>
                    <TypesListContainer>
                        <HStack spacing={4}>
                            {typesData.superEffective.map((name: string) => {
                                return (
                                    <Tag
                                        bgColor={`type.${name}`}
                                        key={name}
                                        size="md"
                                        variant="solid"
                                        borderRadius="full"
                                    >
                                        {name}
                                    </Tag>
                                );
                            })}
                        </HStack>
                    </TypesListContainer>
                </PokeDetailContainer>
            </>
        </Card>
        <Card header="Type Weekness">
            <>
                <PokeDetailContainer>
                    <Text>Weekness:</Text>
                    <TypesListContainer>
                        <HStack spacing={4}>
                            {typesData?.superWeak.map((name: string) => {
                                return (
                                    <Tag
                                        bgColor={`type.${name}`}
                                        key={name}
                                        size="md"
                                        variant="solid"
                                        borderRadius="full"
                                    >
                                        {name}
                                    </Tag>
                                );
                            })}
                        </HStack>
                    </TypesListContainer>
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
