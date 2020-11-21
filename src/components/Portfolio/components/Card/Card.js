import React from 'react';

const Card = ({ title, width, children }) => {
  return (
    <div className="card-container" style={{ width: width + 'px' }}>
      {title && <div className="card-title">{title}</div>}
      <div className="card-content">{children}</div>
    </div>
  );
};

export default Card;
