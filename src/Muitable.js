import { Maximize, TableRows } from '@mui/icons-material';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'

const Muitable = () => {
    const columns=[
        {id:"id",name:"Id"},
        {id:"name",name:"Name"},
        {id:"email",name:"Email"},
        {id:"phone",name:"Phone"}
    ]
    const handlechangepage=(event,newpage)=>{
        pagechange(newpage)
    }

    const handleRowsPerPage=(event)=>{
        rowperpagechange(+EventTarget.value)
        pagechange(0)
    }

    const[rows, rowchange]=useState([])
    const[page, pagechange]=useState(0)
    const[rowperpage, rowperpagechange]=useState(5)
    
useEffect(()=>{
    fetch("http://localhost:8000/employee").then(resp=>{
        return resp.json()
    }).then(resp=>{
        rowchange(resp)
    }).catch(e=>{
        console.log(e.message)
    })
},[])

  return (
    <div style={{marginTop:'5%', textAlign:'center'}}>
        <h1>MUI - Table & Pagenation</h1>

        <Paper sx={{width:'90%', marginLeft:'5%'}}>

        <TableContainer sx={{Maximize:'200px'}}>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        {columns.map((column)=>(
                            <TableCell style={{backgroundColor:'black', color: 'white'} } key={column.id}>{column.name}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows && rows
                    .slice(page*rowperpage, page*rowperpage*rowperpage)
                    .map((row,i)=>{
                        return(
                            <TableRow key={i}>
                                {columns && columns.map((column,i)=>{
                                    let value=row[column.id];
                                    return(
                                        <TableCell key={value}>{value}</TableCell>
                                    )
                                })}
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination rowsPerPageOptions={[5,10,15]} page={page}
        rowsPerPage={rowperpage}
        component="div"
      //  page={page}
        count= {rows.length}
        onPageChange={handlechangepage}
        onRowsPerPageChange={handleRowsPerPage}>

        </TablePagination>
        </Paper>

    </div>
  )
}

export default Muitable;