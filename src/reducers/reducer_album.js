import _ from 'lodash';
import {
  FETCH_ALBUM,
  SORT_IMAGES,
} from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_ALBUM:
      if (action.payload.status !== 200) {
        return {
          error: true,
        };
      }
      return action.payload.data.album;
    case SORT_IMAGES: {
      const sorted = _.orderBy(state, [action.payload.key], [action.payload.order]);
      return sorted;
    }
    default:
      return state;
  }
}
