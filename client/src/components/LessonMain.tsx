import {  useContext, useEffect, useState  } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ContextLessons, User, Word } from '../contexts/ContextLessons';
import axios from 'axios'

function LeassonMain() {
  const { user, currentlyWords, fetchData } = useContext(ContextLessons);
  const navigate = useNavigate()

  //STATES
  // Featching states
  const [questions, setQuestions] = useState<Word[]>([]);
  const [pointUser, setPointUser] = useState<User | undefined>(user)
  const [options, setOptions] = useState<Word[]>([])
  // Change Lesson States
  const [showFinalResult, setShowFinalResult] = useState<boolean>(false);
  const [showWriteQuestions, setWriteQuestions] = useState<boolean>(false);
  const [showSideBySide, setSideBySide] = useState<boolean>(false);
  const [showPhases, setShowPhrases] = useState<boolean>(false);
  const [hasPhrases, setHasPhrases] = useState<boolean>(false)

// WORD TO WORD
  const randomWordToWordOrder = () => {let order = ['eng', 'dutch'] 
  const i = Math.floor(Math.random() * 2);
  return order[i]
  }
  const order  = 'eng'

  // WORD TO WORD STATES
  // Buttons States
  const [checkButton, setCheckButton] = useState<boolean>(false);
  const [continueButton, setContinueButton] = useState<boolean>(false);
  // Answer States
  const [answerIndex, setAnswerIndex] = useState<number>(-1);
  const [selectAnswerWrong, setSelectAnswerWrong] = useState<boolean>(false);
  const [selectAnswerRight, setSelectAnswerRight] = useState<boolean>(false);
  // Questions States
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [totalClickQuestions, setTotalClickQuestions] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  // Writing States
  const [text, setText] = useState<string>("")
  const [writeText, setWriteText] = useState<string>("")


  // SIDE TO SIDE STATES
  // Text States
  const [dutchText, setDutchText] = useState<string>("");
  const [englishText, setEnglishText] = useState<string>("");
  // Index States
  const [dutchIndex, setDutchIndex] = useState<number>(-1);
  const [englishIndex, setEnglishIndex] = useState<number>(-1);
  // Buttons/Options States
  const [animationComplete, setAnimationComplete] = useState(false);
  const [disabledButtons, setDisabledButtons] = useState<boolean[]>([]);
  const [disabledButtonsEnglish, setDisabledButtonsEnglish] = useState<boolean[]>([]);


  // WORD TO WORD FUNCTIONS
  const handleContinueButton = () => {
    if(totalClickQuestions === questions.length * 2) {
      setSideBySide(true)
    } 
  
    if(!showWriteQuestions) {
      if(totalClickQuestions === questions.length) {
        setWriteQuestions(true)
      } 
      if (currentQuestionIndex === questions.length - 1) {
          setCurrentQuestionIndex(0);
        } else {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
        let newOptions = shuffleArray(options)
        setOptions(newOptions)
        setAnswerIndex(-1)
        setCheckButton(false);
        setContinueButton(false)
        setSelectAnswerRight(false)
        setSelectAnswerWrong(false)
      
    } else {
  if (currentQuestionIndex === questions.length - 1) {
    setCurrentQuestionIndex(0);
  } else {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }
  
  setContinueButton(false)
  setSelectAnswerRight(false)
  setSelectAnswerWrong(false)
  setWriteText('')
    }   
  }
  
  const handleCheckButton = () => {
    if(!showWriteQuestions) {
      if (order === 'eng' ? text === questions[currentQuestionIndex].english : text === questions[currentQuestionIndex].dutch ) {
        setCheckButton(false);
        setContinueButton(true);
        setSelectAnswerRight(true);
        setScore(score + 1)
        let questId = questions[currentQuestionIndex].id
        const questIndex = pointUser?.currentlyWords.findIndex((innerArray: number[]) => innerArray[0] === questId);
        if (questIndex !== undefined && questIndex !== -1 && pointUser) {
          pointUser.currentlyWords[questIndex][1] += 1;
        }
        } else {
        setContinueButton(true)
        setSelectAnswerWrong(true)
        }
    } else {
      if (order === 'eng' ? writeText.toLowerCase().trim() === questions[currentQuestionIndex].english.toLowerCase() : writeText.toLowerCase() === questions[currentQuestionIndex].dutch.toLowerCase() ) {
        setContinueButton(true);
        setSelectAnswerRight(true);
        setScore(score + 1)
        let questId = questions[currentQuestionIndex].id
        const questIndex = pointUser?.currentlyWords.findIndex((innerArray: number[]) => innerArray[0] === questId);
        if (questIndex !== undefined && questIndex !== -1 && pointUser) {
          pointUser.currentlyWords[questIndex][1] += 1;
        }
        } else {
        setContinueButton(true)
        setSelectAnswerWrong(true)
        }
        
    }
    setCheckButton(false)
  setTotalClickQuestions(totalClickQuestions + 1)
  }

  const handleClick = (index: number, english: string, dutch: string) => {
    setAnswerIndex(index)
    setCheckButton(true);
    if(order === 'eng') {
      setText(english)
    } else if(order === 'dutch') {
      setText(dutch)
    }
  };

  const handleWrite = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
setCheckButton(true)
setWriteText(event.target.value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      handleCheckButton()
    }
  }

// SIDE BY SIDE FUNCTIONS 
const handleDutchClick = (index: number, english: string, dutch: string) => {
  setDutchIndex(index);
  setEnglishText(english);

  if (englishIndex >= 0) {
    if (dutchText === dutch) {
      // DUTCH UPDATE
      let updatedDisabledButtons = [...disabledButtons];
      updatedDisabledButtons[index] = true;
      setDisabledButtons(updatedDisabledButtons);
      // ENGLISH UPDATE
      let updatedDisabledButtonsEnglish = [...disabledButtonsEnglish];
      updatedDisabledButtonsEnglish[englishIndex] = true;
      setDisabledButtonsEnglish(updatedDisabledButtonsEnglish);
      // UPDATE VARIABLES
      setDutchIndex(-1);
      setEnglishIndex(-1);
      setEnglishText("");
      setDutchText("");
      setTotalClickQuestions(totalClickQuestions + 1);
      if (totalClickQuestions === 11) {
        if(hasPhrases) {
setShowPhrases(true)
        } else {
          axios.put(`http://localhost:3000/users/${user?.id}`, pointUser)
          setShowFinalResult(true);
        }
      }
    }

    if (dutchText !== dutch) {
      setAnimationComplete(true);
    }
  }
};

const handleEnglishClick = (
  index: number,
  dutch: string,
  english: string
) => {
  setEnglishIndex(index);
  setDutchText(dutch);

  if (dutchIndex >= 0) {
    if (englishText === english) {
      // ENGLISH UPDATE
      let updatedDisabledButtons = [...disabledButtonsEnglish];
      updatedDisabledButtons[index] = true;
      setDisabledButtonsEnglish(updatedDisabledButtons);
      // DUTCH UPDATE
      let updatedDisabledButtonsDutch = [...disabledButtons];
      updatedDisabledButtonsDutch[dutchIndex] = true;
      setDisabledButtons(updatedDisabledButtonsDutch);
      // UPDATE VARIABLES
      setDutchText("");
      setEnglishText("");
      setDutchIndex(-1);
      setEnglishIndex(-1);
      setTotalClickQuestions(totalClickQuestions + 1);
      if (totalClickQuestions === 11) {
        if(hasPhrases) {
setShowPhrases(true)
        } else {
          axios.put(`http://localhost:3000/users/${user?.id}`, pointUser)
          setShowFinalResult(true);
        }
      }
    }

    if (englishText !== english) {
      setAnimationComplete(true);
    }
  }
};

const handleAnimationEnd = () => {
  setAnimationComplete(false);
  setEnglishIndex(-1);
  setDutchIndex(-1);
  setEnglishText("");
  setDutchText("");
};

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
      const shuffledOptions = shuffleArray(shuffledQuestions);
      setQuestions(shuffledQuestions);
      setOptions(shuffledOptions);
      setHasPhrases(questions.some((obj) => obj.id <= 100))
    }
  }, []);

  return (
    <div>
      {questions.length > 0 ? <div className="flex flex-col justify-center items-center">

        {showWriteQuestions && !showFinalResult && !showSideBySide && (
            <>
              <div className={`flex flex-col mt-16 mx-auto shadow-md h-52 w-52 justify-center bg-blue-flag text-white text-3xl items-center cursor-pointer mb-12 ${selectAnswerRight ? 'bg-green-500' : ''} ${selectAnswerWrong ? 'bg-red-flag' : ''}`}>
        {order === 'eng' ? questions[currentQuestionIndex].dutch : questions[currentQuestionIndex].english }
              </div>
              
                <textarea value={writeText} onKeyDown={handleKeyDown} onChange={handleWrite} className={`flex flex-col mx-auto shadow-md h-72 w-full justify-center items-center cursor-pointer text-xl mb-4 disabled:opacity-50 disabled:bg-gray-200`}disabled={continueButton}> </textarea>
           
               {checkButton && (
            <button className="justify-center items-center rounded-md text-white bg-red-flag text-xl" onClick={handleCheckButton}>
              Check
            </button>
          )}
          {continueButton && (
            <button className="justify-center items-center rounded-md text-white bg-red-flag text-xl" onClick={handleContinueButton}>
              Continue
            </button>
          )}
            </>
          )}
 
        {!showWriteQuestions && !showFinalResult && !showSideBySide ? (
            <>
              <div className={`flex flex-col mt-16 mx-auto shadow-md h-52 w-52 justify-center bg-blue-flag text-white text-3xl items-center cursor-pointer mb-12 ${selectAnswerRight ? 'bg-green-500' : ''} ${selectAnswerWrong ? 'bg-red-flag' : ''}`}>
                {order === 'eng' ? questions[currentQuestionIndex].dutch : questions[currentQuestionIndex].english }
              </div>
              {options.map((quest, index) => (
                <div
                  key={quest.id}
                  onClick={() => handleClick(index, quest.english, quest.dutch)}
                  className={`flex flex-col mx-auto shadow-md h-20 w-full justify-center items-center cursor-pointer text-xl mb-4 ${answerIndex === index ? 'bg-blue-flag text-white' : ''} ${answerIndex === index && selectAnswerRight ? 'bg-green-500 text-white' : ''} ${answerIndex === index && selectAnswerWrong ? 'bg-red-flag text-white' : ''} `}
                >
                  {order === 'eng' ? quest.english : quest.dutch}
                </div>
              ))}
               {checkButton && (
            <button className="justify-center items-center rounded-md text-white bg-red-flag text-xl" onClick={handleCheckButton}>
              Check
            </button>
          )}
          {continueButton && (
            <button className="justify-center items-center rounded-md text-white bg-red-flag text-xl" onClick={handleContinueButton}>
              Continue
            </button>
          )}
            </>
          ): ""}
  
        {showFinalResult && (<div className="flex flex-col justify-center items-center h-screen w-screen" >
  <div> You final scores is {score}/{totalClickQuestions} </div>
          </div>
          )} 
        </div> : ""}

        {questions.length > 0 && showSideBySide && !showFinalResult && (
        <div className="flex flex-row justify-center items-center">
          {!showFinalResult ? (
            <>
              <div className="flex flex-col justify-center items-center h-screen w-1/2  bg-blue-flag">
                {questions.map((quest, index) => {
                  return (
                    <button
                      key={quest.id}
                      onClick={() =>
                        handleDutchClick(index, quest.english, quest.dutch)
                      }
                      onAnimationEnd={handleAnimationEnd}
                      className={`flex w-11/12 h-20 my-5 justify-center items-center bg-white rounded-md cursor-pointer ${
                        animationComplete && index === dutchIndex
                          ? "animate-shake-horizontal"
                          : ""
                      } ${disabledButtons[index] ? "bg-green-200" : ""} ${
                        dutchIndex === index ? "bg-slate-300" : ""
                      }`}
                      disabled={disabledButtons[index]}
                    >
                      {quest.dutch}
                    </button>
                  );
                })}
              </div>
              <div className="flex flex-col justify-center items-center h-screen w-1/2 bg-red-flag">
                {options.map((quest, index) => {
                  return (
                    <button
                      key={quest.id}
                      onClick={() =>
                        handleEnglishClick(index, quest.dutch, quest.english)
                      }
                      onAnimationEnd={handleAnimationEnd}
                      className={`flex w-11/12 h-20 my-5 justify-center items-center bg-white rounded-md cursor-pointer  ${
                        animationComplete && index === englishIndex
                          ? "animate-shake-horizontal"
                          : ""
                      } ${
                        disabledButtonsEnglish[index] ? "bg-green-200" : ""
                      } ${englishIndex === index ? "bg-slate-300" : ""}`}
                      disabled={disabledButtonsEnglish[index]}
                    >
                      {quest.english}
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            ""
          )}

          {showFinalResult && (
            <div className="flex flex-col justify-center items-center h-screen w-screen">
              <div> You final scores is 0/{totalClickQuestions} </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default LeassonMain