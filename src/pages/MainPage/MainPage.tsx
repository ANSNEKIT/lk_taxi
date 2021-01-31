import React from 'react';

import Footer from "../../components/Footer/Footer";
import MainToolbar from "../../components/MainToolbar/MainToolbar";
import MainNav from "../../components/MainNav/MainNav";
import Main from "../../components/Main/Main";

export interface StandardComponentProps {
  classes: any;
  open: boolean;
  drawerClose: (e: React.MouseEvent) => void;
  drawerOpen: (e: React.MouseEvent) => void;
}

const MainPage = ({ classes, open, drawerOpen }: StandardComponentProps) => {
  return (
    <div className={classes.containerFlex}>
      <MainToolbar classes={classes} open={open} handleDrawerOpen={drawerOpen} />
      <Main classes={classes} open={open} />
    </div>
  )
}

export default MainPage;
