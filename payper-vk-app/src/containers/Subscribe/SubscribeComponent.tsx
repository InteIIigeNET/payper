import * as React from 'react'
import { TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';
import SubscribeState from './SubscribeState';

export default class SubscribeComponent extends React.Component<SubscribeProps, SubscribeState> {
    constructor(props : SubscribeProps){
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
                Вы можете опробовать месяц бесплатно, используя промокод
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
              {this.renderPromo()}
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

    renderPromo = () => {
      if(this.props.isTrial)
       return <TextField
               margin="dense"
               id="promo"
              label="Промокод"
              type="promo"
              variant="filled"
              fullWidth
              onChange={event => {this.setState({promocode: event.target.value})}}
            />
      return;
    } 
}