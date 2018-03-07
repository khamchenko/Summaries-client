import React from 'react';
import { H2 } from 'rambler-ui/Typography';
import get from 'lodash/get';

const DEFAULT_MESSAGE = 'Something went wrong. Please try later.';

const Error = ({ error }) => {
  const { message: clientError } = error;
  let message = get(error, 'response.message', DEFAULT_MESSAGE);

  if (!error.response && clientError) {
    message = clientError;
  }

  return (
    <H2 style={{ textAlign: 'center' }}>
      {message}
    </H2>
  );
};

export default Error;