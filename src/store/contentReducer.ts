import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api/api';
import { TPosts } from '../types/TypesComponents';

interface IContent {
  posts: TPosts[];
  commentsIsPosts: TPosts[];
  post: TPosts;
  isLike: boolean;
  isDisLike: boolean;
  commentsCreate: boolean;
}

const initialContent: IContent = {
  posts: [],
  commentsIsPosts: [],
  post: {
    id: 0,
    author: {
      username: '',
    },
    title: '',
    text: '',
    hashtag: '',
    likes: 0,
    user_liked: false,
  },
  isLike: false,
  isDisLike: false,
  commentsCreate: false,
};

export const GetPosts = createAsyncThunk('Content/GetPosts', async () => {
  const data = await api.getPosts();
  return data;
});

export const GetPost = createAsyncThunk('Content/GetPost', async (id: number) => {
  const data = await api.getPost(id);
  return data;
});

export const SetLike = createAsyncThunk(
  'Content/SetLike',
  async ({ id, tokenUser }: { id: number; tokenUser: string }) => {
    const data = await api.setLike(id, tokenUser);
    return data;
  }
);

export const RemoveLike = createAsyncThunk(
  'Content/RemoveLike',
  async ({ id, tokenUser }: { id: number; tokenUser: string }) => {
    const data = await api.removeLike(id, tokenUser);
    return data;
  }
);

export const GetComments = createAsyncThunk(
  'Content/GetComments',
  async ({ id, tokenUser }: { id: number; tokenUser: string }) => {
    const data = await api.getComments(id, tokenUser);
    return data;
  }
);

export const CommentsCreate = createAsyncThunk(
  'Content/CommentsCreate',
  async ({ id, tokenUser, text }: { id: number; tokenUser: string; text: string }) => {
    const data = await api.commentsCreate(id, tokenUser, text);
    return data;
  }
);

export const ContentSlice = createSlice({
  name: 'Content',
  initialState: initialContent,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(GetPost.fulfilled, (state, action) => {
      state.post = action.payload;
    });
    builder.addCase(SetLike.fulfilled, (state, action) => {
      if (action.payload === 200) {
        state.isLike = true;
      }
    });
    builder.addCase(RemoveLike.fulfilled, (state, action) => {
      if (action.payload === 200) {
        state.isDisLike = true;
      }
    });
    builder.addCase(CommentsCreate.fulfilled, (state, action) => {
      if (action.payload === 200) {
        state.commentsCreate = true;
        console.log('_---__');
      }
    });
    builder.addCase(GetComments.fulfilled, (state, action) => {
      if (action.payload === 200) {
        state.commentsCreate = true;
        console.log('_---__');
      }
    });
  },
});

const { actions, reducer: ContentReducer } = ContentSlice;

// export const {} = actions;

export default ContentReducer;
