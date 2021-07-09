import React from 'react';
const Dashboard = React.lazy(() => import('../components/dashboard/Dashboard'));
const officer_routes = [
  { path: '/dashboard', exact: true, name: 'Dashboard', component:Dashboard },
  { path: '/dashboard/account/personal',exact:true, name: 'Officer Account', component: React.lazy(()=>import('../components/officerview/account/Account'))},
];

export default officer_routes
