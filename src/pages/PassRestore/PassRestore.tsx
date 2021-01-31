import React from "react";

import "../../pages/Login/Login.css";
import PassRestoreToolbar from "./PassRestoreToolbar";
import PassRestoreMain from "./PassRestoreMain";

export interface StandardComponentProps {
  classes: any;
  isLogin: boolean;
}

const PassRestore = ({ classes, isLogin }: StandardComponentProps) => {
  return (
    <div className={classes.containerFlex}>
      <PassRestoreToolbar classes={classes} isLogin={isLogin} />
      <PassRestoreMain classes={classes} />
    </div>
  );
};

export default PassRestore;
