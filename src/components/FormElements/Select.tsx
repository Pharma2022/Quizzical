import { nanoid } from 'nanoid'
import  {  Fragment } from 'react'
import { difficulties, categories } from '../../data'
import { useGlobalContext } from '../../hooks/useGlobalContext'

type SelectProps = {
    name:string
    option:string
    value:string
    
    
}


const Select = ({name,option,value}:SelectProps) => { 
    const {handleChange}=useGlobalContext()!
    const options=option==='red'?
    difficulties.map(({difficulty,value})=>(<option value={value} key={nanoid()}>{difficulty}</option> ))
   :categories.map(({topic,value})=>( <option value={value} key={nanoid()}>{topic}</option>)) 

  return  ( <Fragment> 
                <label className='label' htmlFor={name}>Select {name}</label>
                <select 
                value={value} 
                name={name} 
                onChange={handleChange} >
                {options}
                </select>
            </Fragment>

)}

export default Select