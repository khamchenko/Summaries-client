import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsItem } from 'rambler-ui/Tabs';

const HeaderNavigation = () => (
  <nav>
    <Tabs size="medium">
      <TabsItem>
        <Link to="/">Home</Link>
      </TabsItem>
      <TabsItem>
        <Link to="/sign-in">Sign In</Link>
      </TabsItem>
      <TabsItem>
        <Link to="/sign-up">Sign Un</Link>
      </TabsItem>
    </Tabs>
  </nav>
);

export default HeaderNavigation;