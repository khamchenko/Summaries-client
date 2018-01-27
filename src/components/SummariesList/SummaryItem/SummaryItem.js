import React from 'react';
import Avatar from 'rambler-ui/Avatar';
import { H3, Description, Source } from 'rambler-ui/Typography';
import Button from 'rambler-ui/Button';
import ChevronRightIcon from 'rambler-ui/icons/forms/ChevronRightIcon';

import './SummaryItem.css';

const SummaryItem = () => (
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
          <H3 className="summary__title">Andry Huilo</H3>
          <Source className="summary__position">Senior React Developer</Source>
        </div>
        <div className="summary__description">
          <Description>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              officiis illum minima recusandae. Commodi magni alias placeat qui,
              consectetur veniam quisquam odio tempora corporis iure ab
              inventore velit ratione officiis!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              officiis illum minima recusandae. Commodi magni alias placeat qui,
              consectetur veniam quisquam odio tempora corporis iure ab
              inventore velit ratione officiis!
            </p>
          </Description>
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