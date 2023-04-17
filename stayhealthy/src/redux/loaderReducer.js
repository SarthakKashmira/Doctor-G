import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading:false,
}

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    showLoader:(state,action)=>{
      state.loading=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { showLoader } = loaderSlice.actions
