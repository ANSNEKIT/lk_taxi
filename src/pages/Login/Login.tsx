import React from "react";
import {Typography} from "@material-ui/core";
import clsx from "clsx";
import "./Login.css";

import LoginForm from "./LoginForm";

export interface StandardComponentProps {
  classes: any;
}

const Login = ({ classes }: StandardComponentProps) => {
  return (
    <main className={clsx(classes.contentLogin, classes.contentLoginShift)}>
      <div className={classes.drawerHeader} />
      <div className={classes.drawerHeader} />
      <div className={classes.textCenter}>
        <Typography variant="h2">
          Вход
        </Typography>
        <Typography variant="subtitle1">
          Войдите, используя свои учётные данные
        </Typography>
      </div>

      <LoginForm />
    </main>
  );
};

export default Login;
