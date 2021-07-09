import React, { Suspense, useState } from 'react';
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { CContainer, CFade } from '@coreui/react';
import './TheHeader.css'
// routes config
import routes from '../routes/Routes';
import officer_routes from '../routes/OfficerRoutes'
  
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = () => {
  const [approutes,setRoutes] = useState([])
  React.useEffect(()=>{
    switch(localStorage.getItem('group')){
      case 'admin':
        setRoutes(routes)
        break
      case 'officer':
        setRoutes(officer_routes)
        break
    }
  },[])
  return (
    <main className="c-main">
      <div class="hero-image">

      </div>
      <CContainer className="mt-4">

        <Suspense fallback={loading}>
          <Switch>
            {approutes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <CFade>
                      <route.component {...props} />
                    </CFade>
                  )} />
              )
            })}
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  )
}

export default React.memo(TheContent)
