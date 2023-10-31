import React from "react";
import {
  Box,
  Button,
  Input,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Container, Grid, Typography } from "@mui/material";
import logo from "../logo.svg";
function Nav() {
  return (
    <Box bgcolor="#000000" position="sticky" top="0" width="100%" mb="7px" borderBottom="1px solid #1976d2" zIndex="100">
      <Container sx={{ py: 2 }}>
        <Box display="flex" alignItems="center">
          <img src={logo} alt="" width="70" />
          <Typography> Movie Nomination</Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Nav;
