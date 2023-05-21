import React, { useState } from 'react';
import { CustomSearchContainer, SearchContent, Label, Input, SearchButton, SearchIcon } from './style.js';

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
    <SearchContent>
      <Input
          id="custom-search"
          placeholder={label ?? 'Pesquisar'}
          type="search"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <SearchButton
          className="search-icon"          
          onClick={handleSearch}          
        >
          <SearchIcon src="images/search-icon.svg" alt='pesquisar' />
        </SearchButton>
      </SearchContent>
  </CustomSearchContainer>
  );
};

export default SearchInput;