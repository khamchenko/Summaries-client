import React from 'react';

import './SummariesList.css';
import SummaryItem from '../SummaryItem';

const SummariesList = ({ summaries }) => (
  <article className="summaries__list">
    {summaries.map((summary) => <SummaryItem summary={summary} key={`summary_${summary._id}`} />)}
  </article>
);

export default SummariesList;