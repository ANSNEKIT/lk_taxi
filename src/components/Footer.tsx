import React from "react";
import clsx from "clsx";

export interface StandardComponentProps {
  classes: any;
  open: boolean;
}

const Footer = ({classes, open}: StandardComponentProps) => {
  return (
    <footer className={clsx(classes.footer, {
      [classes.footerShift]: open,}
    )}>
      <div className="text-center">
        <span>
          ИП Носов А. С. 2021
        </span>
      </div>
    </footer>
  );
};

export default Footer;
