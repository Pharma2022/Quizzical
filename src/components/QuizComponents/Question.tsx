
type questionType = {
    question:string
    questionNum:number
    category:string
}

const Question = ({question,questionNum,category}: questionType) => {
  return (
    <p>Q{questionNum}: Category:{category} {question}</p>
  )
}

export default Question