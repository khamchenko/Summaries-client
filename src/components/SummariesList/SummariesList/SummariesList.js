import React from 'react';

import './SummariesList.css';
import SummaryItem from '../SummaryItem';

const SummariesList = () => (
  <article className="summaries__list">
    {Array(1, 2, 3, 4, 5).map(() => <SummaryItem key={Math.random()} />)}
  </article>
);

export default SummariesList;