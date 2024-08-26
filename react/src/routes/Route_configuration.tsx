// Converted from docs/contents/articles/051-sidebar/index.md

import { RouteObject } from 'react-router-dom';

interface SidebarMeta {
  icon: string;
  order: number;
}

interface RouteConfiguration extends RouteObject {
  title: string;
  sidebarMeta?: SidebarMeta;
}

const routes: RouteConfiguration[] = [
  {
    path: '/dashboard',
    element: <Dashboard />, // Assuming Dashboard is a React component
    title: 'Dashboard',
    sidebarMeta: {
      icon: 'ion-android-home',
      order: 0,
    },
  },
  // Add more routes as needed
];

export default routes;
