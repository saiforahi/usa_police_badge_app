import React from 'react';
import { ReactReduxContext } from 'react-redux';

const Dashboard = React.lazy(() => import('../components/dashboard/Dashboard'));
const Employees = React.lazy(()=> import('../components/employees/Employees'))
const routes = [
  { path: '/dashboard', exact: true, name: 'Dashboard', component:Dashboard },
  { path: '/dashboard/employees',exact: true, name: 'Employees', component: Employees },
  { path: '/dashboard/employees/details',exact:true, name: 'Employee Details', component: React.lazy(()=>import('../components/employees/EmployeeDetails'))},
  { path: '/dashboard/employees/create',exact:true, name: 'Create Employee', component: React.lazy(()=>import('../components/employees/Create'))},
  { path: '/dashboard/badges/',exact:true, name: 'Badges', component: React.lazy(()=>import('../components/badges/Badges'))},
  { path: '/dashboard/account/',exact:true, name: 'Account', component: React.lazy(()=>import('../components/account/Account'))},
  {path:'/dashboard/contacts/',exact:true,name:'Contacts',component:React.lazy(()=> import ('../components/contacts/contacts'))},
  {path:'/dashboard/billing/',exact:true,name:'Billing',component:React.lazy(()=> import ('../components/billing/Billing'))},
  {path:'/dashboard/time',exact:true,name:'Time',component:React.lazy(()=>import('../components/time/Time'))},
  {path:'/dashboard/sitecontrol',exact:true,name:'Site Control',component:React.lazy(()=>import('../components/sitecontrol/SiteControl'))},
  {path:'/dashboard/scan-history',exact:true,name:'Scan History',component:React.lazy(() => import ('../components/scan-history/ScanHistory'))},
  { path: '/dashboard/account/personal',exact:true, name: 'Officer Account', component: React.lazy(()=>import('../components/officerview/account/Account'))},
  { path: '/dashboard/departments',exact:true, name: 'Departments', component: React.lazy(()=>import('../components/departments/Departments'))},
];

const officer_routes=[
  
]

export default routes
