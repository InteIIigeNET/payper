import * as React from 'react';
import { Box } from 'grommet';
import BottomNavBar from './BottomNavBar';
import './App.css'
import { Switch, Route } from 'react-router-dom';
import StartPage from './containers/StartPage/StartPage';
import EditionComponent from './containers/Edition/EditionComponent';
import AppHeader from './AppHeader';

export default class App extends React.Component {
  public render() {
    return (
      <div>
        <AppHeader />
        <div className='main'>
          <Box fill='vertical' background={{
            "color": "neutral-1",
            "opacity": 'weak'
          }}>
            <Switch>
              <Route exact path='/' component={StartPage} />
              <Route path='/editions/:id' component={EditionComponent} />
            </Switch>
          </Box>
        </div>
        <BottomNavBar />
      </div>
    );
  }
}