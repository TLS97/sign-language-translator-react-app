import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  user: {
    username: "",
    translations: [],
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    updateTranslationsList: (state, action) => {
      state.user.translations.push(action.payload);
    },
  },
});

export const { setUser, setLoading, updateTranslationsList } =
  userSlice.actions;

export default userSlice.reducer;
