import { configureStore } from '@reduxjs/toolkit'
import { loaderSlice } from './loaderReducer'

export const store = configureStore({
  reducer: {
    loader: loaderSlice.reducer,
  },
})