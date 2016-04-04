import store from './store'

//not really pure function, but it's very handy.
export function getRelation(entity, relation) {
    const state = store.getState()
    if (!entity[relation] || !state[relation]) return []
    return state[relation].get('entities').filter(el => entity[relation].includes(el.id))
}

export function getEmploeeProjects(employee) {

}

export function getProjectEmployees(projectId) {
    return store.getState().employees.get('entities')
        .filter(employee => employee.getIn(['projects', projectId]))
}