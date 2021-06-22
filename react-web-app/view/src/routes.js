import React from 'react';

const Dashboard = React.lazy(() => import('./components/dashboard/Dashboard'));

const routes = [
  // { path: '/', exact: true, name: 'Home', component:Dashboard },
  // { path: '/', exact: true, name: 'Home'},
  { path: '/dashboard',exact:true, name: 'Dashboard', component: Dashboard },
  
];

export default routes;
