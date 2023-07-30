import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api/api';
import { ISiginIn, ISiginUp } from '../types/TypesComponents';

interface IInitialAuth {
  userData: {
    username: string;
    token: string;
  };
  isAuth: boolean;
  isRegister: boolean;
}

const initialAuth: IInitialAuth = {
  userData: {
    username: '',
    token: localStorage.getItem('tokenSoz') ? (localStorage.getItem('tokenSoz') as string) : '',
  },
  isAuth: localStorage.getItem('tokenSoz')
    ? JSON.parse(localStorage.getItem('tokenSoz') as string)
    : false,
  isRegister: false,
};

export const SiginUp = createAsyncThunk('Auth/SiginUp', async (from: ISiginUp) => {
  const data = await api.siginUp(from);
  return data;
});

export const Login = createAsyncThunk('Auth/Login', async (from: ISiginIn) => {
  const data = await api.login(from);
  return data;
});

export const AuthSlice = createSlice({
  name: 'Auth',
  initialState: initialAuth,
  reducers: {
    setIsAuth: (state: IInitialAuth, action) => {
      state.isAuth = action.payload;
    },
    setExit: (state: IInitialAuth) => {
      state.isAuth = false;
      localStorage.removeItem('isAuth');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(SiginUp.fulfilled, (state, action) => {
      if (action.payload === 204) {
        state.isRegister = true;
      }
    });
    builder.addCase(Login.fulfilled, (state, action) => {
      state.isAuth = true;
      localStorage.setItem('isAuth', JSON.stringify(true));
      localStorage.setItem('tokenSoz', JSON.stringify(action.payload.token));
      state.userData = action.payload;
    });
  },
});

const { actions, reducer: AuthReducer } = AuthSlice;

export const { setIsAuth, setExit } = actions;

export default AuthReducer;
