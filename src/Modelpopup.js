import { ClosedCaption } from '@mui/icons-material'
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'

const Modelpopup = () => {
const[open,openchange]=useState(false)

const functionopenpopup=()=>{
    openchange(true);
}
const closepopup=()=>{
    openchange(false);
}
  return (
    <div style={{marginTop:'5%', textAlign:'center'}}>
        <h1>MIU - Model Popup</h1>
        <Button onClick={functionopenpopup}  variant='contained' color='primary'>Open Popup</Button>
        <Dialog open={open} onClose={closepopup} fullWidth maxWidth="sm">
            <DialogTitle>User Registartion<IconButton onClick={closepopup} style={{float:"right"}}> <CloseIcon color='primary'></CloseIcon></IconButton></DialogTitle>
            <DialogContent>
                {/* <DialogContentText>This Screen about Userdetails</DialogContentText> */}
                <Stack spacing={2} margin={2}>
                    <TextField variant='outlined' label="User Name"></TextField>
                    <TextField variant='outlined' label="Password"></TextField>
                    <TextField variant='outlined' label="Email"></TextField>
                    <TextField variant='outlined' label="Phone"></TextField>
                    <FormControlLabel control={<Checkbox defaultChecked color='primary'></Checkbox>} label="Agree Terms & Condition"></FormControlLabel>
                    <Button color='primary' variant='contained'>Submit</Button>
                </Stack>
            </DialogContent>
            <DialogActions>
                {/* <Button onClick={closepopup} color='error' variant='contained'>Close</Button> */}
            </DialogActions>
        </Dialog>
    </div>
  )
}

export default Modelpopup