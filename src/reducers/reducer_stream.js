import _ from 'lodash';
import {
  FETCH_STREAM,
  SORT_IMAGES,
} from '../actions';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_STREAM:
      console.log(action);
      return action.payload.data.data;
    case SORT_IMAGES: {
      const sorted = _.orderBy(state, [action.payload.key], [action.payload.order]);
      return sorted;
    }
    default:
      return state;
  }
}
