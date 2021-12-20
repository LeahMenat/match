import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function ItemDetails(props) {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
    setAge(event.target.value);
    };

    function sendCategory(){
    //--
    console.log("in sendCategory")
    // props.setX(5);
    // console.log(event.target.value);
    // props.getRequest('./products.json')
    // props.getRequest('http://127.0.0.1:5000/api/getProducts/132456/ילדים')
    props.getRequest(myCategory)
}

const [myCategory, setMyCategory] = useState('')

  return (
    <div className="ItemDetails">
        <div className="details">
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label" required>קטגוריה</InputLabel>
                    <Select 
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={myCategory}
                    onChange={(e)=>{setMyCategory(e.target.value);console.log("e: "+e.target.value+", category: "+myCategory)}}
                    label="Category"
                    >
                        <MenuItem value=""> <em>None</em></MenuItem>
                        <MenuItem value={"men"}>גברים</MenuItem>
                        <MenuItem value={"women"}>נשים</MenuItem>
                        <MenuItem value={"boys"}>ילדים</MenuItem>
                        <MenuItem value={"girls"}>ילדות</MenuItem>
                        <MenuItem value={"babies"}>תינוקות</MenuItem>
                    </Select>
                </FormControl>
                <Button type="button" onClick={sendCategory}>חפש לי משהו מתאים</Button>
            </Box>
        </div>   
    </div>
  );
}

export default ItemDetails;