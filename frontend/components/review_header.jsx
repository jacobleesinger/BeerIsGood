import React from 'react';

import UserStore from '../stores/user_store';
import BeerStore from '../stores/beer_store';

const ReviewHeader = (props) => {

  const author = UserStore.findById(props.review.author_id);
  const beer = BeerStore.find(props.review.beer_id);

  return (
    <div className="reviewHeader">{author.username} is drinking {beer.name}!</div>
  );
};

export default ReviewHeader;
