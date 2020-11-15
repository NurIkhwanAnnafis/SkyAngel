import { combineReducers } from 'redux';
import counter from '../stores/reducers/counter'

const rootReducer = combineReducers({
    counter
});

export default rootReducer;