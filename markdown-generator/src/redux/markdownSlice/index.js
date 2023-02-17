import { createSlice } from "@reduxjs/toolkit";

export const markdownSlice = createSlice({
  name: "markdown",
  initialState: {
    text: "",
    convertedText: "",
  },
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
    setConvertedText: (state, action) => {
      console.log(state, action);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setText } = markdownSlice.actions;

export default markdownSlice.reducer;
