import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { JsonClient } from 'src/config'
const initialState = {
  data:[],
  status:'idle',
  error:''
}

export const fetchRatingsThunk = createAsyncThunk('ratings/fetchRatingsThunk', async () => {
  const response = await JsonClient.get('officer/reveiw/list/')
  return response.data
})

export const DataForTable = state=>{
    let data =[]
    for(let index=0;index<state.data.data.length;index++){
        data.push({'#':index+1,'Employee Name':state.data.data[index].officer.first_name})
    }
    return data
}

export const ratingSlice = createSlice({
  name: 'ratings',
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [fetchRatingsThunk.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchRatingsThunk.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.data = action.payload
    },
    [fetchRatingsThunk.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  }
})

// Action creators are generated for each case reducer function

export default ratingSlice.reducer