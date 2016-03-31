export default store => next => action => {
    const { withRandomId, ...rest} = action
    if (!withRandomId) return next(action)
    return next({...rest, randomId: Date.now()})
}