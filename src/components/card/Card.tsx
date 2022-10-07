import React from 'react'
import { Divider, Heading } from "@chakra-ui/react";

import { CardContainer, CardHeader, CardBody } from './Card.module'

interface CardProps {
    header: string;
    children: React.ReactElement
}

export const Card = ({ header, children }: CardProps) => {
  return (
    <CardContainer>
      <CardHeader>
        <Heading>{header}</Heading>
        <Divider />
      </CardHeader>
      <CardBody>
        {children}
      </CardBody>
    </CardContainer>
  )
}
