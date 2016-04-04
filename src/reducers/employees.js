import { Map } from 'immutable'
import { CHANGE_EMPLOYEE_FIELD, CHANGE_EMPLOYEE_PROJECT_FIELD, MARK_EMPLOYEE_AS_READ } from '../constants'
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
        case CHANGE_EMPLOYEE_FIELD: return employees.setIn(['entities', data.id, data.field], data.value)
        case CHANGE_EMPLOYEE_PROJECT_FIELD:
            return employees.setIn(['entities', data.eId, 'projects', data.projectId, data.field], data.value)
        case MARK_EMPLOYEE_AS_READ:
            return employees.getIn(['entities', data.id]) ? employees.setIn(['entities', data.id, 'read'], true) : employees
    }

    return employees
}