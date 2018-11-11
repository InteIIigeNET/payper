import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withRouter } from 'react-router'
import './Header.css';
import logo from './img/logo.png'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  backButton: {
    marginLeft: '2px',
    transform: 'translateX(-50%)'
  },
  appBarDefaultColor: {
    backgroundColor: 'white'
  },
  appBarRoot: {
    height: '3em',
    display: 'block'
  },
  toolbarRoot: {
    display: 'flex',
    justifyContent: 'flex-start',
    position: 'relative'
  }
};

class AppHeader extends React.Component {

  render() {
    const { classes } = this.props;
    const { pathname } = this.props.location;
    var button = null;
    if (pathname != '/' && pathname != '/login') {
      button =
        (<IconButton onClick={() => this.props.history.go(-1)} className={classes.backButton} color="inherit" aria-label="Back">
          <ChevronLeftIcon />
        </IconButton>);
    }
    return (
      <div className='app-bar'>
        <div className={classes.root}>
          <AppBar color='default' classes={{ 
            colorDefault: classes.appBarDefaultColor,
            root: classes.appBarRoot
          }}> 
            <Toolbar classes={{
              root: classes.toolbarRoot
            }}>
              {button}
              <img src={logo} className='logo' alt='logo' />
            </Toolbar>
          </AppBar>
        </div>
      </div>
    );
  }
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(AppHeader));