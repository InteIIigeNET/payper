import * as React from 'react';
//import Carousel from './Carousel';
import PublishersCarousel from './PublishersCarousel';
import CategoryCarousel from './CategoryCarousel';

export default class StartPage extends React.Component {
  public render() {
    return (
      <div>
        <PublishersCarousel />
        <CategoryCarousel/>
      </div>

    );
  }
}