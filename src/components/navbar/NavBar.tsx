import React, { useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Select,
  Button,
  Box,
  IconButton,
  Menu,
  Radio, 
  RadioGroup,
  Stack
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { HamburgerMenuContainer, NavBar, MainNav, MainNavLists, SearchBarContainer } from './NavBar.module'

import { SearchBar } from '../searchBar/SearchBar'
import { Filter } from '../filter/Filter';

interface NavBarProps {
    navigateTo: any;
    handleFilter: (val: string) => void;
    location: string;
}

export const PokemonNavBar = ({navigateTo, handleFilter, location}: NavBarProps) => {
    const cardsPerPages = [
        { label: "10 per page", value: 10},
        { label: "20 per page", value: 20},
        { label: "50 per page", value: 50},
    ];
    const [showNav, setShowNav] = useState(false);
    const [itemPerPage, setItemPerPage] = useState(20);

    const handleClick = () => {
        let currentUrlParams = new URLSearchParams(window.location.search);
        currentUrlParams.set("page", "1");
        navigateTo(`?page=1`);
        setShowNav(false);
    };

    const updateItemPerPage = (numItem: number) => {
        let currentUrlParams = new URLSearchParams(window.location.search);
        currentUrlParams.set("page", "1");
        setItemPerPage(numItem)
        changeURL(itemPerPage)
    }

    const changeURL = useCallback((itemPerPage: any)=> {
        navigateTo(`/item-limit/${itemPerPage}`);
    },[itemPerPage])

    return (
        <NavBar>
            <Box bg="gray.800" h="60px">
                <HamburgerMenuContainer>
                    <IconButton
                        aria-label="menu"
                        icon={<HamburgerIcon />}
                        variant={"ghost"}
                        size="lg"
                        colorScheme="blackAlpha"
                        color="white"
                        className="navbar-toggle-btn"
                        onClick={() => setShowNav(true)}
                    />
                </HamburgerMenuContainer>
                <MainNav>
                    <MainNavLists>
                        <li>
                            <NavLink to="/">
                                Pokemon
                            </NavLink>
                        </li>
                         <li>
                            <Menu>
                                <RadioGroup value={itemPerPage}>
                                    <Stack direction='row'>
                                        {cardsPerPages.map(({label, value}) => (
                                            <Radio key={value} onChange={() => updateItemPerPage(value)} value={value}>{label}</Radio>
                                        ))}
                                    </Stack>
                                </RadioGroup>
                            </Menu>
                        </li>
                        <li>
                            <SearchBarContainer>
                                <SearchBar navigateTo={navigateTo} handleSearchClick={handleClick} />
                                <Filter
                                    handleFilter={handleFilter}
                                    handleFilterClick={handleClick}
                                    location={location}
                                />
                            </SearchBarContainer>
                        </li>
                    </MainNavLists>
                </MainNav>
                <Drawer
                    isOpen={showNav}
                    placement="right"
                    onClose={() => setShowNav(false)}
                >
                    <DrawerOverlay>
                        <DrawerCloseButton />
                        <DrawerContent>
                            <DrawerBody>
                                <NavLink to="/">
                                    <Button
                                        colorScheme="facebook"
                                        mb="2"
                                        variant="ghost"
                                        onClick={() => setShowNav(!showNav)}
                                    >
                                        Pokemon
                                    </Button>
                                </NavLink>
                                <Select onChange={handleClick}>
                                    {cardsPerPages.map(({label, value}) => (
                                        <option
                                            key={value}
                                            value={value}
                                            onClick={() => setShowNav(!showNav)}
                                        >
                                            {label}
                                        </option>
                                    ))}
                                </Select>
                            </DrawerBody>
                            <DrawerFooter>
                                <SearchBarContainer>
                                    <SearchBar navigateTo={navigateTo} handleSearchClick={handleClick} />
                                    <Filter
                                        handleFilter={handleFilter}
                                        handleFilterClick={handleClick}
                                        location={location}
                                    />
                                </SearchBarContainer>
                            </DrawerFooter>
                        </DrawerContent>
                    </DrawerOverlay>
                </Drawer>
            </Box>
        </NavBar>
    )
}
