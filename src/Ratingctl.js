import { Box, Rating } from '@mui/material'
import React, { useState } from 'react'

const Ratingctl = () => {
    const[value,valuechange]=useState(2);

    const[hvalue,hvaluechange]=useState(2);
  return (
    <div style={{marginTop:'5%', textAlign:'center'}}>
        <h1>MUI - Rating Controlls</h1>
        <Box sx={{'& > legend':{m:1}}}>
            <Rating value={value} onChange={(value, newvalue)=> {valuechange(newvalue)}} size='medium'></Rating>
            <br></br>
            <Rating value={value} readOnly size='medium'></Rating>
            <h2>Selected value is : {value}</h2>
            {/* <br></br>
            <Rating size='large'></Rating>
            <br></br>
            <Rating size='small'></Rating> */}
        </Box>
        <Box sx={{'& > legend':{m:2}}}>
            <Rating value={value} onChange={(value, newvalue)=> {valuechange(newvalue)}} size='medium' max={8}></Rating>
            <br></br>
            <Rating value={hvalue} precision={0.5} onChange={(hvalue, newvalue)=> {hvaluechange(newvalue)}} size='medium' max={8}></Rating>
            <h2>Selected value is : {hvalue}</h2>
            {/* <br></br>
            <Rating size='large'></Rating>
            <br></br>
            <Rating size='small'></Rating> */}
        </Box>
    </div>
  )
}

export default Ratingctl