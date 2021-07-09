import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { JsonClient } from 'src/config'
const initialState = {
  data : {},
  token:'',
  status: 'idle',
  error:''
}

export const fetchGroupThunk = createAsyncThunk('user/fetchGroupThunk', async (id) => {
  const response = await JsonClient.get('profile/details/'+id)
  return response.data
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state,action) => {
      state.token = action.payload
    },
  },
  extraReducers: {
    [fetchGroupThunk.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchGroupThunk.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.data = action.payload
    },
    [fetchGroupThunk.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  }
})

// Action creators are generated for each case reducer function
export const { initiate} = userSlice.actions

export default userSlice.reducer