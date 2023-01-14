import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  status: {
    isLoading: false,
    isError: false,
  },
};

const recipientSlice = createSlice({
  name: 'recipient',
  initialState,
  reducers: {
    setRecipientList: (state, action) => {
      state.list = action.payload;
    },
    setStatusAPI: (state, action) => {
      state.status = {
        ...state.status,
        ...action.payload,
      };
    },
  },
});

export const { setRecipientList, setStatusAPI } = recipientSlice.actions;
export default recipientSlice.reducer;
