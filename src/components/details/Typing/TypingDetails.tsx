import React from 'react'
import {
  Text,
  Tag,
  HStack
} from "@chakra-ui/react";

interface TypingDetailsProps {
    heading: string;
    pokeData: [];
}

export const TypingDetails = (props: TypingDetailsProps) => {
    const {heading, pokeData} = props;

    return (
        <>
            <Text>{heading}</Text>
            <HStack spacing={4}>
                {pokeData.map((name: string) => {
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
        </>
    )
}
