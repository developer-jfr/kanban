import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse, Button } from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
    background: 'white',
    backgroundRepeat: 'no-repeat',
  
  },
  appbar: {
    background: 'black',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  colorText: {
    color: '#00ad5c',
  },
  container: {
    textAlign: 'center',
    
  },
  title: {
    color: '#000',
    fontSize: '4.5rem',
  },
  goDown: {
    color: '#5AFF3D',
    fontSize: '4rem',
  },
  home: {
    background: 'black',
  }
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            My<span className={classes.colorText}>Test</span>
          </h1>
       
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
        
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Hello <br />
           Login to<span className={classes.colorText}>Your accoutn</span>
          </h1>
          <Button variant="outlined" size="large" color="primary" className={classes.margin}>
          <Link to={'/signin'}>Sign in</Link>
        </Button>
        </div>
      </Collapse>
    </div>
  );
}
