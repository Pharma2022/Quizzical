import {  useGlobalContext } from '../../hooks/useGlobalContext'


const Score = () => {
  const {score,trivia}=useGlobalContext()!
  return (
    <p className='score'>You scored {score}/{trivia.length}</p>
  )
}

export default Score