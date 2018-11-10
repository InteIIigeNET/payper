import ISubscription from './ISubscription';

export default interface IEdition
{
    title: string,
    description: string,
    subscriptions?: ISubscription[]
}