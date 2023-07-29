export const apiPath = 'https://sozdun-kuchu.onrender.com/api/';

export const apiEndpoints = {
  login: 'auth/login/',
  siginUp: 'auth/signup/',
  getPosts: 'posts/',
  like: '/like/',
  removeLike: '/remove_like/',
  comments: '/comments/',
  commentsCreate: '/comments/create/',
};

export const enum METHODS {
  get = 'GET',
  post = 'POST',
  patch = 'PATCH',
  delete = 'DELETE',
  put = 'PUT',
}
