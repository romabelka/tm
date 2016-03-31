import store from './store'

//not really pure function, but it's very handy.
export function getRelation(entity, relation) {
    const state = store.getState()
    if (!entity[relation] || !state[relation]) return []
    return state[relation].filter(el => entity[relation].includes(el.id))
}