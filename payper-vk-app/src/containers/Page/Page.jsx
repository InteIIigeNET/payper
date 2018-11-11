import * as React from 'react';
import popcorn from '../../img/popcorn.png';
import Form from './Form';
import './Page.css';

class Page extends React.Component {
    constructor(props) {
        super(props);
    }


    state = {
        edition: this.getPage(this.props.match.params.id)
    }

    getPage(id) {
        return ({
            title: 'Что интересного на ближайшие выходные в Петербурге?',
            description: `Каждый четверг один из редакторов «Бумаги» пишет вам дружеское письмо. 
            Мы рассказываем, куда сами пойдем в ближайшие выходные: в основном это небольшие, 
            но классные события, о которых не узнать из городских афиш.
            Лекции о науке и искусстве петербургских экспертов, концерты местных групп и лучшие 
            вечеринки, спектакли камерных театров и городские экскурсии от наших друзей-краеведов. 
            А еще личные советы от членов редакции о том, что почитать и посмотреть не выходя из комнаты.`,
            price: '150 руб',
            period: 'Еженедельно, по четвергам'
        });
    }

    render() {
        return (
            <div>
                <div className='page-subscription'>
                    <img className='page-background-image' src={popcorn}></img>
                    <div className='page-title'>
                        {this.state.edition.title}
                    </div>
                    <div className='page-period'>
                        {this.state.edition.period}
                    </div>
                    <Form price={this.state.edition.price} />

                </div>
                <div className='page-description-panel'>
                    <div className='page-description'>
                        <div className='page-description-header'>Описание</div>
                        {this.state.edition.description}
                    </div>
                </div>
            </div>
        );
    }


}

export default Page;