import React from 'react';
import { H2 } from 'rambler-ui/Typography';
import Pagination from 'rambler-ui/Pagination';

import './View.css';
import SummariesList from '../SummariesList';
import Search from '../Search';

const View = ({
  isLoading,
    data,
    meta: {
      filter: { page },
      pages,
    },
    onPageChange,
  }) => (
    <section>
      <div className="container">
        <H2 className="content__header">Developers</H2>
        <div className="row">
          <Search />
          <SummariesList
            loading={isLoading}
            summaries={data}
          />
          <Pagination
            style={{ width: '100%', marginBottom: '30px' }}
            pagesCount={pages}
            currentPage={page}
            onChange={onPageChange}
            pageContainer={pageNumber => (
              <span>
                {pageNumber}
              </span>
            )}
          />
        </div>
      </div>
    </section>
);

export default View;