import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



function Input({ onChange, onSearch }) {
    const [searchText, setSearchText] = useState('');

    const handleInputChange = (event) => {
        const text = event.target.value;
        setSearchText(text);
        onChange(text);
    };

    const handleSearchClick = () => {
        onSearch();
    };    

    return (
        <div>
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch'},
            }}
            noValidate
            autoComplete="off"
            >
                <TextField
                    id="outlined-basic"
                    label="Enter a name"
                    variant="outlined"
                    value={searchText} 
                    onChange={handleInputChange}
                />
            </Box>
            <Stack spacing={2} direction="row">
                <Button
                    style={{ backgroundColor: '#e5b13a' }}
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
