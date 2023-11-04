import { Autocomplete, Button, Grid, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Auto = () => {

    // const[value,valuechange]=useState({code:'USA',name:'USA', currency:'USD'})
    const[value,valuechange]=useState(null)
    const[emplist,emchange]=useState([])

    const country=[
                    {code:'IND',name:'India', currency:'INR'}
                    ,{code:'USA',name:'USA', currency:'USD'}
                    ,{code:'SG',name:'Singapore', currency:'SGD'}
                ]
    const defprops={
        // options:country,
        options:emplist,
        getOptionLabel:(options)=>options.id + " - " + options.name
    }

    const getdata=(data)=>{
        console.log(data.name)
    }

    const assigndata=() =>{
        valuechange({code:'SG',name:'Singapore', currency:'SGD'})
    }
useEffect(()=>{
    fetch('http://localhost:8000/employee').then(resp=>{
        return resp.json()
    }).then(res=>{
        emchange(res)
    }).catch(e=>{
        console.log(e.message);
    })
},[])
  return (
    <div  style={{marginTop:'5%'}}>
        <Grid container direction={'column'} alignItems={'center'} spacing={0}>
            <h1>Auto Tutorial</h1>
            <Stack sx={{width:300}} spacing={2}>
                <Autocomplete 
            // options={country}
            {...defprops}
                renderInput={(params) => (<TextField {...params} label="Country" variant='filled'></TextField>)}
                onChange={(event,value)=>getdata(value)}
                >
                </Autocomplete>

                <Autocomplete 
            // options={country}
            {...defprops}
                renderInput={(params) => (<TextField {...params} label="Country" variant='outlined'></TextField>)}
                onChange={(event,value)=>getdata(value)}
                >
                </Autocomplete>

                <Autocomplete 
            // options={country}
            freeSolo
            value={value}
            {...defprops}
                renderInput={(params) => (<TextField {...params} label="Country" variant='standard'></TextField>)}
                onChange={(event,value)=>getdata(value)}
                >
                </Autocomplete>
                <Button onClick={assigndata}>Assign Data</Button>
            </Stack>
        </Grid>
    </div>
  )
}
export default Auto
