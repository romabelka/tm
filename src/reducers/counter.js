import { INCREMENT } from '../constants'

export default (state = 0, action) => {
    const { data, type } = action
    switch (type) {
        case INCREMENT: return state - data.value
    }
    return state
}