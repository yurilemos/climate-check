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
    <Label htmlFor="custom-search">Pesquisar</Label>
    </CustomSearchContainer>
  );
};

export default SearchInput;