import * as React from 'react';
import { FC, useState } from 'react';

export const Counter: FC = () => {
  const [value, setValue] = useState<number>(0);
  const handleOnClick = () => setValue(value + 1);

  return (
    <div>
      <p>You clicked {value} times</p>
      <button onClick={handleOnClick}>increment</button>
    </div>
  );
};
