import { combineReducers } from 'redux';
import StreamReducer from './reducer_stream';
import AlbumReducer from './reducer_album';
import AlbumsReducer from './reducer_albums';
import PhotoReducer from './reducer_photo';

const rootReducer = combineReducers({
  stream: StreamReducer,
  album: AlbumReducer,
  albums: AlbumsReducer,
  photo: PhotoReducer,
});

export default rootReducer;
