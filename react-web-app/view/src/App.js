import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import './App.css'
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));
// Pages
const Login = React.lazy(() => import('./components/login/Login'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));
const Home= React.lazy(()=>import('./components/home/Home'))
const App =()=>{
  return(
    <>
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
          {/* <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} /> */}
          <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
          <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
          <Route path="/" exact={true} render={props => <Home {...props}/>} name="Home"/>
          <Route path="/dashboard" name="Dashboard" render={props => <TheLayout {...props}/>} />
        </Switch>
      </React.Suspense>
    </HashRouter>
    </>
  )
}

export default App;
