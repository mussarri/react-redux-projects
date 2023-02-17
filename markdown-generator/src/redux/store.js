import { configureStore } from '@reduxjs/toolkit'
import markdownSlice from './markdownSlice'

export default configureStore({
  reducer: {
    markdown: markdownSlice,
  },
})