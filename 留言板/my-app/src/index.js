import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Example from './hook';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Comment from './comment';
import Reply from './reply';


ReactDOM.render(
  <React.Fragment>
  <CssBaseline />
  <Container maxWidth='xs' className='bg-gray-300 h-full ' style={{minHeight: '100vh', 'boxSizing':'border-box', 'overflow-x':'hidden'}}   >
  <Router>

<Switch>
<Route exact path='/' component={Example}/>
<Route exact path="/comment" component={Comment} />
  <Route exact path="/reply" component={Reply} />
</Switch>
</Router>

  </Container>
</React.Fragment>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
