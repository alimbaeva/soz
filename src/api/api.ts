import { ISiginIn, ISiginUp } from '../types/TypesComponents';
import { apiPath, apiEndpoints, METHODS } from './apiPath';

// const defaultHeaders = (headers: object) => {
//   return {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//     ...headers,
//   };
// };

// async function fetchPost(body: object | string, endpoint: string, headers: object = {}) {
//   return await fetch(`${apiPath}${endpoint}`, {
//     method: 'POST',
//     headers: defaultHeaders(headers),
//     body: JSON.stringify(body),
//   });
// }

// async function fetchPach(body: object | string, endpoint: string, headers: object = {}) {
//   return await fetch(`${apiPath}${endpoint}`, {
//     method: METHODS.patch,
//     headers: defaultHeaders(headers),
//     body: JSON.stringify(body),
//   });
// }

// async function fetchGetDell(endpoint: string, headers: object = {}, method: string) {
//   return await fetch(`${apiPath}${endpoint}`, {
//     method: method,
//     headers: defaultHeaders(headers),
//   });
// }

export const api = {
  async siginUp(form: ISiginUp) {
    try {
      const response = await fetch(`${apiPath}${apiEndpoints.siginUp}`, {
        method: METHODS.post,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (response.status === 201) {
        return response.status;
      } else if (response.status === 204) {
        return response.status;
      }
    } catch (err) {
      console.error(err);
    }
  },
  async login(form: ISiginIn) {
    try {
      const response = await fetch(`${apiPath}${apiEndpoints.login}`, {
        method: METHODS.post,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (response.status) {
        const data = await response.json();
        console.log(data);
        return data;
      }
    } catch (err) {
      console.error(err);
    }
  },
  async getPosts() {
    try {
      const response = await fetch(`${apiPath}${apiEndpoints.getPosts}`, {
        method: METHODS.get,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (response.status) {
        const data = await response.json();
        console.log(data, response.status);
        return data;
      }
    } catch (err) {
      console.error(err);
    }
  },
  async getPost(id: number) {
    try {
      const response = await fetch(`${apiPath}${apiEndpoints.getPosts}${id}`, {
        method: METHODS.get,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (response.status) {
        const data = await response.json();
        console.log(data, response.status);
        return data;
      }
    } catch (err) {
      console.error(err);
    }
  },
  async setLike(id: number, tokenUser: string) {
    try {
      const response = await fetch(`${apiPath}${apiEndpoints.getPosts}${id}${apiEndpoints.like}`, {
        method: METHODS.get,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Token ${tokenUser}`,
        },
      });
      if (response.status) {
        const data = await response.json();
        console.log(data, response.status);
        return data;
      }
    } catch (err) {
      console.error(err);
    }
  },
};
