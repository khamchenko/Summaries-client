import React from 'react';
import Pagination from 'rambler-ui/Pagination';
import { H2 } from 'rambler-ui/Typography';

import Error from 'components/Error';
import './View.css';
import SummariesList from '../SummariesList';

const View = ({
  isLoading,
    data,
    meta: {
      filter: { page },
      pages,
    },
    onPageChange,
    error,
    isEmpty,
  }) => (
    <section>
      <div className="container">
        <H2 className="content__header">Developers</H2>
        <div className="row">
          {!error && isEmpty && (
            <H2 style={{ textAlign: 'center' }}>No Summaries</H2>
          )}
          { error && <Error error={error} />}
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