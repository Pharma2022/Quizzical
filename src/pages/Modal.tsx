import React, { ChangeEvent, FC } from 'react';
import Input from '../components/FormElements/Input';
import Select from '../components/FormElements/Select';
import Title from '../components/Generic Components/Title';

import { useGlobalContext } from '../hooks/useGlobalContext';
import StartButton from '../components/FormElements/StartButton';

const Modal: FC = () => {
  const {  form } = useGlobalContext()!;
  const { category, difficulty, length } = form;

  return (
          <div className='modal flex-col'>
              <Title/>
              <form className='quiz-form container flex-col'>
                <Input
                  name='length'
                  value={length}
                  min={4}
                  max={20}  
                  />         
                <Select  name='difficulty' value={difficulty}  
                        option='red'  /> 
                <Select  name='category' value={category}  
                    option='green' />
              </form>
              <StartButton/>
    </div>
  );
};

export default Modal;
