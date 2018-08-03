import {
  FETCH_ALBUMS,
} from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_ALBUMS:
      if (action.payload.status !== 200) {
        return {
          error: true,
        };
      }
      return action.payload.data.albums;
    default:
      return state;
  }
}
