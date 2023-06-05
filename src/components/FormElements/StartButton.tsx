import {FC} from 'react'

import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../hooks/useGlobalContext'


const StartButton:FC = () => {
  const {startGame}=useGlobalContext()!
  return (

      <Link  className='btn btn-primary' onClick={startGame} to='/quiz'>Start Quiz</Link>
  
  )
}

export default StartButton