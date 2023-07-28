import { configureStore } from '@reduxjs/toolkit';
import ThemesReducer from './themeReducer';
import AuthReducer from './authUserReducer';
import ContentReducer from './contentReducer';

export const store = configureStore({
  reducer: {
    ThemesReducer: ThemesReducer,
    AuthReducer: AuthReducer,
    ContentReducer: ContentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
