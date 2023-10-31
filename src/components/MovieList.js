import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Input, List, ListItem, ListItemText, Typography } from '@mui/material';
import MovieCard from './MovieCard';
import { Card } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Container, Grid, Typoraphy } from "@mui/material";

const apiKey = 'c9da9e7d';

const MovieList = ({ nominateMovie, isMovieNominated, nominatedMovies }) => {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const searchMovies = async () => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}&type=movie`);
      if (response.data.Search) {
        setSearchResults(response.data.Search);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  useEffect(() => {
    searchMovies();
  }, []);

  const filteredSearchResults = searchResults.filter((movie) => !isMovieNominated(movie));

  
const cardStyles = {
    background: '#000000', 
    minHeight:"90vh"  
  };

  const textFieldStyles = {
    width: '100%',
    background: '#ffffff1f', 
    borderRadius: '4px',

    '&:focus': {
      background: 'lightyellow',
      color: '#FFFFFF', 
    },
    '& .MuiOutlinedInput-input': {
        color: '#FFFFFF', 
      },

   

      '& .MuiInputLabel-root': {
        color: '#FFFFFF', 
      },
      
  };
  
  return (
    <Card style={cardStyles} sx={{p:2}}>
    <Box sx={{textAlign:'center'}}>
      <Typography >Search Movies</Typography>
      <Box display="flex" justifyContent="space-between" alignItems="center" gap="4%" pt="40px">
      <TextField 
      label="Search movie title" variant="outlined"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={textFieldStyles}
     
      />
      <Button variant="contained" onClick={searchMovies} >
        Search
      </Button>
      </Box>
      <Grid container spacing={2} pt="40px">
      {filteredSearchResults.map((movie) => (
        <Grid item xs={6} sm={6} md={4} key={movie.imdbID}>
          <MovieCard
            title={movie.Title}
            year={movie.Year}
            poster={movie.Poster}
            onNominate={() => nominateMovie(movie)}
            isNominated={isMovieNominated(movie)}
          />
        </Grid>
      ))}
    </Grid>
    </Box>
    </Card>

  );
};

export default MovieList;