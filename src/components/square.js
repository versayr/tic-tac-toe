import React from 'react';

const Square = (props) => {
  return (
    <div 
      onClick={() => props.mark()}
      className="square">
    </div>
  );
};

export default Square;
