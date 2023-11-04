import React from 'react'
import { Box, Button, Stack, TextField } from '@mui/material';

const formpage = () => {
  return (
    <div className="App" style={{marginTop:'50px'}}>
      <Box component='form' sx={{'margin': '1%','border' : '2px solid #ccc'
    ,'.MuiInputBase-root':{'width': '100ch'},
    '.MuiButtonBase-root' : {'width': '100ch'}}}>
        <Stack direction={'column'} spacing={2} margin={2}>
          <TextField type='text' defaultValue={"Satheesh Kyatham"} variant='outlined' label="User Name"></TextField>
          <TextField type='password' variant='outlined' label="Password"></TextField>
          <TextField type='email' variant='outlined' label="Email"></TextField>
          <TextField type='tel' variant='outlined' label="Mobile"></TextField>
          <TextField multiline maxRows={3} minRows={2} variant='outlined' label="Address"></TextField>
          <TextField type='date' labe='Date'></TextField>
          <Button color='primary' variant='contained'>Submit</Button>
        </Stack>
      </Box>
    </div>
  )
}

export default formpage