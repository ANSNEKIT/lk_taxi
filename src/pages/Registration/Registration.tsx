import React from "react";

import "../../pages/Login/Login.css";
import LoginToolbar from "../Login/LoginToolbar";
import LoginMain from "../Login/LoginMain";

export interface StandardComponentProps {
  classes: any;
  isLogin: boolean;
}

const Registration = ({ classes, isLogin }: StandardComponentProps) => {
  return (
    <div className={classes.containerFlex}>
      <LoginToolbar classes={classes} isLogin={isLogin} />
      <LoginMain classes={classes} isLogin={isLogin} />
    </div>
  );
};

export default Registration;
