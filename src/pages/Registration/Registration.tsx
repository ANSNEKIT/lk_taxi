import React from "react";

import "../../pages/Login/Login.css";
import LoginToolbar from "../Login/LoginToolbar";
import RegistrationMain from "./RegistrationMain";


export interface StandardComponentProps {
  classes: any;
  registration: string;
}

const Registration = ({ classes, registration }: StandardComponentProps) => {
  return (
    <div className={classes.containerFlex}>
      <LoginToolbar classes={classes} title={registration} />
      <RegistrationMain classes={classes} />
    </div>
  );
};

export default Registration;
