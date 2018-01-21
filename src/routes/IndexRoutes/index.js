import React from 'react';
import { Link } from 'react-router-dom';

export default () => ({
  path: '/',
  exact: true,
  component: () => <h1>Index Route <Link to="/user">User page</Link></h1>,
});
