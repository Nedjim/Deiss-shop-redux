import React, { PropTypes }     from 'react';

const Counter = props => (
      <div>
          <div> {props.price} e</div>
      </div>
  );

Counter.propTypes = {
    price: PropTypes.number.isRequired
};

export default Counter;
