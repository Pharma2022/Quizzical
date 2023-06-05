import { nanoid } from "nanoid";

type RemoveAccent = (text: string) => string;

const removeAccent: RemoveAccent = (text: string) => {
  let txt = document.createElement('textarea');
  txt.innerHTML = text;
  return txt.value;
};


export default removeAccent;


export const  shuffleArray=<T>(array: T[]): T[]=> {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }
  

export const triviaSetter=(results:[])=> results.map((element: any,index:number)=> { 
                
            const {question,incorrect_answers,correct_answer,category}=element
        const id=nanoid()
        return (
            {  id,
                question:`${removeAccent(question) }`,
                answeredCorrectly:false,
            category,
            index,
            answers:
            shuffleArray([...incorrect_answers.map((ans:string)=>
              (  {answer:removeAccent(ans),
                    isHeld:false,
                    isCorrect:false,
                    questionId:id,
                    id:nanoid(),
                    }) ),  
                 {answer: removeAccent(correct_answer),
                     isHeld:false,
                    isCorrect:true,
                    questionId:id,
                    id:nanoid()
                    ,}])}
            ) }
)
