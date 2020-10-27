import React,{useState} from 'react';
import {Paper,TextField} from '@material-ui/core';

const SearchBar = (props)=>{
    
    const [searchTerm , searchTermVal] = useState(props)

    const handleChange = (event)=> searchTermVal(event.target.value);
    
    const handleSubmit = (event)=>{
        // searchTermVal(even)
        // const { onFormSubmit } = props.onFormSubmit
       try{ props.onFormSubmit(searchTerm);
        event.preventDefault();
       } catch(err){
           console.log(err)
       }
    }
    return(
        <Paper elevation={6} style={{padding:"25px"}}>
            <form onSubmit={handleSubmit}>
                <TextField fullWidth label="Search..." onChange={handleChange} />
            </form>
        </Paper>
    )
}

export default SearchBar;