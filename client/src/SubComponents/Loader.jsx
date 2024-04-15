import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress size={24} color='inherit' />
    </Box>
  );
};

export default Loader;
