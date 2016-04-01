import { combineReducers } from 'redux'
import employees from './employees'
import projects from './projects'

export default combineReducers({
    employees,
    projects
})