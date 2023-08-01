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
    token: '',
  },
  isAuth: false,
  isRegister: false,
};

// Все что внизу - церемониальный и бесполезный код
// Просто поставьте в localStorage токен
// Если токен есть? - Значит авторизован
// Если нет? - то не авторизован
// Вы и так в конце в локалсторедж положили зачем такой баласт кода?

export const SiginUp = createAsyncThunk('Auth/SiginUp', async (from: ISiginUp) => {
  const data = await api.siginUp(from);
  return data;
});

export const Login = createAsyncThunk('Auth/Login', async (from: ISiginIn) => {
  console.log(from);
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
      state.userData = action.payload;
      console.log(action.payload);
    });
  },
});

const { actions, reducer: AuthReducer } = AuthSlice;

export const { setIsAuth, setExit } = actions;

export default AuthReducer;
