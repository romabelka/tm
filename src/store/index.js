import { createStore, compose, applyMiddleware } from 'redux'
import reducer from '../reducers'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import randomId from '../middlewares/randomId'

const isPropduction = process.env.NODE_ENV == "production"
const commonMiddlewares = [applyMiddleware(multi, thunk, randomId)]
const envMiddlewares = isPropduction ? require('./prod').default : require('./dev').default

const enhancer = compose(...commonMiddlewares.concat(envMiddlewares))

const store = createStore(reducer, {}, enhancer)

//for debug only, no need in production
window.store = store

if (module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers').default))
}

export default store