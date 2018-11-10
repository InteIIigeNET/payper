import * as React from 'react';
import StartPage from '../StartPage/StartPage';
import EditionComponent from '../Edition/EditionComponent';



enum Pages {
    Start = 'start',
    Edition = 'edition'
}

interface IStates {
    page: Pages
}

export default class CurrentPage extends React.Component<{}, IStates> {

    public constructor(props: {}) {
        super(props);
        this.state = { page: Pages.Start }
    }

    public render() {
        switch (this.state.page) {
            case Pages.Start:
                return (<StartPage />);
            case Pages.Edition:
                return (<EditionComponent
                    edition={{
                        title: 'Бумага',
                        description: "Когда-то мы придумали еженедельное письмо для читателей, в котором редакторы по-дружески рассказывают о самых интересных делах, которыми можно заняться в Петербурге на выходных.",
                        subscriptions:
                            [{ title: "", description: "Три письма: о вине, петербургских домах и искусстве — по цене двух подписок", isPayed: false, price: 101, code: "1" },
                            { title: "Бесплатная подписка", description: "Неинформативное описание", isPayed: false, code: "2" },
                            { title: "Подписка для отписки", description: "Неинформативное описание", isPayed: true, price: 101, code: "2" }]
                    }} />)
        }
    }
}