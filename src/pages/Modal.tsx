import React, { ChangeEvent, FC } from 'react';
import Input from '../components/FormElements/Input';
import Select from '../components/FormElements/Select';
import Title from '../components/Generic Components/Title';

import { useGlobalContext } from '../hooks/useGlobalContext';
import StartButton from '../components/FormElements/StartButton';
import { categories, difficulties } from '../data';
import { nanoid } from 'nanoid';

const Modal: FC = () => {
  const {  form } = useGlobalContext()!;
  const { category, difficulty, length } = form;

  return (
          <div className='modal flex-col'>
           
              <form className='quiz-form container flex-col'>
                <Input
                  name='length'
                  value={length}
                  min={5}
                  max={20}  
                  />         
                <Select  name='difficulty' value={difficulty}  >
                   {difficulties.map(({difficulty,value})=>(<option value={value} key={nanoid()}>{difficulty}</option> ))}
                </Select>
                         
                <Select  name='category' value={category}  >
                   {categories.map(({topic,value})=>( <option value={value} key={nanoid()}>{topic}</option>)) }
                </Select>
              </form>
              <StartButton/>
          </div>
  );
};

export default Modal;
