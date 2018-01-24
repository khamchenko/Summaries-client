import React from 'react';
import { H1 } from 'rambler-ui/Typography';

import HeaderNavigation from 'components/HeaderNavigation';

const Header = () => (
  <header>
    <H1>Summaries</H1>
    <HeaderNavigation />
  </header>
);

export default Header;