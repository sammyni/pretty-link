/* jshint esversion: 6 */

import axios from 'axios';
import { API_HOST } from '../config';



// Axios default
axios.defaults.baseURL = API_HOST;
axios.defaults.headers.post.crossDomain = true;

axios.defaults.validateStatus = (status) => {
  return status < 500; // Reject only if the status code is greater than or equal to 500
};

const withoutAuthHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};

export default {
    withoutAuthGet: (uri) => axios.get(uri, {
            headers: withoutAuthHeaders
    }),

    withoutAuthPost: (uri, body = {}) => axios.post(uri, body, {
            headers: withoutAuthHeaders
    }),

    withoutAuthPut:  (uri, body = {}) => axios.put(uri, body, {
        headers: withoutAuthHeaders
    }),

    withoutAuthPatch: ( uri,  body = {})  => axios.patch(uri, body, {
        headers: withoutAuthHeaders
    }),

    withoutAuthDelete: uri  => axios.delete(uri, {
        headers: withoutAuthHeaders
    }),
};