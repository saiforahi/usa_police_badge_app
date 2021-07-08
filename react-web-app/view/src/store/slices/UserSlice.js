import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data : {},
  status: 'idle',
  error:''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initiate: (state) => {
      
    },
  },
  
})

// Action creators are generated for each case reducer function
export const { initiate} = userSlice.actions

export default userSlice.reducer