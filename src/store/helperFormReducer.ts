import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api/api';

interface IHelpForm {
  show: boolean;
}

const initialHelpForm: IHelpForm = {
  show: false,
};

export const HelpFormSlice = createSlice({
  name: 'Auth',
  initialState: initialHelpForm,
  reducers: {
    setShow: (state: IHelpForm, action) => {
      state.show = action.payload;
    },
  },
});

const { actions, reducer: HelpFormReducer } = HelpFormSlice;

export const { setShow } = actions;

export default HelpFormReducer;
