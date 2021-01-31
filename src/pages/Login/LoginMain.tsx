import React from "react";
import clsx from "clsx";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  Link,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      /*  display: 'flex',
      flexWrap: 'wrap', */
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
  isLogin: boolean;
}

interface State {
  password: string;
  showPassword: boolean;
}

const LoginMain = ({ classes, isLogin }: StandardComponentProps) => {
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
    <main className={clsx(classes.contentLogin, classes.contentLoginShift)}>
      <div className={classes.drawerHeader} />
      <div className={classes.drawerHeader} />
      <div className={classes.textCenter}>
        <Typography variant="h2">
          {isLogin ? "Вход" : "Регистрация"}
        </Typography>
        <Typography variant="subtitle1">
          {isLogin ? "Войдите, используя свои учётные данные" : null}
        </Typography>
      </div>

      <form action="" method="get" className={clsx(loginClasses.root)}>
        <div>
          <TextField
            className={clsx(loginClasses.margin)}
            fullWidth
            margin="normal"
            placeholder="Email"
            id="email"
            label="Login"
            type="email"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        { isLogin ?
          <div>
          <FormControl
            fullWidth
            className={clsx(loginClasses.margin)}
            variant="outlined"
            margin="normal"
          >
            <InputLabel htmlFor="passwd">Password</InputLabel>
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
          <div style={{"margin": "8px 8px 24px"}}>
            { isLogin ? 
              ( 
                <Link style={{"marginRight": "24px"}} href="#">
                  Регистрация
                </Link>
              ) : null
            }
            <Link href="#">
              Восстановить пароль
            </Link>
          </div>
          
        </div>
        : (
          <div style={{"margin": "8px 8px 24px"}}>
            <Link href="#">
              Войти
            </Link>
          </div>
        )
        }
        
        <div>
          <Button
            className={loginClasses.margin}
            size="large"
            variant="contained"
            color="primary"
          >
            {isLogin ? "Войти" : "Зарегистрироваться"}
            
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

export default LoginMain;
