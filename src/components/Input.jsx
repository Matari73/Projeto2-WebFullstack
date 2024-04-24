import React, { useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { SearchContext } from '../context/SearchContext'; 

function Input({ onSearch }) {
    const { search, setSearch } = useContext(SearchContext); 

    const handleInputChange = (event) => {
        const searchText = event.target.value;
        setSearch((prevSearch) => ({ ...prevSearch, text: searchText })); 
    };

    const handleSearchClick = () => {
        onSearch(); 
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ margin: '0 auto', display: 'inline-block' }}>
                <TextField
                    id="outlined-basic"
                    label="Enter a name"
                    variant="outlined"
                    value={search.text} 
                    onChange={handleInputChange}
                    style={{ margin: '10px auto', display: 'block', }}
                />
            </div>
            <Stack spacing={2} direction="row" justifyContent="center">
                <Button
                    style={{ backgroundColor: '#e5b13a', margin: '15px auto' }}
                    variant="contained"
                    onClick={handleSearchClick}
                >
                    Search
                </Button>
            </Stack>
        </div>
    );
}

export default Input;
