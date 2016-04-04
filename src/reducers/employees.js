import { Map, fromJS } from 'immutable'
import { CHANGE_EMPLOYEE_FIELD, CHANGE_EMPLOYEE_PROJECT_FIELD, MARK_EMPLOYEE_AS_READ, FETCH_ALL, SUCCESS, START } from '../constants'
import { employees as defaultEmployees } from '../fixtures'

const defaultState = Map({
    loading: false,
    loaded: true,
    error: null,
    entities: new Map({})
})

export default (employees = defaultState, action) => {
    const { type, data } = action

    switch (type) {
        case CHANGE_EMPLOYEE_FIELD:
            return employees.setIn(['entities', data.id, data.field], data.value)

        case CHANGE_EMPLOYEE_PROJECT_FIELD:
            return employees.setIn(['entities', data.eId, 'projects', data.projectId, data.field], data.value)

        case MARK_EMPLOYEE_AS_READ:
            return employees.getIn(['entities', data.id]) ? employees.setIn(['entities', data.id, 'read'], true) : employees

        case FETCH_ALL + START:
            return employees.set('loading', true)

        case FETCH_ALL + SUCCESS:
            return employees.set('entities', fromJS(data.employees)).set('loading', false)
    }

    return employees
}