import * as React from 'react';
import Header from './Header';
import { Box } from 'grommet';
import BottomNavBar from './BottomNavBar';
import './App.css'
import CurrentPage from './containers/CurrentPage/CurrentPage';

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
            <CurrentPage />
          </Box>
        </div>
        <BottomNavBar />
      </div>
    );
  }
}