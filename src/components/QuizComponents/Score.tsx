import React from 'react'
import { Children } from '../../hooks/useGlobalContext'


const Score = ({children}: Children) => {
  return (
    <p className='score'>{children}</p>
  )
}

export default Score