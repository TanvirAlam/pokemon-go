import React from 'react'
import { Text, Divider, Heading } from "@chakra-ui/react";

import { CardContainer, CardHeader, CardBody } from './Card.module'

export const Card = ({ type, header, children }: any) => {
  return (
    <CardContainer>
      <CardHeader>
        <Heading mb="1rem">{header}</Heading>
        <Divider />
      </CardHeader>
      <CardBody>
        {children}
      </CardBody>
    </CardContainer>
  )
}
