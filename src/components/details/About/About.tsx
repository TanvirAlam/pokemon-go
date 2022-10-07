import React from 'react'
import { Text } from "@chakra-ui/react";

import { WeightHeightContainer } from './About.module'

export const About = ({height, weight}: any) => {
  const getHeight = () => {
    const heightInInches = height * 3.937;
    const heightInFeet = Number(heightInInches.toFixed(0)) / 12;
    const remainingInches = Number(heightInInches.toFixed(0)) % 12;
    return `${heightInFeet.toFixed(0)}.${remainingInches.toFixed(0)}`;
  };

  const weightInPounds = weight / 4.536;
  return (
    <WeightHeightContainer>
      <Text as='b' color='tomato'>Height</Text>
      <Text>{getHeight()} ft</Text>
      <Text as='b' color='tomato'>Weight</Text>
      <Text>{weightInPounds.toFixed(2)} lb</Text>
    </WeightHeightContainer>
  );
}
