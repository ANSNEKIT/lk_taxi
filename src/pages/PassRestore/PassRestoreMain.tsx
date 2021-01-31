import React from "react";
import clsx from "clsx";
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


const PassRestoreMain = ({ classes }: StandardComponentProps) => {
  const loginClasses = useStyles();
  
  return (
    <main className={clsx(classes.contentLogin, classes.contentLoginShift)}>
      <div className={classes.drawerHeader} />
      <div className={classes.drawerHeader} />
      <div className={classes.textCenter}>
        <Typography variant="h2">Восстановление пароля</Typography>
        <Typography variant="subtitle1">
          Укажите ваш email, который использовался как логин от вашей учетной записи
        </Typography>
      </div>

      <form action="" method="get" className={clsx(loginClasses.root)}>
        <div>
          <TextField
            className={clsx(loginClasses.margin)}
            fullWidth
            margin="normal"
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            
          />
        </div>

        <div style={{ margin: "8px 8px 24px" }}>
          <Link style={{ marginRight: "24px" }} href="#">
            Регистрация
          </Link>

          <Link href="#">Войти</Link>
        </div>

        <div>
          <Button
            className={loginClasses.margin}
            size="large"
            variant="contained"
            color="primary"
          >
            Отправить
          </Button>
          <Button
            className={loginClasses.margin}
            size="large"
            variant="outlined"
          >
            Отмена
          </Button>
        </div>
      </form>
    </main>
  );
};

export default PassRestoreMain;
