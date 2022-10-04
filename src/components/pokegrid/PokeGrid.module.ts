import styled from 'styled-components'

export const PokeGridContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-top: 80px;

    @media only screen and (min-width: 769px) {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    @media only screen and (min-width: 960px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (min-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }
`

export const PokeGridItem = styled.div`
    background-color: #f7fafc;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    box-shadow: 0 5px 15px hsla(0, 0%, 0%, 0.2);
    border-radius: 24%;
    transition: 0.5s ease-in-out;

    &:hover,
    &:focus-within {
        transform: translateY(-20px);
    }

    @media only screen and (min-width: 960px) {
        width: 250px;
        height: 250px;
    }    
`