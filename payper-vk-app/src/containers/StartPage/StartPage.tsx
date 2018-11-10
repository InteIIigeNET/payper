import * as React from 'react';
//import Carousel from './Carousel';
import PublishersCarousel from './PublishersCarousel';
import CategoryCarousel from './CategoryCarousel';
import SharesCarousel from './SharesCarousel';
import IPublishersClicker from './IPublisherClicker';

export default class StartPage extends React.Component<IPublishersClicker> {
  public constructor(props : IPublishersClicker) {
    super(props);
  }
  
  public render() {
    return (
      <div>
        <PublishersCarousel onClick={this.props.onClick} />
        <SharesCarousel/>
        <CategoryCarousel/>
      </div>

    );
  }
}