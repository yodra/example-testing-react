import React, { FC, useState } from 'react';

const LOWER_LIMIT = -5;
const UPPER_LIMIT = 5;

export const Rating: FC = () => {
  const [value, setValue] = useState<number>(0);

  const handleDecrement = () => setValue(Math.max(value - 1, LOWER_LIMIT));
  const handleIncrement = () => setValue(Math.min(value + 1, UPPER_LIMIT));

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <p>{value}</p>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};
