import * as React from 'react'
import { TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';
import TrialState from './TrialState';

interface EditionProps{
    
}

export default class TrialComponent extends React.Component<EditionProps, TrialState> {
    constructor(props : EditionProps){
        super(props)
        this.state = {isOpen: true}
    }

    public render() {
        if(!this.state.isOpen) return
        return (
            <Dialog
            open={true}
            onClose={this.handleClose}
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
              <Button onClick={this.handleClose} color="primary">
                Попробовать
              </Button>
              <Button onClick={this.handleClose} color="secondary">
                Не сейчас
              </Button>
            </DialogActions>
          </Dialog>);
    }

    handleClose = () => {
        this.setState({isOpen: false}) 
    } 
}