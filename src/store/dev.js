import { applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import DevTools from '../containers/Root/DevTools'

const logger = createLogger()
export default [applyMiddleware(logger), DevTools.instrument()]