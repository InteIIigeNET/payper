import * as React from 'react';
import { Box } from 'grommet';
import BottomNavBar from './BottomNavBar';
import './App.css'
import { Switch, Route } from 'react-router-dom';
import StartPage from './containers/StartPage/StartPage';
import PaperComponent from './containers/Paper/PaperComponent';
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
              <Route exact path='/payper/login' component={Login} />
              <Route exact path='/payper/more' component={StartPage} />
              <Route exact path='/payper' component={PaperComponent} />
              <Route path='/payper/profile' component={Profile} />
              <Route path='/payper/page/:id' component={Page} />
            </Switch>
          </Box>
        </div>
        <BottomNavBar />
      </div>
    );
  }
}