import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import './Login.css';
import logo from '../../img/paperHeader.jpg';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './Login.css';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '10%'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
});

class Login extends React.Component {

    state = {
        name: ''
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;
        return (<div className='login-container'>
            <img className='welcome-logo' src={logo}/>
            <div>
                <div className='welcome-title'>Авторизация</div>
                <hr />
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="email"
                        label="Email"
                        className={classes.textField}
                        value={this.state.name}
                        fullWidth={true}
                        onChange={this.handleChange('name')}
                    />
                    <button className='login-button'>Войти</button>
                </form>
            </div>
        </div>);
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);