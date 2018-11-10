import * as React from 'react'
import { Icon } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';
import IEdition from 'src/models/IEdition';
import header from '../../img/paperHeader.jpg';
import './EditionComponent.css';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Subscription from './Subscription';

export default class EditionComponent extends React.Component<RouteComponentProps<any>, {}> {
    private edition: IEdition;

    private getEdition(id: number): IEdition {
        return {
            title: 'Бумага',
            description: "Бумага» — интернет-газета о городе и обществе. Мы представляем независимый взгляд из Петербурга на российскую и городскую повестку.",
            subscriptions:
                [{ title: "Что интересного на ближайших выходных в Петербурге?", description: "Три письма: о вине, петербургских домах и искусстве — по цене двух подписок", isPayed: false, price: 101, code: "1" },
                { title: "Бесплатная подписка", description: "Неинформативное описание", isPayed: false, code: "2" },
                { title: "Подписка для отписки", description: "Неинформативное описание", isPayed: true, price: 101, code: "2" }]
        };
    }

    public constructor(props: RouteComponentProps<any>) {
        super(props);
        this.edition = this.getEdition(props.match.params.id);
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
                        <div>{this.edition.description}</div>
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
        if (!this.edition.subscriptions) return;
        return (
            <div>
                {this.edition.subscriptions.map(sub => <Subscription title={sub.title} 
                description={sub.description}  
                isPayed={sub.isPayed}
                price={sub.price}
                code={sub.code}
                imgUrl={sub.imgUrl}/>)}
            </div>
        )
    }
}