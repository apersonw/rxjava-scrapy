import React from 'react';

import Project from './pages/Project';
import BasicLayout from '@/layouts/BasicLayout';

const Dashboard = React.lazy(() => import('@/pages/Dashboard'));
const NotFound = React.lazy(() => import('@/pages/NotFound'));

const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/dashboard',
        component: Dashboard,
      },
      {
        path: '/',
        redirect: '/dashboard',
      },
      {
        component: NotFound,
      },
    ],
  },
  {
    path: '/project',
    component: Project,
  },
];

export default routerConfig;
