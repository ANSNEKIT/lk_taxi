import React from "react";
import clsx from "clsx";
import { Link as RouterLink} from 'react-router-dom';
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  Typography,
  Link,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 500,
      margin: "0 auto",
      marginTop: "3rem",
      marginBottom: "4rem",
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: "25ch",
    },
  })
);

export interface StandardComponentProps {
  classes: any;
}


const RegistrationMain = ({ classes }: StandardComponentProps) => {
  const loginClasses = useStyles();

  return (
    <main className={clsx(classes.contentLogin, classes.contentLoginShift)}>
      <div className={classes.drawerHeader} />
      <div className={classes.drawerHeader} />
      <div className={classes.textCenter}>
        <Typography variant="h2">
          Регистрация
        </Typography>
      </div>

      <form action="" method="get" className={clsx(loginClasses.root)}>
        <div>
          <TextField
            className={clsx(loginClasses.margin)}
            fullWidth
            margin="normal"
            placeholder="test@test.ru"
            id="email"
            label="Логин"
            type="email"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

          <div style={{"margin": "8px 8px 24px"}}>
            <Link style={{"marginRight": "24px"}} component={RouterLink} to="/login">
              Войти
            </Link>
            <Link component={RouterLink} to="/pass-restore">
              Восстановить пароль
            </Link>
          </div>

        <div>
          <Button
            className={loginClasses.margin}
            size="large"
            variant="contained"
            color="primary"
          >
            Зарегистрироваться
          </Button>
          <Button
            className={loginClasses.margin}
            size="large"
            variant="outlined"
            component={RouterLink}
            to="/"
          >
            Отмена
          </Button>
        </div>
      </form>
    </main>
  );
};

export default RegistrationMain;
