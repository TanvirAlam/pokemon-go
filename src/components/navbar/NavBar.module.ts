import styled from 'styled-components'
import { device } from '../../devices';

export const HamburgerMenuContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    @media ${device.laptop} { 
        display: none;
    }

    @media ${device.desktop} {
        display: none;
    }
`

export const NavBar = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
`

export const MainNav = styled.div`
    max-height: 0;
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    height: 100%;
    -webkit-transition: opacity 300ms linear, 
    max-height 600ms linear;
    transition: opacity 300ms linear, 
    max-height 600ms linear;

    @media ${device.tablet} {
        max-height: 60px;
        visibility: visible;
    }
`

export const MainNavLists = styled.ul`
    position: relative;
    display: flex;
    color: white;
    justify-content: space-between;
    list-style: none;
    align-items: center;
    width: 100%;
    padding: 20px;
    font-weight: bold;
    visibility: hidden;
    opacity: 0;

    @media ${device.tablet} {
        flex-direction: row;
        max-height: 60px;
        visibility: visible;
        opacity: 1;
    }
`
export const SearchBarContainer = styled.div`
    color: hsl(210, 24%, 16%);
    display: -webkit-box;
    display: -ms-flexbox;
    display: grid;
    grid-template-columns: auto auto;
    gap: 1rem;
    justify-items: center;
    align-items: center;
    max-width: 400px;
`