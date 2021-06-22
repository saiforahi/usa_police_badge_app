import React from 'react';

const Dashboard = React.lazy(() => import('../components/dashboard/Dashboard'));
const Employees = React.lazy(()=> import('../components/employees/Employees'))
const routes = [
  { path: '/dashboard', exact: true, name: 'Dashboard', component:Dashboard },
  { path: '/dashboard/employees',exact: true, name: 'Employees', component: Employees },
  { path: '/dashboard/employees/details',exact:true, name: 'Employee Details', component: React.lazy(()=>import('../components/employees/EmployeeDetails'))}
];

export default routes;
