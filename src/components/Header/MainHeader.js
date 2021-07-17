import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse, Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '20vh',
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
function MainHeader() {
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

    
    </div>
    )
}

export default MainHeader
