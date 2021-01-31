import React from "react";

import "./Login.css";
import LoginToolbar from "./LoginToolbar";
import LoginMain from "./LoginMain";

export interface StandardComponentProps {
  classes: any;
}

const Login = ({ classes }: StandardComponentProps) => {
  return (
    <div className={classes.containerFlex}>
      <LoginToolbar classes={classes} isLogin={true} />
      <LoginMain classes={classes} isLogin={true} />
    </div>
  );
};

export default Login;
