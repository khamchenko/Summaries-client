import asyncComponent from '../../components/asyncComponent';

export default () => ({
  path: '/user',
  exact: true,
  component: asyncComponent(() => {
    return import('./components/UserView').then(module => {
      
      return module.default;
    });
  }),
});
