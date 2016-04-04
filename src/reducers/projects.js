import { Map } from 'immutable'
import { NEW_PROJECT, CHANGE_PROJECT_FIELD, MARK_PROJECT_AS_READ } from '../constants'
import { projects as defaultProjects} from '../fixtures'

const defaultState = Map({
    loading: false,
    loaded: true,
    error: null,
    entities: defaultProjects
})

export default (projects = defaultState, action) => {
    const { type, data } = action

    switch (type) {
        case CHANGE_PROJECT_FIELD: return projects.setIn(['entities', data.id, data.field], data.value)
        case MARK_PROJECT_AS_READ:
            return projects.getIn(['entities', data.id]) ? projects.setIn(['entities', data.id, 'read'], true) : projects
    }

    return projects
}