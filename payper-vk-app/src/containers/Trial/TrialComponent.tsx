import * as React from 'react'
import { TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';
import TrialState from './TrialState';

export default class TrialComponent extends React.Component<TrialProps, TrialState> {
    constructor(props : TrialProps){
        super(props)
        this.state = {isOpen: true}
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
              />
              <TextField
                margin="dense"
                id="promo"
                label="Промокод"
                type="promo"
                variant="filled"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.onTry} color="primary">
                Попробовать
              </Button>
              <Button onClick={this.props.onCancel} color="secondary">
                Не сейчас
              </Button>
            </DialogActions>
          </Dialog>);
    }
}