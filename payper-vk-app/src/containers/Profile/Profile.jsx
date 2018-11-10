import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { profileContent } from '../../logic/PaperRepository';
import './Profile.css';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 'auto',
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
    listItemText:{
        textAlign: 'left',
        fontWeight: 'bold'
    },
    title:{
        fontSize: '1.3em',
        lineHeight: '37px'
    }
});

function PinnedSubheaderList(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <div className='adress'>
                <div className='adressForSharing'>Адрес для рассылки</div>
                <div className='email'>{profileContent.email}</div>
            </div>
            <List className={classes.root} subheader={<li />}>
                {profileContent.publishers.map(publisher => (
                    <li key={`publisher-${publisher.title}`} className={classes.listSection}>
                        <ul className={classes.ul}>
                            <hr />
                            <ListSubheader classes={{
                                root: classes.title
                            }}>{publisher.title}</ListSubheader>
                            {publisher.shares.map(share => (
                                <ListItem key={`share-${publisher.title}-${share}`}>
                                    <div className='base-share'>
                                    <div className='share'>
                                        <div className='period'>{share.period}</div>
                                        <ListItemText classes={{
                                            primary: classes.listItemText
                                        }} primary={share.description} />
                                    </div>
                                    <button className='unsubscribeButton'>Отписаться</button>
                                    </div>
                                </ListItem>
                            ))}
                        </ul>
                    </li>
                ))}
            </List>
        </div>
    );
}

PinnedSubheaderList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PinnedSubheaderList);