import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { Box, Input, List, ListItem, ListItemText } from "@mui/material";


const MovieCard = ({ title, year, poster, onNominate, isNominated }) => {
  return (
    <Card
      sx={{
        height: "100%",
        background: "background.paper",

        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Box
        sx={{
          overflow: "auto",
          position: "relative",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <CardMedia
          component="a"
          image={poster}
          title={title}
          sx={{ height: 0, pt: "65%" }}
        />
      </Box>
      <Box
        sx={{
          p: 2,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography component="h6" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Year {year}
        </Typography>
        <Button
          component="a"
          size="small"
          fullWidth
          variant="contained"
          color="secondary"
          onClick={onNominate}
          sx={{ mt: "auto" }}
        >
          {isNominated ? "Remove" : "Nominate"}
        </Button>
      </Box>
    </Card>
  );
};

export default MovieCard;
