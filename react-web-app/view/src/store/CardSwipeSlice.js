import { createSlice } from '@reduxjs/toolkit'
import { WebSocketBridge } from 'django-channels'

const initialState = {
  channel : {},
  value: 0,
}

export const swiperSlice = createSlice({
  name: 'swiper',
  initialState,
  reducers: {
    initiate: (state) => {
      let web_socket = new WebSocketBridge()
      web_socket.connect('ws://103.123.8.52:8075/nfc/notifications')
      web_socket.addEventListener("message", function(event) {
        console.log(event.data);
      });
      state.channel = web_socket
    },
  },
  extraReducers: {
    "dashboard/fetchDashboardData": (state, { payload }) => {
      console.log('extra reducer from card slice----',state)
      // Same logic
    },
  },
})

// Action creators are generated for each case reducer function
export const { initiate} = swiperSlice.actions

export default swiperSlice.reducer