import * as React from 'react';
import Header from './Header';
import { Box } from 'grommet';
import BottomNavBar from './BottomNavBar';
import './App.css'
import { Switch, Route } from 'react-router-dom';
import StartPage from './containers/StartPage/StartPage';
import EditionComponent from './containers/Edition/EditionComponent';

export default class App extends React.Component {
  public render() {
    return (
      <div>
        <Header />
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