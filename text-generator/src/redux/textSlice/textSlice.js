import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchText = createAsyncThunk("text/fetcTextAsync", async (url) => {
  const response = await axios.get(url);
  return response.data;
});

export const textSlice = createSlice({
  name: "text",
  initialState: {
    value: "",
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchText.fulfilled]: (state, action) => {
      state.value = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchText.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchText.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = textSlice.actions;

export default textSlice.reducer;
