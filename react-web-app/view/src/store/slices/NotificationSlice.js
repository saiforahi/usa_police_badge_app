import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { JsonClient } from 'src/config'
const initialState = {
  data:[],
  status:'idle',
  error:''
}

export const fetchNotificationsThunk = createAsyncThunk('notifications/fetchNotificationsThunk', async () => {
  const response = await JsonClient.get('historical/data/')
  return response.data
})

export const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [fetchNotificationsThunk.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchNotificationsThunk.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.data = action.payload
    },
    [fetchNotificationsThunk.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  }
})

// Action creators are generated for each case reducer function

export default notificationSlice.reducer