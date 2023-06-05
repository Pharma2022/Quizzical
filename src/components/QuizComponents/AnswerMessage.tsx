import React, { Fragment } from 'react'

type AnswerMessageProps = {
    answeredCorrectly:boolean
    rightAnswer:string
   
}

const AnswerMessage = ({answeredCorrectly,rightAnswer}: AnswerMessageProps) => {
    return (

    
    <p>{answeredCorrectly?<span className='correct'>Correct!</span> : 
    <Fragment>
    <span className='incorrect'>Incorrect</span> the correct answer is <span className='correct'>{rightAnswer}</span> </Fragment> } </p>
  )
}

export default AnswerMessage