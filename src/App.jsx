import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Logo from './components/Logo'
import Search from './components/Search';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#ffffff', height: '100vh' }}>
          <Logo />
          <Search />
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App