import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const FETCH_ALBUM = 'fetch_album';
export const FETCH_ALBUMS = 'fetch_albums';
export const FETCH_PHOTO = 'fetch_photo';
export const FETCH_STREAM = 'fetch_stream';
export const SORT_IMAGES = 'sort_images';

export function fetchStream() {
  const request = axios.get(`${BASE_URL}/stream`);
  return {
    type: FETCH_STREAM,
    payload: request,
  };
}

export function fetchAlbum(name) {
  const request = axios.get(`${BASE_URL}/albums/${name}`)
    .catch((e) => {
      console.log(e);
      return {
        album: {
          error: true,
          message: e.message,
        },
      };
    });
  return {
    type: FETCH_ALBUM,
    payload: request,
  };
}

export function fetchAlbums() {
  const request = axios.get(`${BASE_URL}/albums`)
    .catch((e) => {
      console.log(e);
      return {
        albums: {
          error: true,
          message: e.message,
        },
      };
    });
  return {
    type: FETCH_ALBUMS,
    payload: request,
  };
}

export function fetchPhoto(id) {
  const request = axios.get(`${BASE_URL}/photo/${id}`)
    .catch((e) => {
      console.log(e);
      return {
        photo: {
          error: true,
          message: e.message,
        },
      };
    });
  return {
    type: FETCH_PHOTO,
    payload: request,
  }
}

export function sortImages(key, order) {
  return {
    type: SORT_IMAGES,
    payload: { key, order },
  };
}
