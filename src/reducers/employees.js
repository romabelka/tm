import { Map } from 'immutable'
import { NEW_EMPLOYEE } from '../constants'
import { employees as defaultEmployees } from '../fixtures'

const defaultState = Map({
    loading: false,
    loaded: true,
    error: null,
    entities: defaultEmployees
})

export default (employees = defaultState, action) => {
    const { type, data } = action

    switch (type) {

    }

    return employees
}