import React, { useState, useContext, useMemo } from 'react';
import SelectOption from './SelectOption';
import Input from './Input';
import Item from './Item';
import { SearchContext } from '../context/SearchContext'; 

function Search() {
    const { search, setSearch } = useContext(SearchContext); 
    const [searchResults, setSearchResults] = useState(null);
    const [error, setError] = useState(false);

    const handleSearchOptionChange = (option) => {
        setSearch(option); 
    };

    const handleSearchTextChange = (text) => {
        setSearchText(text);
    };

    const memoizedHandleSearch = useMemo(() => {
        const fetchData = async () => {
            try {
                if (search.text.trim() !== '') {
                    const url = `https://swapi.py4e.com/api/${search.option}/?search=${search.text}`;
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
    }, [search]);

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
