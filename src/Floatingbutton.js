import { Box, Fab } from '@mui/material'
import React from 'react'

import AddIcon from '@mui/icons-material/Add'
import FavoriteIcon from '@mui/icons-material/Favorite'
import EditIcon from '@mui/icons-material/Edit'
import NavigationIcon from '@mui/icons-material/Navigation'
import UpIcon from '@mui/icons-material/KeyboardArrowUp'

const Floatingbutton = () => {
  return (
    <div style={{marginTop:'5%', textAlign:'center'}}>
        <h1>MUI - Floating Action Button</h1>
        <Box sx={{'& > :not(style)':{m:1}}}>
            <h1>FAB - Color</h1>
            <Fab color='primary'>
                <AddIcon></AddIcon>
            </Fab>
            <Fab color='secondary'>
                <AddIcon></AddIcon>
            </Fab>
            <Fab color='error'>
                <AddIcon></AddIcon>
            </Fab>
            <Fab color='success'>
                <AddIcon></AddIcon>
            </Fab>
            <Fab color='warning'>
                <AddIcon></AddIcon>
            </Fab>
        </Box>
        <Box sx={{'& > :not(style)':{m:1}}}>
            <h1>FAB - FavoriteIcon</h1>
            <Fab color='primary'>
                <FavoriteIcon></FavoriteIcon>
            </Fab>
            <Fab color='secondary'>
                <EditIcon></EditIcon>
            </Fab>
            <Fab color='error'>
                <NavigationIcon></NavigationIcon>
            </Fab>
            <Fab color='success'>
                <UpIcon></UpIcon>
            </Fab>
            <Fab color='warning'>
                <AddIcon></AddIcon>
            </Fab>
        </Box>

        <Box sx={{'& > :not(style)':{m:1}}}>
            <h1>FAB - Variant</h1>
            <Fab color='primary' variant='extended'>
                <FavoriteIcon></FavoriteIcon>Edit
            </Fab>
            <Fab color='secondary' variant='extended'>
                <EditIcon></EditIcon>
            </Fab>
            <Fab color='error' variant='extended'>
                <NavigationIcon></NavigationIcon>
            </Fab>
            <Fab color='success' variant='extended'>
                <UpIcon></UpIcon>
            </Fab>
            <Fab color='warning' variant='extended'>
                <AddIcon></AddIcon>
            </Fab>
        </Box>
    </div>
  )
}

export default Floatingbutton