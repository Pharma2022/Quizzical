import { useGlobalContext } from '../../hooks/useGlobalContext'
import { Link } from 'react-router-dom'


const QuizButton = () => {
    
    const {finishGame,endGame,newGame,isAnswered,trivia}=useGlobalContext()!

    const Button= endGame? 
    <Link className='btn btn-primary' to={'/'} onClick={newGame}>New Game</Link>
    :
    <button className='btn btn-primary' disabled={!isAnswered} onClick={finishGame}>
        Check answers
    </button>

    return  (trivia.length? Button : null  
  )
}

export default QuizButton