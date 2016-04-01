import { NEW_PROJECT } from '../constants'
import { projects as defaultProjects} from '../fixtures'

export default (projects = defaultProjects, action) => {
    const { type, data } = action

    switch (type) {

    }

    return projects
}