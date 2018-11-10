interface SubscribeProps{
    isTrial: boolean,
    onTry:  (email?: string, promo?: string) => void,
    onCancel:  React.ReactEventHandler<{}>
}