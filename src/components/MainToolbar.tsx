import React from "react";
import clsx from "clsx";

import { AppBar, Toolbar, IconButton, Typography, Paper } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import logo from '../img/logo-02-blue.png';


export interface StandardComponentProps {
  classes: any;
  open: boolean;
  handleDrawerOpen: (e: React.MouseEvent) => void;
}

const MainToolbar = ({classes, open, handleDrawerOpen}: StandardComponentProps) => {
  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    > 
      <Paper />
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>

        <img className={classes.logo} src={logo} alt={"logo"} height="40"/>

        <Typography variant="h6" noWrap>
          Page Title 1
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MainToolbar;
