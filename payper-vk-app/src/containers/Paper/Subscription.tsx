import * as React from 'react';
import Subscription from 'src/models/Subscription';
import './Subscription.css'
import { Link } from 'react-router-dom';
import popcorn from '../../img/popcorn.png'

class SubscriptionComponent extends React.Component<Subscription> {
    render() {
        var cost = this.props.Price === 0 ? this.props.Price + ' руб. в месяц' : 'Бесплатно';
        return (
            <Link to='/payper/page/1'>
                <div className='subscription'>

<img className='background-image' src={popcorn}></img>

                <div className='title'>
                    {this.props.Title}
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

export default SubscriptionComponent;