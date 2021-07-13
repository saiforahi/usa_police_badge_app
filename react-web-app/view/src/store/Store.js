import { configureStore } from '@reduxjs/toolkit'
import ContactSlice from './slices/ContactSlice'
import DashboardSlice from './slices/DashboardSlice'
import DepartmentSlice from './slices/DepartmentSlice'
import EmployeesSlice from './slices/EmployeesSlice'
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
    ratings: RatingSlice,
    employees:EmployeesSlice,
    departments:DepartmentSlice,
    contacts : ContactSlice
  },
})