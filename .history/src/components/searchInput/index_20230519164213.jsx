import React from 'react';
import './style.css'

const SearchInput = ({label, onSearch}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    // Lógica para executar a ação de pesquisa
    console.log('Realizar pesquisa:', searchValue);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <div className="custom-input">
      <label htmlFor="custom-input">{label}</label>
      <input id="custom-input" type='search' />
      <button>Pesquisar</button>
    </div>
  );
};

export default SearchInput;