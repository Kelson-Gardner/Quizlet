import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './TopBar.css';

export default function TopBar() {
  return (
    <Paper
      component="form"
      sx={{ 
        p: '2px 4px',
        display: 'flex', 
        alignItems: 'center', 
        width: '40%', 
        marginLeft: 10,
        backgroundColor: 'rgb(175,230,230,.2)',
        borderRadius: '7.5px',
        height: '35px' }}
    >
      <IconButton type="button" sx={{ p: '5px', color: 'rgb(230,230,230, .7)' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, color: 'rgb(255,255,255)', fontSize: '15px', fontFamily: 'Outfit', }}
        className='search-bar'
        placeholder="Search for flashcards"
        inputProps={{ 'aria-label': 'Search for flashcards' }}
        />
    </Paper>
  );
}

