import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Input({ onChange, onSearch }) {
    const [searchText, setSearchText] = useState('');

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
        onChange(event.target.value);
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
                    value={searchText}
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
