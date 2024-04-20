import React, { useState } from 'react';
import SelectOption from './SelectOption';
import Input from './Input';
import Item from './Item';

function Search() {
    const [searchOption, setSearchOption] = useState('people');
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState(null);
    const [error, setError] = useState(false);


    const handleSearchOptionChange = (option) => {
        setSearchOption(option);
    };

    const handleSearchTextChange = (text) => {
        setSearchText(text);
    };

    const handleSearch = () => {
        if (searchText.trim() !== '') {
            const fetchData = async () => {
                try {
                    const url = `https://swapi.dev/api/${searchOption}/?search=${searchText}`;
                    const response = await fetch(url);
                    const data = await response.json();
                    setSearchResults(data);
                    setError(false);
                } catch (error) {
                    console.error('Erro ao buscar dados:', error);
                    setError(true);
                }
            };

            fetchData();
        } else {
            setError(true);
        }
    };

    return (
        <>
            <SelectOption onChange={handleSearchOptionChange} />
            <Input onChange={handleSearchTextChange} onSearch={handleSearch} />
            {error && <p>É necessário inserir um nome.</p>}
            <Item data={searchResults} onSearch={handleSearch} />
        </>
    );
}

export default Search;