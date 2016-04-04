import { CHANGE_PROJECT_FIELD, NEW_PROJECT } from '../constants'
import { getProjectEmployees } from '../utils'

export function changeProjectField(id, field, value) {
    const validate = validations[field] ? validations[field](id, value) : null
    return {
        type: CHANGE_PROJECT_FIELD,
        data: {
            id, field, value
        },
        validate
    }
}

export function addNewProject() {
    return {
        type: NEW_PROJECT
    }
}

//should return error text or null for valid data
const validations = {
    startDate: (id, value) => (store) => {
        const employees = getProjectEmployees(id)
        const startBeforeNewDate = employees.filter(employee => employee.getIn(['projects', id, 'startDate']) < value)
        const names = startBeforeNewDate.map(employee => employee.get('name')).toArray()
        if (startBeforeNewDate.size) return `employees: ${names.join(', ')} starts before new date`
    },
    endDate: (id, value) => (store) => {
        const employees = getProjectEmployees(id)
        const endsAfterNewDate = employees.filter(employee => employee.getIn(['projects', id, 'endDate']) > value)
        const names = endsAfterNewDate.map(employee => employee.get('name')).toArray()
        if (endsAfterNewDate.size) return `employees: ${names.join(', ')} ends after new date`
    }
}