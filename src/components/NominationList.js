import React from "react";
import { Card, List, ListItem, Typography } from "@mui/material";
import MovieCard from "./MovieCard";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";

const NominationList = ({
  nominatedMovies,
  removeNomination,
  maxNominations,
}) => {
    
  const cardStyles = {
    background: "#000000",
    color: "#FFFFFF",
    minHeight: "90vh",
  };

  return (
    <Card style={cardStyles} sx={{ p: 2 }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography>Nomination List</Typography>

        <Grid container spacing={2} pt="40px">
          {nominatedMovies.map((movie) => (
            <Grid item xs={6} sm={6} md={4} key={movie.imdbID}>
              <MovieCard
                title={movie.Title}
                year={movie.Year}
                poster={movie.Poster}
                onNominate={() => removeNomination(movie)}
                isNominated={true}
              />
            </Grid>
          ))}
        </Grid>

        {nominatedMovies.length === maxNominations && (
          <Typography
            sx={{
              backgroundColor: "#4caf50",
              color: "white",
              p: 1,
              borderRadius: "4px",
              marginTop: 4,
            }}
          >
            You have 5 nominations!
          </Typography>
        )}
      </Box>
    </Card>
  );
};

export default NominationList;
