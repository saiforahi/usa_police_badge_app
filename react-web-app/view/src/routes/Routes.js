import React from 'react';

const Dashboard = React.lazy(() => import('../components/dashboard/Dashboard'));
const Employees = React.lazy(()=> import('../components/employees/EmployeeList'))
const routes = [
  { path: '/dashboard', exact: true, name: 'Dashboard', component:Dashboard },
  { path: '/dashboard/employees', name: 'Employees', component: Employees }
];

export default routes;
