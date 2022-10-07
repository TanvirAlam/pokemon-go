import React, { useState } from "react";
import {
  Checkbox,
  CheckboxGroup,
  Grid,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import { types } from '../../utils/pokeResources';
import { ViewIcon } from "@chakra-ui/icons";
import { FilterContainer, FilterButton } from './Filter.module'

interface FilterProps {
    handleFilter: (val: {}) => void;
    location: string;
}

export const Filter = ({ handleFilter, location }: FilterProps) => {
    const [filterBoxes, setFilterBoxes] = useState({});
    const [showFilters, setShowFilters] = useState(false);

    const handleFilterChange = (event: { target: any, preventDefault: () => void; }) => {
        const { value, checked } = event.target;    
        setFilterBoxes({...filterBoxes, [value] : checked });
    };

    const submitFilters = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        handleFilter(filterBoxes);
        setShowFilters(false);
    };

    const handleClearFilters = () => {
        setFilterBoxes([]);
        handleFilter([]);
        setShowFilters(false);
    };

    return (
    <FilterContainer>
        <Popover isOpen={showFilters}>
            <PopoverTrigger>
                <Button
                    colorScheme="yellow"
                    onClick={() => setShowFilters(!showFilters)}
                    rightIcon={<ViewIcon />}
                >
                Filter
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverBody>
                    <CheckboxGroup>
                        <Grid templateColumns="repeat(2, 1fr)" gap="4px">
                            {types.map((type, i) => {
                                return (
                                    <Checkbox colorScheme='red' value={type} key={type} onChange={(e) => handleFilterChange(e)}>
                                        {type}
                                    </Checkbox>
                                );
                            })}
                        </Grid>
                    </CheckboxGroup>
                    <FilterButton>
                        <Button colorScheme="facebook" onClick={submitFilters}>
                            {" "}Done{" "}
                        </Button>
                        <Button colorScheme="facebook" onClick={handleClearFilters}>
                            Clear
                        </Button>
                    </FilterButton>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    </FilterContainer>
  )
}
