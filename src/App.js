// App.js
import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Nav from "./components/Nav";
import NominationList from "./components/NominationList";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from '@mui/material';

const App = () => {
  const [nominatedMovies, setNominatedMovies] = useState([]);

  const nominateMovie = (movie) => {
    if (!isMovieNominated(movie) && nominatedMovies.length < 5) {
      setNominatedMovies([...nominatedMovies, movie]);
    }
  };

  const removeNomination = (movie) => {
    const updatedNominatedMovies = nominatedMovies.filter(
      (nominatedMovie) => nominatedMovie.imdbID !== movie.imdbID
    );
    setNominatedMovies(updatedNominatedMovies);
  };

  const isMovieNominated = (movie) => {
    return nominatedMovies.some(
      (nominatedMovie) => nominatedMovie.imdbID === movie.imdbID
    );
  };

  return (
    <>
      <Nav />
      <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
      <Grid item xs={12}lg={6}>
        <MovieList
          nominateMovie={nominateMovie}
          isMovieNominated={isMovieNominated}
          nominatedMovies={nominatedMovies}
        />
      </Grid>
      <Grid item xs={12}lg={6}>
        <NominationList
          nominatedMovies={nominatedMovies}
          removeNomination={removeNomination}
          maxNominations={5}
        />
      </Grid>
    </Grid>
      </Box>
    </>
  );
};

export default App;
