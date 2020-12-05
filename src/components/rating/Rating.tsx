import React, { FC, useState } from 'react';

export const Rating: FC = () => {
  const [value, setValue] = useState<number>(0);
  const handleDecrement = () => setValue(value - 1);
  const handleIncrement = () => setValue(value + 1);

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <p>{value}</p>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};
