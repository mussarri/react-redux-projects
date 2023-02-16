import { configureStore } from "@reduxjs/toolkit";
import textSlice from "./textSlice/textSlice";

export default configureStore({
  reducer: {
    text: textSlice,
  },
});
