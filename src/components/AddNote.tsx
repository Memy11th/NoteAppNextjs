import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function ActionButton() {


  return (
    <Box sx={{ position:'fixed' , bottom:'20px' , right:'5px'   }}>
        <Fab size="medium" color={'secondary'}  aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  );
};