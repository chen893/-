import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Comment() {
  let initialCount = 1;
  const [count, setCount] = useState(initialCount);

  return (
    <React.Fragment >
      <CssBaseline />
      <Container maxWidth="sm"   style={{'display':'flex', 'justifyContent':'center',}}>
        
        <Link to='/comment' style={{'marginTop':'40vh'}}>
       <Button variant="contained" color="primary" >   给他留言</Button>
          </Link>
        
        
        <Link to='/reply' style={{'marginTop':'40vh'}}>
        <Button variant="contained" color="secondary">查看回复  </Button>
        </Link>
      

      </Container>
    </React.Fragment>
  );
}
export default Comment;