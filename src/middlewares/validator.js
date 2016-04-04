import { ADD_APP_ERROR, REMOVE_APP_ERROR} from '../constants'

export default store => next => action => {
    if (!action.validate) return next(action)
    const {validate, ...rest} = action

    const validationError = validate(store.getState())

    if (!validationError) return next(rest)

    next({
        type: ADD_APP_ERROR,
        data: {
            text: validationError
        }
    })

    setTimeout(() => next({type: REMOVE_APP_ERROR}), 10000)
}