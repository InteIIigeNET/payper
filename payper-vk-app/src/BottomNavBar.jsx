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
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';

class BottomNavBar extends React.Component {
    state = {
        value: -1
    };

    handleChange = (event, value) => {
        this.setState({ value });
        switch (value) {
            case 0:
                var path = '/payper';
                this.props.history.push(path);
                break;
            case 1:
                var path = '/payper/more';
                this.props.history.push(path);
                break;
            case 2:
                var path = '/payper/profile';
                this.props.history.push(path);
                break;
        }
    };


    render() {
        const { value } = this.state;
        const { pathname } = this.props.location;

        if (!pathname.startsWith('/payper/page/') && pathname != '/payper/login')
            return (
                <div className='nav-bar'>
                    <BottomNavigation
                        value={value}
                        onChange={this.handleChange}
                        showLabels
                    >
                        <BottomNavigationAction label="Подборка" icon={<DashboardIcon />} />
                        <BottomNavigationAction label="Больше" icon={<ListIcon />} />
                        <BottomNavigationAction label="Профиль" icon={<AccountCircleIcon />} />
                    </BottomNavigation>
                </div>
            );
        return null;
    }
}


export default withRouter(BottomNavBar);