import { Fragment } from "react"

type questionType = {
    question:string
    questionNum:number
    category:string
}

const Question = ({question,questionNum,category}: questionType) => {
  return (
    <Fragment>
    <p>Q{questionNum}: Category: {category} </p>
    
    <p>{question}</p>
    </Fragment>
  )
}

export default Question