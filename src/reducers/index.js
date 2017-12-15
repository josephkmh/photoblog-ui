import { combineReducers } from 'redux';
import StreamReducer from './reducer_stream';

const rootReducer = combineReducers({
  stream: StreamReducer,
});

export default rootReducer;
