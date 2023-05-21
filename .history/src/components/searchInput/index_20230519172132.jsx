import React, { useState } from 'react';
import { CustomSearchContainer, Label, Input, SearchIcon } from './style.js';

const SearchInput = ({label, onSearch}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    // Lógica para executar a ação de pesquisa
    console.log('Realizar pesquisa:', searchValue);
    onSearch(searchValue);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  
  return (
   <CustomSearchContainer> 
    <Label htmlFor="custom-search">{label}</Label>
     <SearchInput>
        <Input
          id="custom-search"
          type="search"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <SearchIcon
          className="search-icon"
          src="images/search-icon.svg"
          onClick={handleSearch}
          alt='pesquisar'
        />
      </SearchInput>
  </CustomSearchContainer>
  );
};

export default SearchInput;