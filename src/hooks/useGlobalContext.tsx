import  { ChangeEvent, createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { triviaSetter } from '../helper'

type FormState = {
  category: string
  difficulty: string
  length: number
}
export type Answer={
  id: string
  answer:string
  isHeld:boolean
  isCorrect:boolean
  questionId:string
  
}


type TriviaItem = {
  id:string
  index: number
  question: string
  answers:Answer[]
  category:string
  answeredCorrectly:boolean
  
}

type GlobalContextType = {
  form: FormState
  handleChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  
  startGame:()=>void
  finishGame:()=>void
  newGame:()=>void
  endGame:boolean
  trivia:TriviaItem[]
  holdAnswer:(id: string,questionId:string)=>void
  checkAnswer:()=>void
  getScore:()=>void
  score:number
  isAnswered:boolean
  isLoading:boolean
  
}
export type Children={ children: ReactNode }
const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

const useGlobal = () => {
  const emptyForm:FormState={
    category: '',
    difficulty: '',
    length: 10,
  }
    const [form, setForm] = useState<FormState>(emptyForm)
    const [endGame,setEndGame]=useState<boolean>(false)
    const [score,setScore]=useState<number>(0)
    const [trivia, setTrivia]= useState<TriviaItem[]>( [])
    const [url,setUrl]= useState<string>("https://opentdb.com/api.php?amount=10")
    const {category,difficulty,length}=form
    const [isLoading,setIsLoading]=useState<boolean>(false)
    
    /*Set Trivia */
    
    useEffect(()=>{
      const modifyUrl=async()=>  setUrl(`https://opentdb.com/api.php?amount=${length}${category?`&category=${category}`:""}${difficulty?`&difficulty=${difficulty}`:""}`)        
      modifyUrl()
    } ,[length,category,difficulty]) 
    
    useEffect (  ()=>{
      setTrivia([])
      const setQuestions= async ()=>{
        const res=       await fetch(url)
        const {results}= await res.json()
        setTrivia((triviaSetter(results))) 
      }
      setQuestions() 
    },[url])
    
    const clearForm=()=>setForm(emptyForm)
        
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
          const { name, value } = event.target
          setForm((prev) => ({ ...prev, [name]: value }))
        }
        
    const startGame=()=>{
          setEndGame(false)
          setIsLoading(true)
          setTimeout(() => {
            setIsLoading(false)
          }, 2250)
     }
    
    const finishGame=()=>{
        setEndGame(true)
        checkAnswer()
        getScore() 
      }

    const newGame=()=>{
        setEndGame(false)
        resetScore()
        clearForm()
    }
    
     /*Hold Answers,Check Answers and  Score Quiz */

    const holdAnswer=(ID:string,questionId:string)=>{
          setTrivia(prev=>prev.map((item):TriviaItem=>        
                  item.id===questionId?
                        ( {...item,
                            answers:item.answers.map(ans=>
                              ( {...ans,
                                isHeld:ans.id===ID? !ans.isHeld:false
                                  }
                              ))
                        } )
                  :item
                   ))
    }

      const checkAnswer=()=>{
            setTrivia(prev=>prev.map((item):TriviaItem=> (
                
                {...item,
                  answeredCorrectly:item.answers.filter(({isHeld,isCorrect}:Answer)=>isHeld&&isCorrect)[0]?
                  true:false
                })  
             ))
                
      }

      const isAnswered = trivia.every((triviaItem) => triviaItem.answers.some((answer) => answer.isHeld))

      const resetScore:()=>void=()=>setScore(0)
      const incrementScore:()=>void=()=>setScore(prev=>prev+1)
      const getScore:()=>void = () =>{
            trivia.forEach( ({answers})=> 
                answers.filter(  ({isHeld,isCorrect})=>
                    isHeld&& isCorrect)[0] && incrementScore() )
           
            } 

            return { form,url,trivia ,handleChange,endGame,startGame,finishGame,newGame,holdAnswer,checkAnswer,score,getScore,isAnswered,isLoading }
 }

export const GlobalContextProvider = ({ children }: Children) => {
        return (
          <GlobalContext.Provider value={ useGlobal()}>
            {children}
          </GlobalContext.Provider>
        )
}

export const useGlobalContext = () =>  useContext(GlobalContext)


