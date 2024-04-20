import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



function Input() {
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
            <TextField id="outlined-basic" label="Enter a name" variant="outlined" />
        </Box>
        <Stack spacing={2} direction="row">
            <Button style={{ backgroundColor: '#e5b13a' }}  variant="contained">Search</Button>
        </Stack>
    </div>
  );
}

export default Input;
