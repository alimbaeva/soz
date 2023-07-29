import { configureStore } from '@reduxjs/toolkit';
import ThemesReducer from './themeReducer';
import AuthReducer from './authUserReducer';
import ContentReducer from './contentReducer';
import HelpFormReducer from './helperFormReducer';

export const store = configureStore({
  reducer: {
    ThemesReducer: ThemesReducer,
    AuthReducer: AuthReducer,
    ContentReducer: ContentReducer,
    HelpFormReducer: HelpFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
