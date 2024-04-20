import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SelectOption() {
  const [option, setOption] = React.useState('people');

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Option</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={option}
          label="Option"
          onChange={handleChange}
        >
          <MenuItem value="people">People</MenuItem>
          <MenuItem value="planets">Planets</MenuItem>
          <MenuItem value="starships">Starships</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectOption;