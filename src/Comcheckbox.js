import { Checkbox, FormControl, FormControlLabel, colors } from '@mui/material'
import { pink } from '@mui/material/colors'
import React, { useState } from 'react'

import { Bookmark, BookmarkBorder, CheckBox, Favorite, FavoriteBorder } from '@mui/icons-material'

const Comcheckbox = () => {

    const[checked,checkchange]=useState(true)

    const changevalue=(event)=>{
        checkchange(event.target.checked)
        console.log(checked)
    }
  return (
    <div style={{marginTop:'5%', textAlign:'center'}}>
        <h1>MUI - Check Box Tutorial</h1>
        <div>
            <h3>Basic Checkbox</h3>
            <Checkbox></Checkbox>
            <Checkbox defaultChecked></Checkbox>
            <Checkbox disabled defaultChecked></Checkbox>
        </div>
        <div>
            <h3>Color Checkbox</h3>
            <Checkbox defaultChecked></Checkbox>
            <Checkbox defaultChecked color='secondary'></Checkbox>
            <Checkbox defaultChecked color='success'></Checkbox>
            <Checkbox defaultChecked color='error'></Checkbox>
            <Checkbox defaultChecked sx={{color:pink[800]}}></Checkbox>
        </div>
        <div>
            <h3>Size Checkbox</h3>
            <Checkbox defaultChecked></Checkbox>
            <Checkbox defaultChecked size='small' color='secondary'></Checkbox>
            <Checkbox defaultChecked size='medium' color='success'></Checkbox>
            <Checkbox defaultChecked color='error'></Checkbox>
            <Checkbox defaultChecked sx={{color:pink[800]}}></Checkbox>
        </div>
        <div>
            <h3>Icon Checkbox</h3>
            <Checkbox onChange={changevalue} defaultChecked icon={<FavoriteBorder></FavoriteBorder>} checkedIcon={<Favorite></Favorite>} color='secondary'></Checkbox>
            <Checkbox icon={<BookmarkBorder></BookmarkBorder>} checkedIcon={<Bookmark></Bookmark>} color='secondary'></Checkbox>
        </div>
        <div>
            <h3>Label Checkbox</h3>
            <FormControlLabel control={<CheckBox defaultChecked></CheckBox>} label="primary" labelPlacement='end'></FormControlLabel>
            <FormControlLabel required control={<CheckBox defaultChecked></CheckBox>} label="secondary" labelPlacement='top'></FormControlLabel>
            <FormControlLabel disabled control={<CheckBox defaultChecked></CheckBox>} label="required" labelPlacement='start'></FormControlLabel>
        </div>
    </div>
  )
}

export default Comcheckbox