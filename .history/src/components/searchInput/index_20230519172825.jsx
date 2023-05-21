import React, { useState } from 'react';
import { CustomSearchContainer, SearchContent, Label, Input, SearchButton } from './style.js';

const SearchInput = ({label, onSearch}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    // Lógica para executar a ação de pesquisa    
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
    <SearchContent>
     <Input
          id="custom-search"
          type="search"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <SearchButton
          className="search-icon"          
          onClick={handleSearch}          
        ><img src="images/search-icon.svg" alt='pesquisar'/></SearchButton>
     </SearchContent>
  </CustomSearchContainer>
  );
};

export default SearchInput;