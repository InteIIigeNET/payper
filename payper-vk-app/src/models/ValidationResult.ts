export default interface ValidationData
{
    IsSubscribed : boolean,
    IsPaidFor : boolean,
    IsPromocodeValid : boolean
}

export default interface ValidationResult
{
    Success : boolean,
    Message : string,
    Data : ValidationData
}