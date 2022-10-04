import styled from 'styled-components'
import { IconButton } from "@chakra-ui/react";

export const PokeButtons = styled.div`
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #efefef;
    padding-top: 10px;
    padding-bottom: 10px;
`

export const PaginationButton = styled(IconButton)`
    margin-left: 15px;
    border-radius: 10px;
    border: none;
    color: #dadad9;
    height: 27px;
    width: 50px;
    cursor: pointer;
`