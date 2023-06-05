import { useGlobalContext } from '../../hooks/useGlobalContext'
import { Link } from 'react-router-dom'

type Props = {}

const CheckAnswerButton = (props: Props) => {
    const {isAnswered}=useGlobalContext()!

    const {finishGame,endGame,newGame}=useGlobalContext()!

  return (
   endGame? <Link className='btn btn-primary' to={'/'} onClick={newGame}>New Game</Link>:
   <button className='btn btn-primary' disabled={!isAnswered} onClick={finishGame}>Check answers</button>
  )
}

export default CheckAnswerButton