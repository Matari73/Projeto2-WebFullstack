import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SelectOption({ onChange }) {
  const [option, setOption] = React.useState('people');

  const handleChange = (event) => {
    const selectedOption = event.target.value;
    setOption(selectedOption);
    onChange(selectedOption);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <FormControl sx={{ minWidth: 120, textAlign: 'center' }}>
        <InputLabel id="demo-simple-select-label">Option</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={option}
          label="Option"
          onChange={handleChange}
          sx={{ minWidth: 232 }}
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
