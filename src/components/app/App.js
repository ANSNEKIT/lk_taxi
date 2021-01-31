import React, { useState } from 'react';
import {Switch, Route} from 'react-router-dom';
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
  const [authorization, setAuthorization] = useState(true);
  const [regisration, setRegisration] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <CssBaseline />
      <MainNav classes={classes} open={open} drawerClose={handleDrawerClose} />
      <Switch>
        <Route 
          path="/"
          exact 
          render={(props) => (
            <MainPage classes={classes} open={open} drawerClose={handleDrawerClose} drawerOpen={handleDrawerOpen} {...props} />
          )} 
        />
        <Route 
          path="/login" 
          render={(props) => (
            <Login classes={classes} isLogin={true} {...props} />
          )} 
        />
        <Route 
          path="/registration" 
          render={(props) => (
            <Registration classes={classes} isLogin={false} {...props} />
          )} 
        />
        <Route 
          path="/pass-restore" 
          render={(props) => (
            <PassRestore classes={classes} isLogin={false} {...props} />
          )} 
        />
      </Switch>
      <Footer classes={classes} open={open} />
    </div>
  );
}

export default App;
