import * as React from 'react'
import { TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';
import TrialState from './TrialState';

export default class TrialComponent extends React.Component<TrialProps, TrialState> {
    constructor(props : TrialProps){
        super(props)
        this.state = {}
    }

    public render() {
        return (
            <Dialog
            open={true}
            onClose={this.props.onCancel}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Попробуйте</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Вы можете опробовать месяц бесплатно, используя промокод. Дальше продлите подписку. 
              </DialogContentText>
              <TextField
                margin="dense"
                id="name"
                label="Почта"
                type="email"
                variant="filled"
                fullWidth
                onChange={event => {this.setState({email: event.target.value})}}
              />
              <TextField
                margin="dense"
                id="promo"
                label="Промокод"
                type="promo"
                variant="filled"
                fullWidth
                onChange={event => {this.setState({promocode: event.target.value})}}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => this.props.onTry(this.state.email, this.state.promocode)} color="primary">
                Попробовать
              </Button>
              <Button onClick={this.props.onCancel} color="secondary">
                Не сейчас
              </Button>
            </DialogActions>
          </Dialog>);
    }
}