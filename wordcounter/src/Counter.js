import React from 'react';

function Counter({count}) {
  return (
    <p className="mb2">
      <label htmlFor="count">Word Count: </label>
      <output id="count">
      {count}
      </output>
    </p>
  );
}

export default Counter