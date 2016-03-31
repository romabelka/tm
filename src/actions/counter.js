import { INCREMENT } from '../constants'

export function increment() {
    return {
        type: INCREMENT,
        data: {
            value: 10
        }
    }
}