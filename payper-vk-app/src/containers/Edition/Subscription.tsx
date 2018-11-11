import * as React from 'react';
import ISubscription from 'src/models/ISubscription';
import popcorn from '../../img/popcorn.png'
import './Subscription.css'
import { Link } from 'react-router-dom';

class Subscription extends React.Component<ISubscription> {
    render() {
        var cost = this.props.price ? this.props.price + ' руб. в месяц' : 'Бесплатно';
        return (
            <Link to='/page/1'>
                <div className='subscription'>

                    <img className='background-image' src={popcorn}></img>

                    <div className='title'>
                        {this.props.title}
                    </div>
                    <div className='subscribe'>
                        Новый выпуск каждую неделю
                </div>
                    <button className='subscribeButton'>Подписаться</button>
                    <div className='little-subscribe'>
                        {cost}
                    </div>
                </div>
            </Link>
        );
    }


}

export default Subscription;