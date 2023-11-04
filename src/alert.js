import { Alert, Box, Collapse, IconButton } from '@mui/material'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'


const alert = () => {
    // const[open,SetOpen]=useState(false);
    //const[open,SetOpen] = useState(false);
  return (
    <div style={{marginTop:'5%', textAlign:'center', width:'30%', marginLeft:'35%'}}>
        <h1>MUI - Alert</h1>
        <Box sx={{'& > legend':{m:1}}}>
            <Collapse in={true}>
                <Alert action={<IconButton><CloseIcon></CloseIcon></IconButton>}>Saved Succesfully!</Alert>
            </Collapse>
           
            <br></br>
            <Alert severity='error'>Failed to Submit</Alert>
            <br></br>
            <Alert severity='info'>Failed to Submit</Alert>
            <br></br>
            <Alert severity='warning'>Failed to Submit</Alert>
        </Box>
        <h1>MUI - Variant</h1>
        <Box sx={{'& > legend':{m:1}}}>
            <Alert variant='outlined'>Saved Succesfully!</Alert>
            <br></br>
            <Alert severity='error' variant='filled'>Failed to Submit</Alert>
            <br></br>
            <Alert severity='info' variant='standard'>Failed to Submit</Alert>
            <br></br>
            <Alert icon={false} severity='warning'>Failed to Submit</Alert>
        </Box>
    </div>
  )
}

export default alert
