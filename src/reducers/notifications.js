import { ADD_APP_ERROR, REMOVE_APP_ERROR } from '../constants'

export default (notifications = {}, action) => {
    const { type, data } = action

    switch (type) {
        case ADD_APP_ERROR:
            return {...notifications, error: data.text}

        case REMOVE_APP_ERROR:
            return {...notifications, error: null}
    }

    return notifications
}