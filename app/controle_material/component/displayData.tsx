import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, TextField } from '@mui/material'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { v4 as uuidv4 } from 'uuid';
import React from 'react'
import titleCase from './helpers'

function DisplayData({value, condition, name, edit, updateData}: {value: object, condition: string, name: string, edit: boolean, updateData: Function}) {

    const [changeableValue, setChangeableValue] = React.useState(value);

    function handleChange(itemindex:number){
        let key : string = Object.entries(value)
        .filter((item, index) => index ===itemindex)
        .map(([key,value] : [string, boolean])=> {return key})[0]

        let oldvalue : boolean = Object.entries(value)
        .filter((item, index) => index ===itemindex)
        .map(([key,value] : [string, boolean])=> {return value})[0]

        let newvalue = !oldvalue;

        let assign = {[key]: newvalue}

        let valuetoupdate = Object.assign(
            {},
            changeableValue,
            assign
        )

        setChangeableValue(valuetoupdate);
        
        updateData(valuetoupdate);

    }


    switch(condition)
    {
        case "visual":
            return (
                <>
                <div style={{display:"inline-block"}}>
                    <div style={{textAlign: "center"}}>
                        <strong>{name}</strong>
                </div>
                    <TableContainer>
                        <Table sx={{ maxWidth: "1cap" }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    {
                                        Object.entries(changeableValue).map(([key, value]) => (
                                            <TableCell align="center" key={uuidv4()}>{titleCase((key.split('_').join(' ')))}</TableCell>
                                        ))
                                    }
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                {
                                Object.entries(changeableValue).map(([key, value], index) => (
                                        <TableCell align="center" key={uuidv4()}>
                                            <Button disabled={!edit} onClick={()=>(handleChange(index))}>
                                                {value === true ? <CheckBoxIcon/>: <CheckBoxOutlineBlankIcon/>}
                                            </Button>
                                        </TableCell>
                                ))
                                }
                                </TableRow>
                            </TableBody>
                         </Table>
                    </TableContainer>
                    </div>
                </>
            )
        case "numerical":
            return (
                <div style={{display:"inline-block"}}>
                <div style={{textAlign: "center"}}>
                    <strong>{name}</strong>
                </div>
                    <TableContainer>
                        <Table sx={{ maxWidth: "1cap" }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    {
                                        Object.entries(value).map(([key, value]) => (
                                            <TableCell align="center" key={uuidv4()}>{titleCase((key.split('_').join(' ')))}</TableCell>
                                        ))
                                    }
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                {
                                Object.entries(value).map(([key, value]) => (
                                        <TableCell align="center" key={uuidv4()}>
                                            <textarea style={{background: edit === false ? "rgba(0,0,0,0)" : "",
                                                    border: edit === false ? "none" : "1px solid black",
                                                    outline: edit === false ? 0 : "", cursor: edit === false ? "text" : "",
                                                    resize: edit === false ? "none" : "vertical", width: "4cap" }} 
                                                    readOnly={!edit} defaultValue={value}></textarea>
                                        </TableCell>
                                ))
                                }
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            )  
        case "visual_quim":
            return (
            <div>    
            <div style={{textAlign: "center"}}>
                <strong>{name}</strong>
            </div>
                <TableContainer>
                    <Table sx={{ maxWidth: "1cap" }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {
                                    Object.entries(value).map(([key,value], index) => (
                                        <TableCell align="center" key={uuidv4()}>{titleCase(key)}</TableCell>
                                    ))
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >   
                            { Object.entries(value).map(([key,value]) => (
                                    <TableCell component="th" scope="row" align="center" key={uuidv4()}>
                                            <textarea style={{background: edit === false ? "rgba(0,0,0,0)" : "",
                                            border: edit === false ? "none" : "1px solid black",
                                            outline: edit === false ? 0 : "", cursor: edit === false ? "text" : "",
                                            resize: edit === false ? "none" : "vertical", width: "4cap" }} 
                                            readOnly={!edit} defaultValue={value["Min."] === null ? 0: value["Min."]}></textarea>
                                    </TableCell>
                            ))} 
                            </TableRow>   
                            <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >   
                            { Object.entries(value).map(([key,value]) => (
                                    <TableCell component="th" scope="row" align="center" key={uuidv4()}>
                                            <textarea style={{background: edit === false ? "rgba(0,0,0,0)" : "",
                                            border: edit === false ? "none" : "1px solid black",
                                            outline: edit === false ? 0 : "", cursor: edit === false ? "text" : "",
                                            resize: edit === false ? "none" : "vertical", width: "4cap" }} 
                                            readOnly={!edit} defaultValue={value['Max.'] == null ? 0: value['Max.']}></textarea>
                                        
                                    </TableCell>
                            ))} 
                            </TableRow>   
                        </TableBody>
                    </Table>
                </TableContainer>
                </div>
            )      
    }
}

export default DisplayData
