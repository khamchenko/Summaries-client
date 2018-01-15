import RootLayout from '../layouts/RootLayout';
import IndexRoutes from './IndexRoutes';

export default () => [
  {
    component: RootLayout,
    routes: [IndexRoutes()],
  },
];