import RootLayout from '../layouts/RootLayout';
import IndexRoutes from './IndexRoutes';
import UserRoutes from './UserRoutes';

export default () => [
  {
    component: RootLayout,
    routes: [IndexRoutes(), UserRoutes()],
  },
];