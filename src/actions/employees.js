import { CHANGE_EMPLOYEE_FIELD, CHANGE_EMPLOYEE_PROJECT_FIELD, NEW_EMPLOYEE, MARK_EMPLOYEE_AS_READ } from '../constants'
import { getProjectEmployees } from '../utils'
import { emailRegExp} from '../settings'

export function markEmployeeAsRead(id) {
    return {
        type: MARK_EMPLOYEE_AS_READ,
        data: { id }
    }
}

export function changeEmployeeField(id, field, value) {
    const validate =  validations[field] ?  validations[field](value) : null
    return {
        type: CHANGE_EMPLOYEE_FIELD,
        data: {
            id, field, value
        },
        validate
    }
}

export function changeEmployeeProjectField({ eId, projectId, field, value }) {
    const validate =  validations[field] ?  validations[field]({ eId, projectId, value }) : null
    return {
        type: CHANGE_EMPLOYEE_PROJECT_FIELD,
        data: {
            eId, projectId, field, value
        },
        validate
    }
}

//should return error text or null for valid data
const validations = {
    startDate: ({ eId, projectId, value }) => store => {
        const project = store.projects.getIn(['entities', projectId])
        const employee = store.employees.getIn(['entities', eId])
        if (employee.getIn(['projects', projectId,'endDate']) < value) return "End date can't be less then start"
        return validateDateRange(project, value)
    },
    endDate: ({ eId, projectId, value }) => store => {
        const project = store.projects.getIn(['entities', projectId])
        const employee = store.employees.getIn(['entities', eId])
        if (employee.getIn(['projects', projectId,'startDate']) > value) return "End date can't be less then start"
        return validateDateRange(project, value)
    },
    email: value => store => {
        if (!emailRegExp.test(value)) return 'Invalid Email'
    }
}

function validateDateRange(project, value) {
    if (value >= project.get('startDate') && value <= project.get('endDate')) return null
    return 'date should be in project date range'
}