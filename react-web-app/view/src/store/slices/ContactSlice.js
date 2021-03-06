import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { JsonClient } from 'src/config'
const initialState = {
  data:[],
  status:'idle',
  error:''
}

export const fetchContactsData = createAsyncThunk('contacts/fetchContactsData', async () => {
    const response = await JsonClient.get('contact/list/')
    return response.data
})

export const contactsSlice = createSlice({
  name: 'contacts',
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
    [fetchContactsData.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchContactsData.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.data = action.payload
    },
    [fetchContactsData.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
})

// Action creators are generated for each case reducer function
//export const { fetchNotifications} = dashboardSlice.actions

export default contactsSlice.reducer