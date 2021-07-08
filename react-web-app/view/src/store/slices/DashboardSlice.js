import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { JsonClient } from 'src/config'
const initialState = {
  data:{
    total_scan: 0,
    total_user: 0,
    total_badge : 0
  },
  notifications:[],
  status:'idle',
  error:''
}

export const fetchDashboardData = createAsyncThunk('dashboard/fetchDashboardData', async () => {
    const response = await JsonClient.get('dashboard/info/')
    return response.data
})

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    // fetchData: async(state) => {
    //     PUBLIC_API.get("dashboard/info/").then((res) => {
    //        state.data.total_scans=res.data.data.total_scan
    //        state.data.registered_officers= res.data.data.total_user
    //        state.data.total_badges = res.data.data.total_badge
    //        console.log('dashboard state --- ',state.data)
    //     });
    //     return state
    // },
    
  },
  extraReducers: {
    [fetchDashboardData.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchDashboardData.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.data = action.payload
    },
    [fetchDashboardData.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
})

// Action creators are generated for each case reducer function
//export const { fetchNotifications} = dashboardSlice.actions

export default dashboardSlice.reducer