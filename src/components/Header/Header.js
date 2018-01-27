import React from 'react';
import { H1 } from 'rambler-ui/Typography';

import HeaderNavigation from 'components/HeaderNavigation';
import './Header.css'; 

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <H1>Summaries</H1>
        </div>
        <div className="col-sm-4">
          <HeaderNavigation />
        </div>
      </div>
    </div>
  </header>
);

export default Header;