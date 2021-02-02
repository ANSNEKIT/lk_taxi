import React from "react";
import clsx from "clsx";
import { Link as RouterLink} from 'react-router-dom';
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Link,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

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

interface State {
  password: string;
  showPassword: boolean;
}

const LoginForm = () => {
  const loginClasses = useStyles();
  const [values, setValues] = React.useState<State>({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
      <form action="" method="get" className={clsx(loginClasses.root)}>
        <div>
          <TextField
            className={clsx(loginClasses.margin)}
            fullWidth
            margin="normal"
            placeholder="Email"
            id="email"
            label="Логин"
            type="email"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <div>
          <FormControl
            fullWidth
            className={clsx(loginClasses.margin)}
            variant="outlined"
            margin="normal"
          >
            <InputLabel htmlFor="passwd">Пароль</InputLabel>
            <OutlinedInput
              id="passwd"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
        </div>
          
        <div style={{"margin": "8px 8px 24px"}}>
          <Link style={{"marginRight": "24px"}} component={RouterLink} to="/registration">
            Регистрация
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
            Войти
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

export default LoginForm;
