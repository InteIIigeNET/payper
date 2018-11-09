import * as React from 'react';
import Header from './Header';
import StartPage from './containers/StartPage/StartPage';
import { Box } from 'grommet';

export default class App extends React.Component {
  public render() {
    return (
      <Box fill='vertical' background={{
        "color": "neutral-1",
        "opacity": 'weak'
      }}>
        <Header />
        <StartPage />
      </Box>
    );
  }
}