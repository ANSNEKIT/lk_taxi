import React from "react";

import "./Login.css";
import LoginToolbar from "./LoginToolbar";
import LoginMain from "./LoginMain";

export interface StandardComponentProps {
  classes: any;
  login: string;
}

const Login = ({ classes, login }: StandardComponentProps) => {
  return (
    <div className={classes.containerFlex}>
      <LoginToolbar classes={classes} title={login}/>
      <LoginMain classes={classes} />
    </div>
  );
};

export default Login;
