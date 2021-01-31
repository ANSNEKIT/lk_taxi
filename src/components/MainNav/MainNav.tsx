import React from "react";

import { Drawer, List, Divider, IconButton, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

export interface StandardComponentProps {
  classes: any;
  open: boolean;
  drawerClose: (e: React.MouseEvent) => void;
}

export default function MainNav({classes, open, drawerClose}: StandardComponentProps) {
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={drawerClose}>
            <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {["Подключение агрегаторов", "Подключение касс", "Транзакции"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
