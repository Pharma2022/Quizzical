import Title from "../components/Generic Components/Title";
import QuizButton from "../components/QuizComponents/QuizButton";
import Score from "../components/QuizComponents/Score";
import { useGlobalContext } from "../hooks/useGlobalContext";
import Spinner from "../components/Generic Components/Spinner";
import Trivia from "../components/QuizComponents/Trivia";


const Quiz = () => {
    const { endGame,isLoading } = useGlobalContext()!
    
   
    return (
    
        <div className='quiz-trivia flex-col'>

          {isLoading? 
            <Spinner/> : <Trivia/>}
          {endGame &&
            <Score/>}
          {!isLoading ?
            <QuizButton/>:null}
        </div>
     
    );
  };
  export default Quiz