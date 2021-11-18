import React from 'react';
import Login from './LoginBox/Login';
import Register from './LoginBox/Register';
import { Route, Switch } from 'react-router-dom';
import Index from './Home/Index'
import Header from '../Support/Header';
import Footer from '../Support/Footer';
import Header_news from '../News/Header_news';
import Footer_news from '../News/Footer_news';
import Header_news2 from '../News/Header_news2';




const Body = () => {
  return (
    <>
      <Switch>
        <Route path="/News/login">
          <Login />
        </Route>
        <Route path="/News/register">
          <Register />
        </Route>
        <Route path="/News/home">
          <Index/>
          </Route>
        <Route path="/News/support">
          <Header/>
          <Footer/>
        </Route>
        <Route path="/News/news">
          <Header_news/>
          <Footer_news/>
          <Header_news2/>
        </Route>
      </Switch>
    </>
  );
};
export default Body;
