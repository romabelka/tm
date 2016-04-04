import { combineReducers } from 'redux'
import employees from './employees'
import projects from './projects'
import notifications from './notifications'

export default combineReducers({
    employees,
    projects,
    notifications
})