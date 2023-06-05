import React, { Fragment } from 'react'

type Props = {
    answeredCorrectly:boolean
    rightAnswer:string
   
}

const AnswerMessage = ({answeredCorrectly,rightAnswer}: Props) => {
  return (

    
    <p>{answeredCorrectly?<span className='correct'>Correct!</span> : 
    <Fragment>
    <span className='incorrect'>Incorrect</span> the correct answer is <span className='correct'>{rightAnswer}</span> </Fragment> } </p>
  )
}

export default AnswerMessage