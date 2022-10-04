import React, { useEffect, useState } from "react";
import { fetchPokeTypes } from '../../utils/pokeResources';
import { Loading } from '../loading/Loading'
import {
  Text,
  Tag,
  TagLabel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Badge,
} from "@chakra-ui/react";
import { Card } from "../card/Card";

import { TypesListContainer } from './DetailTyping.module'

interface TypesDataProps {
    superEffective: any;
    superWeak: any
}; 

export const DetailTyping = ({ types, abilities }: any) => {
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

  return (
    <>
        <Card header="Type effectiveness" type="types">
            <>
                <Text mb="1rem">2x weak against</Text>
                <TypesListContainer>
                    {typesData?.superWeak.map((name: any) => {
                        return (
                            <Tag
                                bgColor={`type.${name}`}
                                key={name}
                                size="sm"
                                variant="solid"
                                borderRadius="full"
                            >
                                <TagLabel key={name} textTransform="capitalize">
                                    {name}
                                </TagLabel>
                            </Tag>
                        );
                    })}
                </TypesListContainer>
            </>
            <>
                <Text mb="1rem">2x Effective against</Text>
                <TypesListContainer>
                    {typesData.superEffective.map(({ name }: any) => {
                        return (
                            <Tag
                                bgColor={`type.${name}`}
                                key={name}
                                size="sm"
                                variant="solid"
                                borderRadius="full"
                            >
                                <TagLabel textTransform="capitalize">{name}</TagLabel>
                            </Tag>
                        );
                    })}
                </TypesListContainer>
            </>
        </Card>
        <Card type="abilities" header="Abilities">
            <Accordion allowMultiple>
                { abilitiesData && abilitiesData.map(({ abilityText, hiddenAbility, name }: any) => {
                    return (
                    <AccordionItem key={name}>
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
        </Card>
    </>
  )
}
