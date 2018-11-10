import * as React from 'react';
import ISubscription from 'src/models/ISubscription';
import popcorn from '../../img/popcorn.png'
import './Subscription.css'

class Subscription extends React.Component<ISubscription> {
    render() {
        return (
            <div className='subscription'>
                <img className='background-image' src={popcorn}></img>

                <div className='title'>
                    {this.props.title}
                </div>
                <div className='subscribe'>
                    Новый выпуск каждую неделю
                </div>
                <button className='subscribeButton'>Бесплатно</button>
                <div className='little-subscribe'>
                    Подписаться
                </div>
            </div>
        );
    }


}

export default Subscription;