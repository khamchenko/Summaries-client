import RootLayout from '../layouts/RootLayout';
import IndexRoutes from './IndexRoutes';
import UserRoutes from './UserRoutes';

export default store => [
  {
    component: RootLayout,
    routes: [IndexRoutes(), UserRoutes(store)],
  },
];