import React, { useState } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import {useStyles} from './appStyle';
import "./App.css";
import Login from '../../pages/Login/Login';
import Registration from '../../pages/Registration/Registration';
import MainPage from '../../pages/MainPage/MainPage';
import MainNav from '../MainNav/MainNav';
import Footer from '../Footer/Footer';
import PassRestore from '../../pages/PassRestore/PassRestore';
import Tranzactions from '../../pages/Tranzactions/Tranzactions';
import MainToolbar from '../MainToolbar/MainToolbar';
import LoginToolbar from '../../pages/Login/LoginToolbar';



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

  const mainPage = (props) => (
    <MainPage classes={classes} open={open} {...props} />
  );

  const transition = (props) => (
    <Tranzactions />
  );

  const login =(props) => (
    <React.Fragment>
      <LoginToolbar classes={classes} title="Войти"/> 
      <Login classes={classes} {...props} />
    </React.Fragment>
    
  );

  const registration =(props) => (
    <React.Fragment>
      <LoginToolbar classes={classes} title="Регистрация"/>
      <Registration classes={classes} {...props} />
    </React.Fragment>
    
  );

  const passRestore =(props) => (
    <React.Fragment>
      <LoginToolbar classes={classes} title="Восстановление пароля"/>
      <PassRestore classes={classes} {...props} />
    </React.Fragment>
    
  );

  return (
    <div className="App">
      <CssBaseline />
      <div className={classes.containerFlex}>
        <MainNav classes={classes} open={open} drawerClose={handleDrawerClose} />
        {isAuth
          ? <MainToolbar classes={classes} open={open} handleDrawerOpen={handleDrawerOpen} />
          : null 
        }
        
        {isAuth ?
          <Switch>
            <Route path="/" exact render={mainPage} />
            <Route path="/add-fiscal" render={mainPage} />
            <Route path="/transaction" render={transition} />
            <Route path="/logout" render={login} />
            <Route path="/page404" render={()=> (
              <h1 style={{"display": "block", "flexGrow": "1", "textAlign": "center", "marginTop": "200px"}}>Ошибка 404. Страница не найдена</h1>)
            }/>
            <Route path="*">
              <Redirect to="/page404" />
            </Route>
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
      </div>
      
      <Footer classes={classes} open={open} />
    </div>
  );
}

export default App;
