import React from 'react';

const Testimony = ({ testimony, awesomePerson, workAt, position }) => {
  return (
    <div className="pa2 mt1 mb2">
      <p>
        <q>{testimony}</q>
      </p>
      <p className="mt2">
        <cite>
          {awesomePerson} | {position} en {workAt}
        </cite>
      </p>
    </div>
  );
};

export default Testimony;
