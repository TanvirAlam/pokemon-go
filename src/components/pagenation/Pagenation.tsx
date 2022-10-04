import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import { PokeButtons, PaginationButton } from './Pagenation.module'

export const Pagenation = ({ handlePagesClick }: any) => {
  return (
    <PokeButtons>
        <PaginationButton
            onClick={() => handlePagesClick("prev")}
            icon={<ChevronLeftIcon />}
            colorScheme="green"
            size="lg"
            borderRadius="16px"
            aria-label="previous button"
        />

        <PaginationButton
            onClick={() => handlePagesClick("next")}
            icon={<ChevronRightIcon />}
            colorScheme="green"
            borderRadius="16px"
            size="lg"
            aria-label="next button"
        />
    </PokeButtons>
  )
}
