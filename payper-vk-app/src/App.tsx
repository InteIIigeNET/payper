import * as React from 'react';
import Header from './Header';
import StartPage from './containers/StartPage/StartPage';
import { Box } from 'grommet';
import BottomNavBar from './BottomNavBar';
import './App.css'

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
            <StartPage />
          </Box>
        </div>
        <BottomNavBar />
      </div>
    );
  }
}