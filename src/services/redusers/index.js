import { combineReducers } from 'redux';
import cardReducer from './card'
import componentsReducer from './components'
import userReduser from './user'

const rootReducer = combineReducers({
    card: cardReducer,
    components: componentsReducer,
    user: userReduser
})

export default rootReducer