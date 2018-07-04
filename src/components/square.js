import React from 'react';

const Square = (props) => {
  return (
    <div 
      onClick={() => alert('click')}
      className="square">
    </div>
  );
};

export default Square;
