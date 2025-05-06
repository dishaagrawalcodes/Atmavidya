import { createSlice } from "@reduxjs/toolkit";

const aiSlice = createSlice({
  name: "ai",
  initialState: {
    showGptSearch: false,
    gptResponse: null,
    gptResponseList: null,
    movieList: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptResult: (state, action) => {
      const { gptResultList } = action.payload;

      state.gptResultList = gptResultList;
    },
  },
});

export const { toggleGptSearchView, addGptResult } = aiSlice.actions;
export default aiSlice.reducer;
