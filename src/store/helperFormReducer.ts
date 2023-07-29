import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api/api';

interface IHelpForm {
  show: boolean;
  sacsess: boolean;
}

const initialHelpForm: IHelpForm = {
  show: false,
  sacsess: false,
};

export const SetHelp = createAsyncThunk(
  'Help/SetHelp',
  async ({ title, text, phone }: { title: string; text: string; phone: string }) => {
    const data = await api.setHelp(title, text, phone);
    return data;
  }
);

export const HelpFormSlice = createSlice({
  name: 'Help',
  initialState: initialHelpForm,
  reducers: {
    setShow: (state: IHelpForm, action) => {
      state.show = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(SetHelp.fulfilled, (state, action) => {
      if (action.payload === 201) {
        state.sacsess = true;
      }
    });
  },
});

const { actions, reducer: HelpFormReducer } = HelpFormSlice;

export const { setShow } = actions;

export default HelpFormReducer;
