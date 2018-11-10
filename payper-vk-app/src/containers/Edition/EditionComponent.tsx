import { Heading, Paragraph } from 'grommet'
import * as React from 'react'
import SubscriptionTileComponent from '../SubscriptionTile/SubscriptionTileComponent';
import { Button } from '@material-ui/core';
import EditionStyles from 'src/styles/EditionStyles';
import SendIcon from '@material-ui/icons/Send';
import { RouteComponentProps } from 'react-router-dom';
import IEdition from 'src/models/IEdition';

export default class EditionComponent extends React.Component<RouteComponentProps<any>, {}> {
    private edition: IEdition;

    private getEdition(id: number): IEdition {
        return {
            title: 'Бумага',
            description: "Когда-то мы придумали еженедельное письмо для читателей, в котором редакторы по-дружески рассказывают о самых интересных делах, которыми можно заняться в Петербурге на выходных.",
            subscriptions:
                [{ title: "", description: "Три письма: о вине, петербургских домах и искусстве — по цене двух подписок", isPayed: false, price: 101, code: "1" },
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
            <div style={EditionStyles.mainDiv}>
                <div style={EditionStyles.headerDiv}>
                    <Heading level="1">
                        {this.edition.title}
                    </Heading>
                    <Paragraph>
                        {`${this.edition.description}`}
                    </Paragraph>
                    <Button color="primary" fullWidth>
                        Написать сообществу
                <SendIcon style={EditionStyles.rightIcon} />
                    </Button>
                </div>
                {this.formatSubscriptions()}
            </div>
        )
    }

    formatSubscriptions = () => {
        if (!this.edition.subscriptions) return;
        return (
            <div>
                {this.edition.subscriptions.map((sub) =>
                    <SubscriptionTileComponent subscription={sub} />
                )}</div>
        )
    }
}