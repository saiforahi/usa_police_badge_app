import { configureStore } from '@reduxjs/toolkit'
import swiperSlice from './CardSwipeSlice'
import DashboardSlice from './DashboardSlice'
import sidebarSlice from './SideBarSlice'
export default configureStore({
  reducer: {
    //swiper: swiperSlice,
    sidebar: sidebarSlice,
    dashboard: DashboardSlice
  },
})