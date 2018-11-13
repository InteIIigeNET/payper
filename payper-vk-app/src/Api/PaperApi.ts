import axios from "axios";
import buildApiUrl from '../Utils/urlBuilder'
import ValidationResult from '../models/ValidationResult'
import Subscription from '../models/Subscription';

export default class PaperApi
{
    static async register(id : number, email : string)
    {
        await axios.post(buildApiUrl(`users/add?id=${id}&email=${email}`))
    }

    static async getAllSubscriptionsFor(email : string) : Promise<Subscription[]>
    {
        return await axios.get<Subscription[]>(buildApiUrl(`subscriptions/all?email=${email}`))
                    .then(response => response.data)
    }

    static async subscribe(email : string, code : string)
    {
        await axios.post(buildApiUrl(`subscriptions/subscribe?email=${email}&code=${code}`))
    }

    static async unsubscribe(email : string, code : string)
    {
        await axios.post(buildApiUrl(`subscriptions/unsubscribe?email=${email}&code=${code}`))
    }

    static async getPayedSubscriptions(email : string, code : string) : Promise<Subscription>
    {
        return await axios.get(buildApiUrl(`subscriptions/list?email=${email}&code=${code}`))
                          .then(response => response.data)
    }

    static async addSubscriptions(email : string, code : string)
    {
        await axios.post(buildApiUrl(`subscriptions/add?email=${email}`))
    }

    static async checkPromo(email : string, code : string, promocode : string) : Promise<ValidationResult>
    {
        return await axios.get(buildApiUrl(`subscriptions/check_promo?email=${email}&code=${code}&promocode=${promocode}`))
                          .then(response => response.data)
    }
}