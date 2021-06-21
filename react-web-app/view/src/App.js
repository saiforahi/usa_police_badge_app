import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)
const TheLayout = React.lazy(()=>import('./containers/TheLayout'))
const Home = React.lazy(()=>import('./components/home/Home'))
const App = ()=>{
  return (
    <Router>
      <React.Suspense fallback={loading}>
        <Switch>
          {/* <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} /> */}
          {/* <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} /> */}
          {/* <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
          <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} /> */}
          <Route path="/" exact={true} render={props => <Home {...props}/>} name="Home"/>
          <Route path="/dashboard" name="Layout" render={props => <TheLayout {...props}/>} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
