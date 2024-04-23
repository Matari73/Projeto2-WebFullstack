import React, { useState, useMemo } from 'react';
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

    const memoizedHandleSearch = useMemo(() => {
        const fetchData = async () => {
            try {
                if (searchText.trim() !== '') {
                    const url = `https://swapi.py4e.com/api/${searchOption}/?search=${searchText}`;
                    const response = await fetch(url);
                    const data = await response.json();
                    setSearchResults(data);
                    setError(false);
                } else {
                    setSearchResults('');
                    setError(true);
                }
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
                setError(true);
            }
        };

        return fetchData;
    }, [searchOption, searchText]);

    return (
        <>
            <SelectOption onChange={handleSearchOptionChange} />
            <Input onChange={handleSearchTextChange} onSearch={memoizedHandleSearch} />
            {error && (
                <p style={{ textAlign: 'center' }}>
                    É necessário inserir um nome.
                </p>
            )}
            <Item data={searchResults} onSearch={memoizedHandleSearch} />
        </>
    );
}

export default Search;