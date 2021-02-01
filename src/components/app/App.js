import React, { useState } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { CssBaseline } from "@material-ui/core";


import {useStyles} from './appStyle';
import "./App.css";
import Login from '../../pages/Login/Login';
import Registration from '../../pages/Registration/Registration';
import MainPage from '../../pages/MainPage/MainPage';
import MainNav from '../MainNav/MainNav';
import Footer from '../Footer/Footer';
import PassRestore from '../../pages/PassRestore/PassRestore';


const App = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [isAuth, setAuthorization] = useState(true);
  const [regisration, setRegisration] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const mainPage = (props) => {
    return <MainPage classes={classes} open={open} drawerClose={handleDrawerClose} drawerOpen={handleDrawerOpen} {...props} />
  };

  const login =(props) => {
    return <Login classes={classes} login="Войти" {...props} />
  };

  const registration =(props) => {
    return <Registration classes={classes} registration="Регистрация" {...props} />
  };

  const passRestore =(props) => {
    return <PassRestore classes={classes} passRestore="Восстановление пароля" {...props} />
  };

  return (
    <div className="App">
      <CssBaseline />
      <MainNav classes={classes} open={open} drawerClose={handleDrawerClose} />

      {isAuth ?
        <Switch>
          <Route path="/" exact render={mainPage} />
          <Route path="/add-fiscal" render={mainPage} />
          <Route path="/transaction" render={mainPage} />
          <Route path="/logout" render={mainPage} />
          <Route render={()=> (
            <h2 style={{"display": "block", "flex-grow": "1", "text-align": "center"}}>Ошибка 404. Страница не найдена</h2>)
          }/>
        </Switch>
        : 
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login" render={login} />
          <Route path="/registration" render={registration} />
          <Route path="/pass-restore" render={passRestore} />
          <Route path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      }
      
      <Footer classes={classes} open={open} />
    </div>
  );
}

export default App;
