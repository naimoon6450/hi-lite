import React from 'react';
import { Link } from 'react-router-dom';
// Material UI requirements
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Avatar,
} from '@material-ui/core';
import { typography } from '@material-ui/system';

const styles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    marginRight: '10px',
  },
  avatar: {
    marginRight: '15px',
  },
});

const Navbar = () => {
  const classes = styles();
  return (
    <div>
      <AppBar position="static" className="navbar">
        <Toolbar>
          <Avatar
            className={classes.avatar}
            src="https://i.imgur.com/rAcu8iw.jpg"
          />
          <Typography variant="h6" className="slider-wrapper">
            HIGHLIGHT
            <Typography component={'span'} variant="h6" className="slider">
              <div className="slider-text1">YOUR WORLD</div>
              <div>YOUR THOUGHTS</div>
              <div>YOUR NOTES</div>
            </Typography>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
