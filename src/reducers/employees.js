import { NEW_EMPLOYEE } from '../constants'
import { employees as defaultEmployees } from '../fixtures'

export default (employees = defaultEmployees, action) => {
    const { type, data } = action

    switch (type) {

    }

    return employees
}