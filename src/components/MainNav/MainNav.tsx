import React from "react";
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { Omit } from '@material-ui/types';
import { Drawer, List, Divider, IconButton, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {ChevronLeft, Extension, Receipt, SettingsInputComponent, ExitToApp} from "@material-ui/icons";

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

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
            <ChevronLeft />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItemLink to="/" primary="Подключение агрегаторов" icon={<Extension />} />
        <ListItemLink to="/add-fiscal" primary="Подключение касс" icon={<Receipt />} />
        <ListItemLink to="/transaction" primary="Транзакции" icon={<SettingsInputComponent />} />
        <ListItemLink to="/logout" primary="Выход" icon={<ExitToApp />} />
      </List>
    </Drawer>
  );
}
