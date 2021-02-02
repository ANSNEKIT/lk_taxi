import React from "react";
import clsx from "clsx";
import { Typography } from "@material-ui/core";

import "../../pages/Login/Login.css";
import RegistrationForm from "./RegistrationForm";

export interface StandardComponentProps {
  classes: any;
}

const Registration = ({ classes }: StandardComponentProps) => {
  return (
    <main className={clsx(classes.contentLogin, classes.contentLoginShift)}>
      <div className={classes.drawerHeader} />
      <div className={classes.drawerHeader} />
      <div className={classes.textCenter}>
        <Typography variant="h2">
          Регистрация
        </Typography>
      </div>
      <RegistrationForm />
    </main>
  );
};

export default Registration;
