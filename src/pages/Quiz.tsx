import Title from "../components/Generic Components/Title";
import CheckAnswerButton from "../components/QuizComponents/CheckAnswerButton";
import Score from "../components/QuizComponents/Score";
import { useGlobalContext } from "../hooks/useGlobalContext";
import Spinner from "../components/Generic Components/Spinner";
import Trivia from "../components/QuizComponents/Trivia";


const Quiz = () => {
    const { endGame,isLoading } = useGlobalContext()!
    
   
    return (
      <div className='quiz container flex-col'>
        <div className='quiz-trivia flex-col'>
          <Title />
          
          {isLoading? 
            <Spinner/>
          : <Trivia/>}
          {endGame &&
            <Score/>}
          {!isLoading &&
            <CheckAnswerButton />}
        </div>
      </div>
    );
  };
  export default Quiz