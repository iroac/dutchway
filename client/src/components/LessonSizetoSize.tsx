import {  useContext, useEffect, useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextLessons, User, Word } from '../contexts/ContextLessons';
import axios from 'axios'

const LeassonSizetoSize = () => {
  const navigate = useNavigate()
  const { user, currentlyWords, fetchData } = useContext(ContextLessons);

// States
const [pointUser, setPointUser] = useState<User | undefined>(user)
const [questions, setQuestions] = useState<Word[]>([]);
const [options, setOptions] = useState<Word[]>([])
const [score, setScore] = useState<number>(0);
 const [totalClickQuestions, setTotalClickQuestions] = useState<number>(0);
 const [dutchIndex, setDutchIndex] = useState<number>(-1)
 const [englishIndex, setEnglishIndex] = useState<number>(-1)
 const [dutchText, setDutchText] = useState<string>("")
 const [englishText, setEnglishText] = useState<string>("")

  // Boolean States
  const [selectAnswer, setSelectAnswer] = useState<boolean>(false);
  const [selectAnswerWrong, setSelectAnswerWrong] = useState<boolean>(false);
  const [selectAnswerRight, setSelectAnswerRight] = useState<boolean>(false);
  const [showFinalResult, setShowFinalResult] = useState<boolean>(false);

  // Disabled
  const [disabledButtons, setDisabledButtons] = useState<boolean[]>([]);
  const [disabledButtonsTrue, setDisabledButtonsTrue] = useState<boolean[]>([]);
  // English ones below
  const [disabledButtonsEnglish, setDisabledButtonsEnglish] = useState<boolean[]>([]);
  const [disabledButtonsTrueEnglish, setDisabledButtonsTrueEnglish] = useState<boolean[]>([]);

const handleDutchClick = (index:number, english:string, dutch:string) => {
  setDutchIndex(index)
  setEnglishText(english)
  console.log(dutchText, dutch)
  console.log(englishIndex)
  
  
  if(dutchText === dutch) {
    // DUTCH UPDATE 
    let updatedDisabledButtons = [...disabledButtons];
    updatedDisabledButtons[index] = true;
    setDisabledButtons(updatedDisabledButtons);
    let updatedDisabledButtonsTrue = [...disabledButtonsTrue];
    updatedDisabledButtonsTrue[index] = true;
    setDisabledButtonsTrue(updatedDisabledButtonsTrue);
    // ENGLISH UPDATE
    let updatedDisabledButtonsEnglish = [...disabledButtonsEnglish];
    updatedDisabledButtonsEnglish[englishIndex] = true;
    setDisabledButtonsEnglish(updatedDisabledButtonsEnglish);
    let updatedDisabledButtonsTrueEnglish = [...disabledButtonsTrueEnglish];
    updatedDisabledButtonsTrueEnglish[englishIndex] = true;
    setDisabledButtonsTrueEnglish(updatedDisabledButtonsTrueEnglish);
  }
}

const handleEnglishClick = (index:number, dutch:string, english:string) => {
  setEnglishIndex(index)
  setDutchText(dutch) 
  console.log(englishText, english)
  console.log(dutchIndex)

  
  if(englishText === english) {
      // ENGLISH UPDATE
      let updatedDisabledButtons = [...disabledButtonsEnglish];
      updatedDisabledButtons[index] = true;
      setDisabledButtonsEnglish(updatedDisabledButtons);

      let updatedDisabledButtonsTrueEnglish = [...disabledButtonsTrueEnglish];
      updatedDisabledButtonsTrueEnglish[index] = true;
      setDisabledButtonsTrueEnglish(updatedDisabledButtonsTrueEnglish);
       // DUTCH UPDATE 
    let updatedDisabledButtonsDutch = [...disabledButtons];
    updatedDisabledButtonsDutch[dutchIndex] = true;
    setDisabledButtons(updatedDisabledButtonsDutch);

    let updatedDisabledButtonsTrue = [...disabledButtonsTrue];
    updatedDisabledButtonsTrue[dutchIndex] = true;
    setDisabledButtonsTrue(updatedDisabledButtonsTrue);
  }
}






  const shuffleArray = (array: Word[]) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };
  useEffect(() => {
    if(!user || !currentlyWords) {
      navigate('/lessons')
    }
    if (currentlyWords.length > 0) {
      const shuffledQuestions = shuffleArray(currentlyWords).slice(0, 4);
      const shuffledOptions = shuffleArray(shuffledQuestions)
      setQuestions(shuffledQuestions);
      setOptions(shuffledOptions);
    }
  }, []);
  return (
    <div>
      {questions.length > 0 ? <div className="flex flex-row justify-center items-center">
        {!showFinalResult ? (
            <>
            
<div className="flex flex-col justify-center items-center h-screen w-1/2  bg-blue-flag">
  {questions.map((quest, index) => {
    return <button key={quest.id} onClick={() => handleDutchClick(index, quest.english, quest.dutch)} className={`flex w-11/12 h-20 my-5 justify-center items-center bg-white rounded-md cursor-pointer ${disabledButtonsTrue[index] ? 'bg-green-300' : ""} ${dutchIndex === index ? 'bg-slate-200' : ""}`} disabled={disabledButtons[index]} >{quest.dutch}</button>
  })
  } 

</div>
<div className="flex flex-col justify-center items-center h-screen w-1/2 bg-red-flag">
{options.map((quest, index) => {
    return <button key={quest.id} onClick={() => handleEnglishClick(index, quest.dutch, quest.english)} className={`flex w-11/12 h-20 my-5 justify-center items-center bg-white rounded-md cursor-pointer ${disabledButtonsTrueEnglish[index] ? 'bg-green-300' : ""} ${englishIndex === index ? 'bg-slate-200' : ""}`} disabled={disabledButtonsEnglish[index]}>{quest.english}</button>
  })
  }
</div>


            </>
          ): ""}
  
  
        {showFinalResult && (<div className="flex flex-col justify-center items-center h-screen w-screen" >
  <div> You final scores is {score}/{totalClickQuestions} </div>
          </div>
          )} 
        </div> : ""}
    </div>
  );
}

export default LeassonSizetoSize