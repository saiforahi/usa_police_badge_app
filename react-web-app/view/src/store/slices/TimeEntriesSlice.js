import { createSlice } from '@reduxjs/toolkit'
import { WebSocketBridge } from 'django-channels'

const initialState = {
  channel : {},
  value: 0,
}

export const timeEntriesSlice = createSlice({
  name: 'swiper',
  initialState,
  reducers: {
    
  },
  extraReducers: {
    "dashboard/fetchDashboardData": (state, { payload }) => {
      console.log('extra reducer from card slice----',state)
      // Same logic
    },
  },
})

// Action creators are generated for each case reducer function
export const { initiate} = timeEntriesSlice.actions

export default timeEntriesSlice.reducer