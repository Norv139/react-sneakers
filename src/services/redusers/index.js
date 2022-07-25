import { combineReducers } from 'redux';
import cardReducer from './card'
import componentsReducer from './components'

const rootReducer = combineReducers({
    card: cardReducer,
    components: componentsReducer
})

export default rootReducer