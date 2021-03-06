import React, { useEffect } from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'
import { TOKEN } from '../config'
import { Redirect, useHistory } from "react-router"
import { WebSocketBridge } from 'django-channels'
import CardSwipped from 'src/components/swipe/CardSwipped'
import swal from '@sweetalert/with-react'
import { useDispatch } from 'react-redux';
import { fetchDashboardData } from 'src/store/slices/DashboardSlice';
import { fetchNotificationsThunk } from 'src/store/slices/NotificationSlice'
import { fetchRatingsThunk } from 'src/store/slices/RatingSlice'
import { useSnackbar } from 'notistack';
import { fetchDetailsThunk } from 'src/store/slices/UserSlice'
import { fetchEmployeesThunk } from 'src/store/slices/EmployeesSlice'
import { fetchDepartmentsThunk } from 'src/store/slices/DepartmentSlice'

const TheLayout = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch = useDispatch()
  let history = useHistory()
  let web_socket = new WebSocketBridge()
  const isLoggedIn = () => {
    if (localStorage.getItem(TOKEN) === null || localStorage.getItem(TOKEN) === '') {
      return false;
    }
    return true;
  }

  useEffect(() => {
    dispatch(fetchDetailsThunk())
    dispatch(fetchEmployeesThunk())
    dispatch(fetchDepartmentsThunk())
    web_socket.connect('ws://103.123.8.52:8075/nfc/notifications')
    web_socket.addEventListener("message", function (event) {
      console.log(event.data);
      if (event.data.type == 'review.notification') {
        enqueueSnackbar(event.data.officer_name + ' got rated by ' + event.data.name, { variant: 'info' })
        dispatch(fetchRatingsThunk())
      }
      else {
        dispatch(fetchDashboardData())
        dispatch(fetchNotificationsThunk())
        enqueueSnackbar(event.data.officer_name + "'s badge (" + event.data.badge_number + ") got scanned", { variant: 'info' })
        swal({
          content: (<CardSwipped data={event.data} />),
          buttons: [false, 'Close']
        })
      }
    });
  }, [])
  return (
    <>
      {
        isLoggedIn() === false &&
        <Redirect to="/login" />
      }
      <div className="c-app c-default-layout">
        <TheSidebar />
        <div className="c-wrapper">
          <TheHeader />
          <div className="c-body">
            <TheContent />
          </div>
          <TheFooter />
        </div>
      </div>
    </>
  )
}

export default TheLayout
