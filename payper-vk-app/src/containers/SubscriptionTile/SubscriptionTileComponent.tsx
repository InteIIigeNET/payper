import * as React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SubscriptionTileProps from './SubscriptionTileProps'; 
import SubscriptionTileState from './SubscriptionTileState';
import SubscribeComponent from '../Subscribe/SubscribeComponent';
import UnsubscribeComponent from '../Unsubscribe/UnsubscribeComponent';
import NotifyRenderType from './NotifyRenderType';
import SubscriptionTileStyles from 'src/styles/SubscriptionTileStyles';

export default class SubscriptionTileComponent extends 
    React.Component<SubscriptionTileProps, SubscriptionTileState> {

    constructor(props : SubscriptionTileProps){
      super(props)
      this.state = {
        renderType: NotifyRenderType.Default,
        showFull: false
      }
    }

    public render() {
        return (
          <div>
            {this.renderNotify()}
            <Card style={SubscriptionTileStyles.card}>
                    <CardActionArea onClick={() => this.setState({showFull: !this.state.showFull})}>
                      <CardMedia
                        image={this.props.subscription.imgUrl}
                        title={this.props.subscription.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                         {this.props.subscription.title}
                        </Typography>
                        <Typography component="p">
                          {this.formatDescription()}
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
      case NotifyRenderType.SubscribeConfirm:
      return <SubscribeComponent isTrial={false}
                                 onTry={this.subscribe}
                                 onCancel={this.cancel}/>
      case NotifyRenderType.TrialConfirm: 
        return <SubscribeComponent isTrial={true}
                                   onTry={this.subscribe}
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
                <Button variant="contained" 
                        size="small"
                        color="primary"
                        onClick={()=>this.setState({renderType: NotifyRenderType.SubscribeConfirm})} >
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

    formatDescription = () => {
      const n = 80;
      const desc = this.props.subscription.description
      return this.state.showFull
        ? desc 
        : desc.length > n
            ? desc.substring(0, n) + '...'
            : desc;
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
                        onClick={() => this.setState({renderType: NotifyRenderType.TrialConfirm})}>
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