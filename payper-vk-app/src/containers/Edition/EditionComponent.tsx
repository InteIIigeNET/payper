import { Heading, Paragraph } from 'grommet'
import * as React from 'react'
import EditionProps from './EditionProps';
import SubscriptionTileComponent from '../SubscriptionTile/SubscriptionTileComponent';
import { Button } from '@material-ui/core';
import EditionStyles from 'src/styles/EditionStyles';
import SendIcon from '@material-ui/icons/Send';

export default class EditionComponent extends React.Component<EditionProps, {}> {
    public render() {
        return (
            <div style={EditionStyles.mainDiv}>
                <div style = {EditionStyles.headerDiv}>
                <Heading level="1">
                         {this.props.edition.title}
                </Heading>
                <Paragraph>
                    {`${this.props.edition.description}`}
                </Paragraph>
                <Button color="primary" fullWidth>
                    Написать сообществу
                <SendIcon style={EditionStyles.rightIcon}/>
                </Button>
                </div>
                {this.formatSubscriptions()}
            </div>
        )
    }

    formatSubscriptions = () => {
            if(!this.props.edition.subscriptions) return;
            return (
                <div>
                {this.props.edition.subscriptions.map((sub) =>
                    <SubscriptionTileComponent subscription={sub}/>
                )}</div>
            )
    }
}