import React from 'react';
import Avatar from 'rambler-ui/Avatar';
import { H3, Description, Source } from 'rambler-ui/Typography';
import Button from 'rambler-ui/Button';
import ChevronRightIcon from 'rambler-ui/icons/forms/ChevronRightIcon';

import './SummaryItem.css';

const SummaryItem = ({ summary: { title, description, user: { firstName, lastName } } }) => (
  <div className="summaries__summary summary">
    <div className="row">
      <div className="summary__img col-sm-2">
        <Avatar
          size={100}
          alt="summary avatar"
          src="https://avatars.io/twitter/dfdsf"
        />
      </div>
      <div className="summary__info col-sm-10">
        <div className="summary__header">
          <H3 className="summary__title">{`${firstName} ${lastName}`}</H3>
          <Source className="summary__position">{title}</Source>
        </div>
        <div className="summary__description">
          <Description>{description}</Description>
        </div>
        <Button
          icon={<ChevronRightIcon />}
          iconPosition="right"
          className="summary__more-button"
        >
          More
        </Button>
      </div>
    </div>
  </div>
);

export default SummaryItem;