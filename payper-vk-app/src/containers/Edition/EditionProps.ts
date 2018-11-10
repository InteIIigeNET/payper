import ISubscription from 'src/models/ISubscription';

export default interface EditionProps{
    title: string,
    description: string,
    subscriptions?: ISubscription[]
}