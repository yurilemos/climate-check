import React, { useState } from 'react';
import './style.css'

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
    <div className="custom-search">
      <label htmlFor="custom-search">Pesquisar</label>
      <div className="search-input">
        <input
          id="custom-search"
          type="search"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          handleKeyDown={handleKeyDown}
        />
        <img
          className="search-icon"
          src="images/search-icon.svg"
          onClick={handleSearch}
          alt='pesquisar'
        />       
      </div>
    </div>
  );
};

export default SearchInput;