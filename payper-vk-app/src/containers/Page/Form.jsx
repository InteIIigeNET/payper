import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import './Form.css';
import VKConnection from 'src/VKApi/VKConnection';
import PaperApi from 'src/Api/PaperApi';

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

class Form extends React.Component {
    state = {
        name: '',
        promo: '',
        showForm: true
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;
        if(!this.state.showForm) return null;
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
                        helperText="(если есть)"
                        fullWidth={true}
                        onChange={this.handleChange('promo')}
                    />
                </div>
                <button onClick={() => this.tryToPay()} className='form-page-button'>Оплатить {this.props.price}</button>
            </form>
        );
    }

    tryToPay = () => {
        //VKConnection.PayToTestGroup(1, () => this.succssesPay(), e => {}, "Ошибка при оплате");
        this.setState({showForm : false})
    }

    succssesPay = async () => {
       //await PaperApi.subscribe(this.state.name, this.props.code);
    }
}

Form.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);
