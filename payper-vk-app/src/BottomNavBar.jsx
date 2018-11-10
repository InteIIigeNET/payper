import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListIcon from '@material-ui/icons/List';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './BottomNavBar.css';

const styles = {
    //   root: {
    //     width: 500,
    //   },
};

class BottomNavBar extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className='nav-bar'>
                <BottomNavigation
                    value={value}
                    onChange={this.handleChange}
                    showLabels
                //className={classes.root}
                >
                    <BottomNavigationAction label="Подборка" icon={<DashboardIcon />} />
                    <BottomNavigationAction label="Список" icon={<ListIcon />} />
                    <BottomNavigationAction label="Поиск" icon={<SearchIcon />} />
                    <BottomNavigationAction label="Профиль" icon={<AccountCircleIcon />} />
                </BottomNavigation>
            </div>
        );
    }
}

BottomNavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNavBar);