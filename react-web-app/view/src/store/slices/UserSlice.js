import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { JsonClient } from 'src/config'
const initialState = {
  data : {},
  token:'',
  group:'',
  status: 'idle',
  error:''
}

export const fetchDetailsThunk = createAsyncThunk('user/fetchDetailsThunk', async (id) => {
  const response = await JsonClient.get('profile/details/'+id)
  return response.data
})

export const setGroupThunk = createAsyncThunk('user/setGroupThunk', async (group) => {
  return group
})



export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state,action) => {
      state.token = action.payload
    },
    setGroup: (state,action) => {
      state.group= action.payload
    },
    resetUser:(state,action)=>{
      console.log('hi from reset reducer')
      state.data={}
      state.token = ''
      state.group = ''
      state.status = 'idle'
      state.error = ''
    }
  },
  extraReducers: {
    [fetchDetailsThunk.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchDetailsThunk.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.data = action.payload
    },
    [fetchDetailsThunk.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [setGroupThunk.fulfilled]: (state, action) => {
      state.group = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setToken,setGroup,resetUser} = userSlice.actions

export default userSlice.reducer