import React, { useState } from 'react';
import SelectOption from './SelectOption';
import Input from './Input';

function Search() {
  const [searchOption, setSearchOption] = useState('people'); 
  const [searchText, setSearchText] = useState(''); 

  const handleSearchOptionChange = (option) => {
    setSearchOption(option);
    console.log(option)
  };

  const handleSearchTextChange = (text) => {
    setSearchText(text);
    console.log(text)
  };

  const handleSearch = () => {
    const url = `https://swapi.dev/api/${searchOption}/?search=${searchText}`;
    console.log('URL de busca:', url);
  };

  return (
    <>
      <SelectOption onChange={handleSearchOptionChange} />
      <Input onChange={handleSearchTextChange} onSearch={handleSearch} />
    </>
  );
}

export default Search;