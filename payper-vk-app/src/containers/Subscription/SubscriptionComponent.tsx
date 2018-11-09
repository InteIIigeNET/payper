import * as React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SubscriptionProps from './SubscriptionProps'; 
import SubscriptionState from './SubscriptionState';
import TrialComponent from '../Trial/TrialComponent';
import logo from '../../logo.svg';
import UnsubscribeComponent from '../Unsubscribe/UnsubscribeComponent';
import NotifyRenderType from './NotifyRenderType';
import SubscriptionStyles from '../Styles/SubscriptionStyles';

export default class SubscriptionComponent extends 
    React.Component<SubscriptionProps, SubscriptionState> {

    constructor(props : SubscriptionProps){
      super(props)
      this.state = {
        renderType: NotifyRenderType.Default
      }
    }

    public render() {
        return (
          <div>
            {this.renderNotify()}
            <Card style={SubscriptionStyles.card}>
                    <CardActionArea>
                      <CardMedia
                        image={logo}
                        title={this.props.subscription.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                         {this.props.subscription.title}
                        </Typography>
                        <Typography component="p">
                          {this.props.subscription.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    {this.formatFooter()}
                  </Card>
                  </div>
        );
    }

  renderNotify = () => {
    switch(this.state.renderType){
      case NotifyRenderType.Default: return;
      case NotifyRenderType.TrialForm: 
        return <TrialComponent onTry={this.subscribe}
                               onCancel={this.cancel}/>
      case NotifyRenderType.UnsubscribeConfirm: 
        return <UnsubscribeComponent onTry={this.unsubscribe}
                                     onCancel={this.cancel}/>
      default: return
    }
  }

    formatFooter = () => {
        if(!this.props.subscription.isPayed){
            return (<CardActions>
                <Button variant="contained" size="small" color="primary" >
                 {this.formatBuyButton()}
                </Button>
                {this.formatTryButton()}
              </CardActions>)
        }
        else return (<CardActions><Button variant="contained" 
                                          size="small" 
                                          color="secondary"
                                          onClick={() => this.setState({renderType: NotifyRenderType.UnsubscribeConfirm})}>
       Отписаться 
      </Button></CardActions>)
    }

    formatBuyButton = () => {
      return !this.props.subscription.price
      ? "Бесплатно" 
      : `Подписаться ${this.props.subscription.price}Р`
    }

    formatTryButton = () => {
      if(!this.props.subscription.price) return;
      return <Button size="small" 
                        color="primary" 
                        onClick={() => this.setState({renderType: NotifyRenderType.TrialForm})}>
                 Попробовать
            </Button>
    }

    subscribe = (email?: string, promo?: string) => {
      this.setState({renderType: NotifyRenderType.Default})
    }
    unsubscribe = () => {
      this.setState({renderType: NotifyRenderType.Default})
    }

    cancel = () => {
      this.setState({renderType: NotifyRenderType.Default})
    }
}