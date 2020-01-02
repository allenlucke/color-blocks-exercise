import { combineReducers } from 'redux';
//Reducers
import getBlocksReducer from './getBlocks.reducer';

const rootReducer = combineReducers({
    getBlocksReducer,
})
export default rootReducer;