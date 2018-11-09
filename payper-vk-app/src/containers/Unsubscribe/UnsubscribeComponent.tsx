import * as React from 'react'
import UnsubscribeProps from './UnsubscribeProps';
import { Dialog, DialogTitle, DialogContentText, DialogActions, Button, DialogContent } from '@material-ui/core';

export default class UnsubscribeComponent extends React.Component<UnsubscribeProps, {}> {
    constructor(props : UnsubscribeProps){
        super(props)
    }

    public render() {
        return <Dialog
        open={true}
        onClose={this.props.onCancel}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Вы уверены, что хотите отписаться от рассылки? Данное действие невозможно отменить"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Вы уверены, что хотите отписаться от рассылки? Данное действие невозможно отменить
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onTry} color="primary">
            Отписаться
          </Button>
          <Button onClick={this.props.onCancel} color="secondary">
            Вернуться
          </Button>
        </DialogActions>
      </Dialog>;
    }
}