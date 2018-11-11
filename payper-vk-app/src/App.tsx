import * as React from 'react';
import { Box } from 'grommet';
import BottomNavBar from './BottomNavBar';
import './App.css'
import { Switch, Route } from 'react-router-dom';
import StartPage from './containers/StartPage/StartPage';
import EditionComponent from './containers/Edition/EditionComponent';
import AppHeader from './AppHeader';
import Profile from './containers/Profile/Profile';
import Page from './containers/Page/Page';
import Login from './containers/Login/Login';

export default class App extends React.Component {

  public render() {
    return (
      <div className='bat9'>
        <AppHeader />
        <div className='main'>
          <Box>
            <Switch>
              <Route exact path='/' component={StartPage} />
              <Route path='/editions' component={EditionComponent} />
              <Route path='/profile' component={Profile} />
              <Route path='/page/:id' component={Page} />
              <Route path='/login' component={Login} />
            </Switch>
          </Box>
        </div>
        <BottomNavBar />
      </div>
    );
  }
}