import React, { useState, useEffect } from 'react';
import SelectOption from './SelectOption';
import Input from './Input';

function Search() {
  const [searchOption, setSearchOption] = useState('people'); 
  const [searchText, setSearchText] = useState('');
  const [searchUrl, setSearchUrl] = useState('');

  const handleSearchOptionChange = (option) => {
    setSearchOption(option);
    console.log(option)
  };

  const handleSearchTextChange = (text) => {
    setSearchText(text);
    console.log(text)
  };

  useEffect(() => {
    const url = `https://swapi.dev/api/${searchOption}/?search=${searchText}`;
    setSearchUrl(url);
  }, [searchOption, searchText]);

  const handleSearch = () => {
    fetch(searchUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Falha ao buscar os dados');
            }
            return response.json();
        })
        .then(data => {
            console.log('Dados retornados:', data);
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
        });
  };

  return (
    <>
      <SelectOption onChange={handleSearchOptionChange} />
      <Input onChange={handleSearchTextChange} onSearch={handleSearch} />
    </>
  );
}

export default Search;