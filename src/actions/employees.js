import { CHANGE_EMPLOYEE_FIELD, CHANGE_EMPLOYEE_PROJECT_FIELD, NEW_EMPLOYEE } from '../constants'
import { getProjectEmployees } from '../utils'

export function changeProjectField(id, field, value) {
    return {
        type: CHANGE_EMPLOYEE_FIELD,
        data: {
            id, field, value
        }
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
    }
}

function validateDateRange(project, value) {
    if (value >= project.get('startDate') && value <= project.get('endDate')) return null
    return 'date should be in project date range'
}