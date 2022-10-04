import React, { useState } from 'react'
import { Button, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import { SearchContainer } from './searchBar.module'; 

export const SearchBar = ({navigateTo, handleSearchClick}: any) => {
    const [searchQuery, setSearchQuery] = useState("");
    
    const handleChange = (event: { target: { value: any; }; }) => {
        const inputValue = event.target.value;
        setSearchQuery(inputValue);

        if (!inputValue) return "";
    };
    
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const value = searchQuery;
        setSearchQuery("");
        if (value) {
          handleSearchClick();
          navigateTo(`/detail/${searchQuery}`);
        }
    };

  return (
    <SearchContainer>
        <Input
          placeholder="Search Pokemon"
          value={searchQuery}
          onChange={handleChange}
          variant="flushed"
          color="gray.700"
          className="searchBar"
          maxW="250px"
          onKeyDown={(e) => (e.key === "Enter" ? handleSubmit(e) : null)}
        />
        <Button
          rightIcon={<SearchIcon />}
          colorScheme="green"
          onClick={handleSubmit}
          className="searchBtn"
        >
          Search
        </Button>
    </SearchContainer>
  )
}
