import styled from 'styled-components'
import { Box, Text } from "@chakra-ui/layout"

export const DetailContainer = styled(Box)`
    position: relative;
    max-width: 400px;
    top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: inset 5px 5px 5px rgba(0,0,0,0.05),
              inset -5px -5px 5px rgba(255,255,255,0.5),
              5px 5px 5px rgba(0,0,0,0.05),
              -5px -5px 5px rgba(255,255,255,0.5);
    border-radius: 15px;

    @media only screen and (min-width: 768px) {
        margin: 24px auto;
    }
`

export const PokeDetailHeader = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: grid;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    grid-column: 1;
    grid-row: 1;
    padding: 1rem;
    grid-template-columns: auto auto;
    align-items: center;
`

export const DetailNameTypeContainer = styled.div`
    display: flex;
    align-items: center;
    max-width: max-content;
    flex-wrap: wrap;
    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    background: linear-gradient(45deg, #efefef, #cecece);
    border-radius: 15px;
    padding: 10px;
`

export const PokeDetailName = styled(Text)`
    text-transform: capitalize;
    padding-right: 1rem;
`

export const PokeDetailHeaderTypesContainer = styled.div`
    flex: 100%;

    @media only screen and (min-width: 768px) {
        flex: 0%;
    }
`

export const DetailBodyContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const PokeSpriteContainer = styled.div`
    @media only screen and (min-width: 768px) {
        align-items: flex-start;
    }
`

export const LoadingContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`

export const TabContainer = styled.div`
    padding: 20px;
`