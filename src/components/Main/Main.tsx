import React from "react";
import clsx from "clsx";
import AddFiscal from "../AddFiscal/AddFiscal";

export interface StandardComponentProps {
  classes: any;
  open: boolean;
}

const Main = ({ classes, open }: StandardComponentProps) => {
  
  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}
    >
      <div className={classes.drawerHeader} />
      <AddFiscal />
    </main>
  );
};

export default Main;
