import React from 'react'
import { AppBar, Badge, Box, Button, Icon, IconButton, Stack, Toolbar} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MailIcon from '@mui/icons-material/Mail'
import Notifications from '@mui/icons-material/Notifications'
import { Link } from 'react-router-dom'

const Appheader = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <IconButton color='inherit'>
                    <MenuIcon></MenuIcon>
                </IconButton>
                <h2>MUI Tutorial</h2>
                <Box sx={{flexGrow:1}}></Box>
                <Stack direction={'row'} spacing={2}>
                    {/* <Button color='inherit'>Home</Button> */}
                    <Link to='/home'>Home</Link>
                    <Link to='/home'>Contact</Link>
                    <Link to='/form'>Form</Link>
                    <Link to='/auto'>AutoComplete</Link>
                    <Link to='/check'>Checkbox</Link>
                    <Link to='/modelpopup'>Popup</Link>
                    <Link to='/table'>Table</Link>
                    <Link to='/float'>Float</Link>
                    <Link to='/rating'>Ratingctl</Link>
                    <Link to='/alert'>Alert</Link>
                    
                    {/* <Button color='inherit'>Contact</Button>
                    <Button color='inherit'>Form</Button> */}

                    <IconButton color='inherit'>
                        <Badge badgeContent={10} color='error'>
                            <MailIcon></MailIcon>
                        </Badge>
                    </IconButton>

                    <IconButton color='inherit'>
                        <Badge badgeContent={7} color='error'>
                            <Notifications></Notifications>
                        </Badge>
                    </IconButton>
                    <IconButton color='inherit'>
                         <Badge badgeContent={10} color='error'>
                            <AccountCircle></AccountCircle>
                        </Badge>
                    </IconButton>
                </Stack>
            </Toolbar>
        </AppBar>
    </div>
  )
}
export default Appheader