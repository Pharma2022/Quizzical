import React, { Fragment, ChangeEvent } from 'react';
import { useGlobalContext } from '../../hooks/useGlobalContext';

type InputProps = {
  name: string;
  min: number;
  max: number;
  value: number;
};

const Input = ({ name, value, min, max }: InputProps) => {
  const {handleChange}=useGlobalContext()!
  return (
    <Fragment>
      <label className='inter-600 label ' htmlFor={name}>
        Set {name}: <span className='trivia-length'>{value} questions</span>
      </label>
      <input
        type='range'
        name={name}
        value={value-1}
        min={min}
        max={max}
        onChange={handleChange}
      />
    </Fragment>
  );
};

export default Input;
