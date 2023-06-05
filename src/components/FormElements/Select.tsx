import { nanoid } from 'nanoid'
import  {  Fragment, ReactNode } from 'react'
import { difficulties, categories } from '../../data'
import { useGlobalContext } from '../../hooks/useGlobalContext'

type SelectProps = {
    name:string
    value:string
    children:ReactNode
    
    
}


const Select = ({name,value,children}:SelectProps) => { 
    const {handleChange}=useGlobalContext()!


  return  ( <Fragment> 
                <label className='label' htmlFor={name}>Select {name}</label>
                <select 
                value={value} 
                name={name} 
                onChange={handleChange} >
                {children}
                </select>
            </Fragment>

)}

export default Select