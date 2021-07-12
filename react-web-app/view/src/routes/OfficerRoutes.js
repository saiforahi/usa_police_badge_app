import React from 'react';
const Dashboard = React.lazy(() => import('../components/officerview/officer-dashboard/OfficerDashboard'));
const officer_routes = [
  { path: '/dashboard', exact: true, name: 'Dashboard', component:Dashboard },
  { path: '/dashboard/account/personal',exact:true, name: 'Officer Account', component: React.lazy(()=>import('../components/officerview/account/Account'))},
  { path: '/dashboard/account/badge',exact:true, name: 'Officer Account', component: React.lazy(()=>import('../components/officerview/my-badge/MyBadge'))},
  { path: '/dashboard/account/time',exact:true, name: 'Officer Account', component: React.lazy(()=>import('../components/officerview/time/Time'))},
  { path: '/dashboard/account/contacts',exact:true, name: 'Officer Account', component: React.lazy(()=>import('../components/officerview/contacts/Contacts'))},
  { path: '/dashboard/officer/contacts/edit',exact:true, name: 'Edit Contact', component: React.lazy(()=>import('../components/officerview/contacts/Edit'))},
];

export default officer_routes
