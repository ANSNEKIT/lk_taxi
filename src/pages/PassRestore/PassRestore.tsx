import React from "react";

import "../../pages/Login/Login.css";
import PassRestoreMain from "./PassRestoreMain";
import LoginToolbar from "../Login/LoginToolbar";

export interface StandardComponentProps {
  classes: any;
  passRestore: string;
}

const PassRestore = ({ classes, passRestore }: StandardComponentProps) => {
  return (
    <div className={classes.containerFlex}>
      <LoginToolbar classes={classes} title={passRestore} />
      <PassRestoreMain classes={classes} />
    </div>
  );
};

export default PassRestore;
