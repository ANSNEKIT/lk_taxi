import React from "react";
import clsx from "clsx";
import { Typography } from "@material-ui/core";

import PassRestoreForm from "./PassRestoreForm";

export interface StandardComponentProps {
  classes: any;
  passRestore: string;
}

const PassRestore = ({ classes }: StandardComponentProps) => {
  return (
    <main className={clsx(classes.contentLogin, classes.contentLoginShift)}>
      <div className={classes.drawerHeader} />
      <div className={classes.drawerHeader} />
      <div className={classes.textCenter}>
        <Typography variant="h3">Восстановление пароля</Typography>
        <Typography variant="subtitle1">
          Укажите ваш email, на который отправить письмо для восстановления пароля
        </Typography>
      </div>
      <PassRestoreForm />
    </main>
  );
};

export default PassRestore;
