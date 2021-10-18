import React from "react";
import { AppBar, Box, Toolbar, IconButton, Button, Link, Typography, } from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';
import { GitHub } from '@mui/icons-material/';
const Header = () => {
  return (
    <>
      <Box sx={{ height: '10vh' }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Notes
            </Typography>
            <Link href="https://www.github.com/thisismemukul" color="#ffffff">
              <Button color="inherit"><GitHub /></Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;



