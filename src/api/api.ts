import { ISiginIn, ISiginUp } from '../types/TypesComponents';
import { apiPath, apiEndpoints, METHODS } from './apiPath';


// Почему не удалили? Не надо держать комментированный код, если нужно будет всегда можно из git найти
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
        // везде этот headers повторяется создавая шум, можно было бы сделать
        // на fetch чтобы она по умолчанию отправляла JSON (либо использовать axios)
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      // бесполезные проверки. Можно было сразу return response.status
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
        // Тут тоже самое что и в предыдущем
        // Каждая функция (siginUp, login, getPosts и т.д.)
        // cодержит один и тот же повторяемый код и занимает около 13-14 строк
        // вместо 3-4
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
        method: METHODS.post,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Token ${tokenUser}`,
        },
      });
      if (response.status) {
        console.log(response.status);
        return response.status;
      }
    } catch (err) {
      console.error(err);
    }
  },
  async removeLike(id: number, tokenUser: string) {
    try {
      const response = await fetch(
        `${apiPath}${apiEndpoints.getPosts}${id}${apiEndpoints.removeLike}`,
        {
          method: METHODS.post,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Token ${tokenUser}`,
          },
        }
      );
      if (response.status) {
        console.log(response.status);
        return response.status;
      }
    } catch (err) {
      console.error(err);
    }
  },
  async getComments(id: number, tokenUser: string) {
    try {
      const response = await fetch(
        `${apiPath}${apiEndpoints.getPosts}${id}${apiEndpoints.comments}`,
        {
          method: METHODS.get,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status) {
        console.log(response.status);
        const data = await response.json();
        console.log(data);
        return data;
      }
    } catch (err) {
      console.error(err);
    }
  },
  async commentsCreate(id: number, tokenUser: string, text: string) {
    try {
      const response = await fetch(
        `${apiPath}${apiEndpoints.getPosts}${id}${apiEndpoints.commentsCreate}`,
        {
          method: METHODS.post,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Token ${tokenUser}`,
          },
          body: JSON.stringify({ text: text }),
        }
      );
      if (response.status) {
        console.log(response.status);
        const data = await response.json();
        console.log(data);
        return data;
      }
    } catch (err) {
      console.error(err);
    }
  },
  async setPost(title: string, text: string, hashtag: string) {
    try {
      const response = await fetch(`${apiPath}${apiEndpoints.getPosts}`, {
        method: METHODS.post,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: title, text: text, hashtag: hashtag }),
      });
      if (response.status) {
        if (response.status == 201) {
          console.log(response);
        }
        const data = await response.json();
        console.log(data);
        return data;
      }
    } catch (err) {
      console.error(err);
    }
  },
};
