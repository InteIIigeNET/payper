import * as React from 'react'
import { Icon } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';
import header from '../../img/paperHeader.jpg';
import './PaperComponent.css';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SubscriptionComponent from './Subscription';

export default class PaperComponent extends React.Component<RouteComponentProps<any>, {}> {
    
    Paper = {
            Title: 'Бумага',
            Description: "Когда-то мы придумали еженедельное письмо для читателей, в котором редакторы по-дружески рассказывают о самых интересных делах, которыми можно заняться в Петербурге на выходных.",
            Subscriptions:
                [{ Title: "Что интересного на ближайших выходных в Петербурге?", Description: "Три письма: о вине, петербургских домах и искусстве — по цене двух подписок", IsPayed: false, Price: 101, Code: "1" },
                { Title: "Бесплатная подписка", Description: "Неинформативное описание", IsPayed: false, Code: "2", Price: 0 },
                { Title: "Подписка для отписки", Description: "Неинформативное описание", IsPayed: true, Price: 101, Code: "2", ImgUrl: ""}]
        };

    public constructor(props: RouteComponentProps<any>) {
        super(props);
    }

    public render() {
        return (
            <div >
                <div className='headerDiv'>
                    <img className='header' src={header} />
                    <div className='info'>
                        <Icon className='info-icon'>
                            <InfoOutlinedIcon />
                        </Icon>
                        <div>{this.Paper.Description}</div>
                    </div>

                    <div className='community'>
                        <Icon className='community-icon'>
                            <AccountBoxIcon />
                        </Icon>
                        <a href='#'>Перейти в сообщество</a>
                    </div>
                </div>
                {this.formatSubscriptions()}
            </div>
        )
    }

    formatSubscriptions = () => {
        if (!this.Paper.Subscriptions) return;
        return (
            <div>
                {this.Paper.Subscriptions.map(sub => <SubscriptionComponent Title={sub.Title} 
                Description={sub.Description}  
                IsPayed={sub.IsPayed}
                Price={sub.Price}
                Code={sub.Code}
                />)}
            </div>
        )
    }
}