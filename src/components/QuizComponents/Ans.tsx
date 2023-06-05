import React from 'react'
import { Answer, useGlobalContext } from '../../hooks/useGlobalContext'





const Ans = ({answer,isCorrect,isHeld,questionId,id}: Answer) => {
    const {endGame,holdAnswer}=useGlobalContext()!

    const style = endGame? 
    isHeld ? (isCorrect ? 'answer-correct' : 'answer-incorrect') : 'answer-not-held-end'
    : isHeld ? 'answer-held' : 'answer-not-held';

  return (
    <button onClick={()=>holdAnswer(id,questionId)} disabled={endGame} className={`answer ${style}`}>{answer}</button>
  )
}

export default Ans