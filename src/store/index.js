import { createStore, compose, applyMiddleware } from 'redux'
import reducer from '../reducers'
import createLogger from 'redux-logger'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import randomId from '../middlewares/randomId'
import DevTools from '../containers/DevTools'

const logger = createLogger()
const enhancer = compose(
    applyMiddleware(multi, thunk, randomId, logger),
    DevTools.instrument()
)

const store = createStore(reducer, {}, enhancer)

//for debug only, no need in production
window.store = store

if (module.hot) {
    module.hot.accept('../reducers', () =>
        store.replaceReducer(require('../reducers').default)
    );
}

export default store