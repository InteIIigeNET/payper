import * as React from 'react';
import StartPage from '../StartPage/StartPage';
import EditionComponent from '../Edition/EditionComponent';
import IEdition from '../../models/IEdition';


enum Pages {
    Start = 'start',
    Edition = 'edition'
}

interface IStates {
    page: Pages;
    edition?: IEdition;
}

export default class CurrentPage extends React.Component<{}, IStates> {

    public constructor(props: {}) {
        super(props);
        this.state = { page: Pages.Start}
        //this.onClickPublisher = this.onClickPublisher.bind(this);
    }

    onClickPublisher = (id: number) => {
        //get model from db
        let edition = {
            title: 'Бумага',
            description: "Когда-то мы придумали еженедельное письмо для читателей, в котором редакторы по-дружески рассказывают о самых интересных делах, которыми можно заняться в Петербурге на выходных.",
            subscriptions:
                [{ title: "", description: "Три письма: о вине, петербургских домах и искусстве — по цене двух подписок", isPayed: false, price: 101, code: "1" },
                { title: "Бесплатная подписка", description: "Неинформативное описание", isPayed: false, code: "2" },
                { title: "Подписка для отписки", description: "Неинформативное описание", isPayed: true, price: 101, code: "2" }]
        }
        this.setState({page: Pages.Edition, edition: edition});
    }

    public render() {
        switch (this.state.page) {
            case Pages.Start:
                return (<StartPage onClick={this.onClickPublisher} />);
            case Pages.Edition:
                return (<EditionComponent edition={this.state.edition as IEdition} />)
        }
    }
}