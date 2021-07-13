import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { JsonClient } from 'src/config'
const initialState = {
  data:[],
  status:'idle',
  error:''
}

export const fetchDepartmentsThunk = createAsyncThunk('departments/fetchDepartmentsThunk', async () => {
  const response = await JsonClient.get('department/list/')
  return response.data
})

export const departmentsSlice = createSlice({
  name: 'departments',
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [fetchDepartmentsThunk.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchDepartmentsThunk.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.data = action.payload
    },
    [fetchDepartmentsThunk.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  }
})

// Action creators are generated for each case reducer function

export default departmentsSlice.reducer