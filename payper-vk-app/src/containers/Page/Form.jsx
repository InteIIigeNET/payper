import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import './Form.css';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
});

class Form extends React.Component {
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

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <div className='form-container'>
                    <TextField
                        id="email"
                        label="Email"
                        className={classes.textField}
                        value={this.state.name}
                        fullWidth={true}
                        onChange={this.handleChange('name')}
                    />
                    <TextField
                        id="promo-code"
                        label="Промокод"
                        className={classes.textField}
                        helperText="Some important text"
                        fullWidth={true}
                    />
                </div>
                <button className='form-page-button'>Оплатить {this.props.price}</button>
            </form>
        );
    }
}

Form.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);
