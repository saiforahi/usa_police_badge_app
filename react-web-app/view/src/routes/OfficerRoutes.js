import React from 'react';
const Dashboard = React.lazy(() => import('../components/dashboard/Dashboard'));
const officer_routes = [
  { path: '/dashboard', exact: true, name: 'Dashboard', component:Dashboard },
  { path: '/dashboard/account/personal',exact:true, name: 'Officer Account', component: React.lazy(()=>import('../components/officerview/account/Account'))},
  { path: '/dashboard/account/badge',exact:true, name: 'Officer Account', component: React.lazy(()=>import('../components/officerview/my-badge/MyBadge'))},
  { path: '/dashboard/account/time',exact:true, name: 'Officer Account', component: React.lazy(()=>import('../components/officerview/time/Time'))},
  { path: '/dashboard/account/contacts',exact:true, name: 'Officer Account', component: React.lazy(()=>import('../components/officerview/contacts/Contacts'))},
];

export default officer_routes
