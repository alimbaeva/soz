import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api/api';
import { TPosts } from '../types/TypesComponents';

interface IContent {
  posts: TPosts[];
}

const initialContent: IContent = {
  posts: [],
};

export const GetPosts = createAsyncThunk('Content/GetPosts', async () => {
  const data = await api.getPosts();
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
  },
});

const { actions, reducer: ContentReducer } = ContentSlice;

// export const {} = actions;

export default ContentReducer;
