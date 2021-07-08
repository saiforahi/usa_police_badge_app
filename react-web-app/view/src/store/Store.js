import { configureStore } from '@reduxjs/toolkit'
import swiperSlice from './slices/CardSwipeSlice'
import DashboardSlice from './slices/DashboardSlice'
import NotificationSlice from './slices/NotificationSlice'
import RatingSlice from './slices/RatingSlice'
import SidebarSlice from './slices/SideBarSlice'
import UserSlice from './slices/UserSlice'
export default configureStore({
  reducer: {
    //swiper: swiperSlice,
    sidebar: SidebarSlice,
    dashboard: DashboardSlice,
    user: UserSlice,
    notifications:NotificationSlice,
    ratings: RatingSlice
  },
})