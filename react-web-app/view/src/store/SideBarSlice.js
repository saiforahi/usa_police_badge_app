import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  sidebarShow: 'responsive'
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    changeState: (state,val) => {
      console.log('dispatching ----- ',val)
      state.sidebarShow = val.payload
      
        // switch (type) {
        //     case 'set':
        //       return {...state, ...rest }
        //     default:
        //       return state
        // }
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeState} = sidebarSlice.actions

export default sidebarSlice.reducer