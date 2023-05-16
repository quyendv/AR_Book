import { createSlice } from '@reduxjs/toolkit';

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    createModal: false,
    deleteModal: false,
    deletedFileName: null,
  },
  reducers: {
    setCreateModal: (state, action) => {
      state.createModal = action.payload;
    },
    setDeleteModal: (state, action) => {
      state.deleteModal = action.payload.status;
      state.deletedFileName = action.payload.filename;
    },
  },
});

export const { setCreateModal, setDeleteModal } = globalSlice.actions;

export default globalSlice.reducer;
