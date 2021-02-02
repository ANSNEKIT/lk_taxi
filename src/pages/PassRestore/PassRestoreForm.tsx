import React from "react";
import { Link as RouterLink} from 'react-router-dom';
import clsx from "clsx";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Button, TextField, Link } from "@material-ui/core";

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


const PassRestoreForm = () => {
  const loginClasses = useStyles();
  
  return (
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
          <Link style={{"marginRight": "24px"}} component={RouterLink} to="/registration">
            Регистрация
          </Link>
          <Link component={RouterLink} to="/login">
            Войти
          </Link>
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
            component={RouterLink}
            to="/"
          >
            Отмена
          </Button>
        </div>
      </form>
  );
};

export default PassRestoreForm;
