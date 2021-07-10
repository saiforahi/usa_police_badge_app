import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { JsonClient } from 'src/config'
const initialState = {
  data:[],
  status:'idle',
  error:''
}

export const fetchEmployeesThunk = createAsyncThunk('employees/fetchEmployeesThunk', async () => {
  const response = await JsonClient.get('employee/list/')
  return response.data
})

export const notificationSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [fetchEmployeesThunk.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchEmployeesThunk.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.data = action.payload
    },
    [fetchEmployeesThunk.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  }
})

// Action creators are generated for each case reducer function

export default notificationSlice.reducer