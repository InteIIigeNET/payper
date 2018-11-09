import { Heading, Paragraph } from 'grommet'
import * as React from 'react'
import SubscriptionComponent from '../Subscription/SubscriptionComponent';
import EditionProps from './EditionProps';

export default class EditionComponent extends React.Component<EditionProps, {}> {
    public render() {
        return (
            <div>
                <Heading level="1">
                         {this.props.title}
                </Heading>
                <Paragraph>
                    {`${this.props.description}`}
                </Paragraph>
                {this.formatSubscriptions()}
            </div>
        )
    }

    formatSubscriptions = () => {
            if(!this.props.subscriptions) return;
            return (
                <div>
                {this.props.subscriptions.map((sub) =>
                    <SubscriptionComponent subscription={sub}/>
                )}</div>
            )
    }
}