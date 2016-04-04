import { Map } from 'immutable'
import { NEW_PROJECT } from '../constants'
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

    }

    return projects
}