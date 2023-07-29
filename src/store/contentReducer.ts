import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api/api';
import { TPosts } from '../types/TypesComponents';

interface IContent {
  posts: TPosts[];
  post: TPosts;
}

const initialContent: IContent = {
  posts: [],
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
};

export const GetPosts = createAsyncThunk('Content/GetPosts', async () => {
  const data = await api.getPosts();
  return data;
});

export const GetPost = createAsyncThunk('Content/GetPost', async (id: number) => {
  const data = await api.getPost(id);
  return data;
});

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
  },
});

const { actions, reducer: ContentReducer } = ContentSlice;

// export const {} = actions;

export default ContentReducer;
