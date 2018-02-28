import React from 'react';

import './SummariesList.css';
import SummariesItem from '../SummariesItem';

const SummariesList = ({ summaries }) => (
  <article className="summaries__list">
    {summaries.map(summary => (
      <SummariesItem summary={summary} key={`summary_${summary._id}`} />
    ))}
  </article>
);

export default SummariesList;
