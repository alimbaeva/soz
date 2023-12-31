export interface DataI {
  id: number;
  title: string;
  text: string;
  personal: string;
}

export interface InfoData {
  title: string;
  link: string;
}
export interface ISiginIn {
  username: string;
  password: string;
}

export interface ISiginUp extends ISiginIn {
  password1: string;
  password2: string;
}

export interface TPosts {
  id: number;
  author: {
    username: string;
  };
  title: string;
  text: string;
  hashtag: string;
  likes: number;
  user_liked: boolean;
}

export interface TPostComments {
  author: { username: string };
  id: number;
  likes: number;
  post: number;
  text: string;
  user_liked: boolean;
}

export type Inputs = {
  title: string;
  phone: string;
  text: string;
};
