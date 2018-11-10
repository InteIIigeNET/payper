import * as React from 'react';
//import Carousel from './Carousel';
import PublishersCarousel from './PublishersCarousel';
import CategoryCarousel from './CategoryCarousel';
import SharesCarousel from './SharesCarousel';

export default class StartPage extends React.Component {
  public render() {
    return (
      <div>
        <PublishersCarousel />
        <SharesCarousel/>
        <CategoryCarousel/>
      </div>

    );
  }
}