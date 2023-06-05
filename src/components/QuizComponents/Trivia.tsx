import { nanoid } from 'nanoid'
import React, { Fragment } from 'react'
import { Answer, useGlobalContext } from '../../hooks/useGlobalContext'
import Ans from './Ans'
import AnswerMessage from './AnswerMessage'
import Question from './Question'

const Trivia = () => {

    const {trivia,endGame }=useGlobalContext()!
  return (

    
    <Fragment>{
    trivia.map(({ question, category, answers, answeredCorrectly }: any, index: number) => (
        <div className='flex-col' key={nanoid()}>
          <Question question={question} questionNum={index + 1} category={category} />
          <div className='answers-container flex-row wrap'>
            {answers.map(({ answer, isHeld, isCorrect, questionId, id }: Answer) => (
              <Ans    questionId={questionId}
                      key={id}
                      isHeld={isHeld}
                      isCorrect={isCorrect}
                      answer={answer}
                      id={id} />
            ))}
          </div>
          {endGame && (
            <AnswerMessage  answeredCorrectly={answeredCorrectly}
              rightAnswer={answers.find(({ isCorrect }: Answer) => isCorrect)?.answer || ''}
            />
          )}
          <hr />
        </div>
      ))}</Fragment>

  )
}

export default Trivia