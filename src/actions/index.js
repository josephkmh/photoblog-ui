import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const FETCH_STREAM = 'fetch_stream';

export function fetchStream() {
  const request = axios.get(`${BASE_URL}/stream`);
  return {
    type: FETCH_STREAM,
    payload: request,
  };
}
