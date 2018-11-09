interface TrialProps{
    onTry:  (email?: string, promo?: string) => void,
    onCancel:  React.ReactEventHandler<{}>
}