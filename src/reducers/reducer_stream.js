import _ from 'lodash';
import { FETCH_STREAM } from '../actions';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_STREAM:
      return action.payload.data.data;
    default:
      return state;
  }
}
