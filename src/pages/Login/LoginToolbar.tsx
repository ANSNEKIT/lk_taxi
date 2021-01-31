import React from "react";
import clsx from "clsx";

import { AppBar, Toolbar, Typography, Paper } from "@material-ui/core";
import logo from '../../img/logo-02-blue.png';


export interface StandardComponentProps {
  classes: any;
  isLogin: boolean;
}

const LoginToolbar = ({classes, isLogin}: StandardComponentProps) => {
  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar)}
    > 
      <Paper />
      <Toolbar>
        
        <img className={classes.logo} src={logo} alt={"logo"} height="40"/>

        <Typography variant="h6" noWrap>
          {isLogin ? "Вход" : "Регистрация"}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default LoginToolbar;
