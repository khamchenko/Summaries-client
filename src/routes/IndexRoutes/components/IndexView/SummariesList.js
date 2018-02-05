import React from 'react';
import Loader from 'rambler-ui/Loader';

import List from 'components/SummariesList';

const SummariesList = ({ loading, summaries }) => (
  <div className="summaries__results">
    <Loader loading={loading}>
      <List summaries={summaries} />
    </Loader>
  </div>
);

export default SummariesList;
