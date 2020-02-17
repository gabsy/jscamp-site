import React from 'react'
import { Location } from '@reach/router'

const Pageref = ({ location }) => {
  const url = location.pathname ? location.pathname : '';

  return (
    <input type="text" readOnly="readonly" value={url} />
  );
};

export default Pageref