import { CHANGE_PROJECT_FIELD, NEW_PROJECT } from '../constants'

export function changeProjectField(id, field, value) {
    return {
        type: CHANGE_PROJECT_FIELD,
        data: {
            id, field, value
        }
    }
}

export function addNewProject() {
    return {
        type: NEW_PROJECT
    }
}

//should return error text or null for valid data
const validations = {
    startDate: (store) => null,
    endDate: (store) => null
}