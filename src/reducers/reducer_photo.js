import {
  FETCH_PHOTO,
} from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_PHOTO:
      if (action.payload.status !== 200) {
        return {
          error: true,
        };
      }
      return action.payload.data.data;
    default:
      return state;
  }
}
