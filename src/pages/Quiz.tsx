import { nanoid } from "nanoid";
import Title from "../components/Generic Components/Title";
import Ans from "../components/QuizComponents/Ans";
import AnswerMessage from "../components/QuizComponents/AnswerMessage";
import CheckAnswerButton from "../components/QuizComponents/CheckAnswerButton";
import Question from "../components/QuizComponents/Question";
import Score from "../components/QuizComponents/Score";
import { useGlobalContext, Answer } from "../hooks/useGlobalContext";
import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader"
const override: CSSProperties = {
  display: "block",
  margin: "5rem auto",
};

const Quiz = () => {
    const { trivia, endGame,isLoading } = useGlobalContext()!
    
    return (
      <div className='quiz container flex-col'>
        <div className='quiz-trivia flex-col'>
          <Title />
          
          {isLoading? 
          <ClipLoader

          loading={isLoading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
          
          
          : trivia.map(({ question, category, answers, answeredCorrectly }: any, index: number) => (
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
          ))}
          {endGame && <Score/>}
          {!isLoading&&<CheckAnswerButton />}
        </div>
      </div>
    );
  };
  export default Quiz