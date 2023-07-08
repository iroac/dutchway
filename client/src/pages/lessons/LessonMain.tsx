import {  useContext, useEffect, useState  } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ContextLessons, User, Word, Phrases } from '../../contexts/ContextLessons';
import {IoIosArrowBack} from 'react-icons/io';
import axios from 'axios'

const randomWordToWordOrder = () => {let order = ['eng', 'dutch'] 
  const i = Math.floor(Math.random() * 2);
  return order[i]
  }

function LeassonMain() {
  const order = randomWordToWordOrder();
  const { user, currentlyWords } = useContext(ContextLessons);
  const navigate = useNavigate()
 
  //STATES
  // Featching states
  const [questions, setQuestions] = useState<Word[]>([]);
  const [pointUser, setPointUser] = useState<User | undefined>()
  const [options, setOptions] = useState<Word[]>([])
  // Change Lesson States
  const [showFinalResult, setShowFinalResult] = useState<boolean>(false);
  const [showFinalResultPhrases, setShowFinalResultPhrases] = useState<boolean>(false);
  const [showWriteQuestions, setWriteQuestions] = useState<boolean>(false);
  const [showSideBySide, setSideBySide] = useState<boolean>(false);
  const [showPhases, setShowPhrases] = useState<boolean>(false);

// WORD TO WORD
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


  // PHRASES STATES
  // Question States
  const [currentQuestionIndexPhrase, setCurrentQuestionIndexPhrase] = useState<number>(0);
  const [textPhrase, setTextPhrase] = useState<string>("")
  const [answerIndexPhrase, setAnswerIndexPhrase] = useState<number>(-1);
  const [totalQuestions, setTotalQuestions] = useState<number>(0);
  // Button States
  const [checkButtonPhrase, setCheckButtonPhrase] = useState<boolean>(false);
  const [continueButtonPhrase, setContinueButtonPhrase] = useState<boolean>(false);
  // Questions States
  const [optionsPhrases, setOptionsPhrases] = useState<Phrases[]>([]);
  const [questionsPhrases, setQuestionsPhrases] = useState<Phrases[]>([]);


  // PHRASES FUNCTIONS 

  const handleClickPhrases = (index: number, english: string, dutch: string) => {
    setCheckButtonPhrase(true);
    setAnswerIndexPhrase(index)
    if(order === 'eng') {
      setTextPhrase(english)
    } else if(order === 'dutch') {
      setTextPhrase(dutch)
    }
  };

  const handleContinueButtonPhrases = () => {
    if(totalQuestions === questionsPhrases.length) {
      setShowFinalResultPhrases(true)
      let putuser = { currentlyWords: JSON.stringify(pointUser?.currentlyWords), wordsLearned: JSON.stringify(pointUser?.wordsLearned) }
axios.put(`http://localhost:3012/api/updateuser/${user?.id}`, putuser)
    } else {
      if (currentQuestionIndexPhrase === questionsPhrases.length - 1) {
        setCurrentQuestionIndexPhrase(0);
      } else {
        setCurrentQuestionIndexPhrase(currentQuestionIndexPhrase + 1);
      }
      let newOptions = shuffledOptions(optionsPhrases)
      setOptionsPhrases(newOptions)
      setAnswerIndexPhrase(-1)
      setCheckButtonPhrase(false);
      setContinueButtonPhrase(false)
      setSelectAnswerRight(false)
      setSelectAnswerWrong(false)
    }
  }

  const handleCheckButtonPhrases = () => {
    let hasEnglish = questionsPhrases[currentQuestionIndexPhrase].english === textPhrase;
    let hasDutch = questionsPhrases[currentQuestionIndexPhrase].dutch === textPhrase;
if (order === 'eng' ? hasEnglish : hasDutch ) {
setCheckButton(false);
setContinueButton(true);
setSelectAnswerRight(true);
setScore(score + 1)
const actualPhrase = questionsPhrases[currentQuestionIndexPhrase].english
const foundObject = currentlyWords.find((obj) => obj.phrases.find((phrase) => phrase.english === actualPhrase))
const questIndex = pointUser?.currentlyWords.findIndex((innerArray: number[]) => innerArray[0] === foundObject?.id);
if (questIndex !== undefined && questIndex !== -1 && pointUser) {
  pointUser.currentlyWords[questIndex][1] += 1;
}
} else {
setSelectAnswerWrong(true)
}
setTotalQuestions(totalQuestions + 1)
setTotalClickQuestions(totalClickQuestions + 1)
setCheckButtonPhrase(false)
setContinueButtonPhrase(true)
  }

  const shuffledOptions = (array: Phrases[]) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

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
      setScore(score + 1)
      setTotalClickQuestions(totalClickQuestions + 1);
      if (totalClickQuestions === 11) {
        let WordWithPhrases = questions.some((obj) => obj.id <= 100)
        if(WordWithPhrases) {
          setShowPhrases(true)
          let shuffledQuestionsPhrases = shuffleArray(currentlyWords).slice(0, 2);
                let hasPhrases = shuffledQuestionsPhrases.some((quest) => quest.phrases[1].english === '');
                while(hasPhrases) {
                  shuffledQuestionsPhrases = shuffleArray(currentlyWords).slice(0, 2);
                  hasPhrases = shuffledQuestionsPhrases.some((quest) => quest.phrases[1].english === '');
                }
                setQuestionsPhrases([shuffledQuestionsPhrases[0].phrases[0], shuffledQuestionsPhrases[0].phrases[1], shuffledQuestionsPhrases[1].phrases[0], shuffledQuestionsPhrases[1].phrases[1]]);
                setOptionsPhrases([shuffledQuestionsPhrases[0].phrases[0], shuffledQuestionsPhrases[0].phrases[1], shuffledQuestionsPhrases[1].phrases[0], shuffledQuestionsPhrases[1].phrases[1]]);
                  } else {
          let putuser = { currentlyWords: JSON.stringify(pointUser?.currentlyWords), wordsLearned: JSON.stringify(pointUser?.wordsLearned) }
          axios.put(`http://localhost:3012/api/updateuser/${user?.id}`, putuser)
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
      setScore(score + 1)
      if (totalClickQuestions === 11) {
        let WordWithPhrases = questions.some((obj) => obj.id <= 100)
        if(WordWithPhrases) {
setShowPhrases(true)
let shuffledQuestionsPhrases = shuffleArray(currentlyWords).slice(0, 2);
      let hasPhrases = shuffledQuestionsPhrases.some((quest) => quest.phrases[1].english === '');
      while(hasPhrases) {
        shuffledQuestionsPhrases = shuffleArray(currentlyWords).slice(0, 2);
        hasPhrases = shuffledQuestionsPhrases.some((quest) => quest.phrases[1].english === '');
      }
      setQuestionsPhrases([shuffledQuestionsPhrases[0].phrases[0], shuffledQuestionsPhrases[0].phrases[1], shuffledQuestionsPhrases[1].phrases[0], shuffledQuestionsPhrases[1].phrases[1]]);
      setOptionsPhrases([shuffledQuestionsPhrases[0].phrases[0], shuffledQuestionsPhrases[0].phrases[1], shuffledQuestionsPhrases[1].phrases[0], shuffledQuestionsPhrases[1].phrases[1]]);
        } else {
          let putuser = { currentlyWords: JSON.stringify(pointUser?.currentlyWords), wordsLearned: JSON.stringify(pointUser?.wordsLearned) }
          axios.put(`http://localhost:3012/api/updateuser/${user?.id}`, putuser)
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
      setPointUser(user)
      const shuffledQuestions = shuffleArray(currentlyWords).slice(0, 4);
      const shuffledOptions = shuffleArray(shuffledQuestions);
      setQuestions(shuffledQuestions);
      setOptions(shuffledOptions);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {questions.length > 0 ? <div className="flex flex-col justify-center items-center">

        {showWriteQuestions && !showFinalResult && !showSideBySide && (
                        <>
                        <div className={`flex flex-col mx-auto shadow-md h-fit rounded-xl w-fit px-16 py-14 justify-center border-solid border-8 border-blue-flag bg-white text-blue-flag text-4xl items-center cursor-pointer mb-12 mt-16 ${selectAnswerRight ? 'border-green-500 text-green-500' : ''} ${selectAnswerWrong ? 'bg-red-700 border-red-700' : ''}`}>
                  {order === 'eng' ? questions[currentQuestionIndex].dutch : questions[currentQuestionIndex].english }
                        </div>
                        
                          <textarea value={writeText} onKeyDown={handleKeyDown} onChange={handleWrite} className={`flex flex-col shadow-md border-solid border-4 border-blue-flag h-72 w-11/12 justify-center items-center cursor-pointer text-xl mb-10 disabled:opacity-50 disabled:bg-gray-200 ${selectAnswerRight ? 'border-green-500' : ''} ${selectAnswerWrong ? 'border-red-flag' : ''}`}disabled={continueButton}> </textarea>
                     
                          {checkButton && (
                      <button className="justify-center items-center rounded-md text-white bg-blue-flag text-4xl px-20 py-4" onClick={handleCheckButton}>
                        Check
                      </button>
                    )}
                    {continueButton && (
                      <button className="justify-center items-center rounded-md text-white bg-blue-flag text-4xl px-20 py-4" onClick={handleContinueButton}>
                        Continue
                      </button>
                    )}
                      </>
          )}
 
        {!showWriteQuestions && !showFinalResult && !showSideBySide ? (
            <div className={'flex flex-col h-screen w-screen justify-start items-center mt-16'} >

<div className={`flex flex-row h-1/4 w-full justify-center items-center ${checkButton || selectAnswerRight || selectAnswerWrong ? 'mr-20' : ''} `} >
  <div className={'flex flex-row'} >

    <div className={'flex flex-col justify-end items-center mb-16'} >
  {checkButton && <img src="/utils/svg/thoughtfulhead.gif" alt='thoughtful head' className="w-20 h-20" />}
  {selectAnswerRight && <img src="/utils/svg/yessticker.gif" alt='yes sticker' className="w-20 h-20" />}
  {selectAnswerWrong && <img src="/utils/svg/nosticker.gif" alt='no sticker' className="w-20 h-20" />}
  </div>
  
              <div className={`flex flex-col mx-auto shadow-md h-fit w-fit rounded-xl px-16 py-14 justify-center border-solid border-8 border-blue-flag bg-white text-blue-flag text-4xl items-center cursor-pointer mb-20 ${selectAnswerRight ? 'border-green-500 text-green-500' : ''} ${selectAnswerWrong ? 'bg-red-700 border-red-flag text-red-flag' : ''}`}>
                {order === 'eng' ? questions[currentQuestionIndex].dutch : questions[currentQuestionIndex].english }
              </div>

              </div>
              </div>

<div className={'flex flex-col h-2/4 w-full justify-start items-center mb-10 gap-6'} >
              {options.map((quest, index) => (
                <button
                  key={quest.id}
                  disabled={continueButton}
                  onClick={() => handleClick(index, quest.english, quest.dutch)}
                  className={`flex flex-col shadow-md h-24 w-11/12 rounded-lg border-solid border-2 border-blue-flag text-blue-flag justify-center items-center cursor-pointer text-2xl ${answerIndex === index ? 'bg-blue-flag text-white' : ''} ${answerIndex === index && selectAnswerRight ? 'bg-green-500 text-white border-green-600 border-4 ' : ''} ${answerIndex === index && selectAnswerWrong ? 'bg-red-flag text-white border-red-700 border-4' : ''} `}
                >
                  {order === 'eng' ? quest.english : quest.dutch}
                </button>
              ))}
</div>

               {checkButton && (
            <button className="justify-center items-center rounded-md text-white bg-red-flag text-4xl px-20 py-4" onClick={handleCheckButton}>
              Check
            </button>
          )}
          {continueButton && (
            <button className="justify-center items-center rounded-md text-white bg-red-flag text-4xl px-20 py-4" onClick={handleContinueButton}>
              Continue
            </button>
          )}
            </div>
          ): ""}
  
        {showFinalResult && (<div className="flex flex-col justify-start items-center h-screen w-screen" >
        <img src="/utils/svg/donelesson.gif" alt='done lesson'/>
  <div className=' text-3xl text-blue-flag'>You final scores is {score}/{totalClickQuestions}</div>
  <Link to='/lessons' className="flex flex-row justify-center items-center rounded-lg text-white bg-blue-flag text-2xl px-1 py-2 mt-2"><IoIosArrowBack />Return lessons</Link>
          </div>
          )} 
        </div> : ""}

        {questions.length > 0 && showSideBySide && !showFinalResult && !showPhases && (
        <div className={`flex flex-row justify-center items-center bg-no-repeat bg-center ${showFinalResult ? 'bg-white' : ''} `} style={{backgroundImage: `${showFinalResult ? '' : `url(/utils/svg/ballmiddlebg.svg)`}`}}>
          {!showFinalResult ? (
                 <>
                 <div className="flex flex-col justify-center items-center h-screen w-1/2">
                   {questions.map((quest, index) => {
                     return (
                       <button
                         key={quest.id}
                         onClick={() =>
                           handleDutchClick(index, quest.english, quest.dutch)
                         }
                         onAnimationEnd={handleAnimationEnd}
                         className={`flex w-11/12 h-20 my-5 justify-center items-center bg-white rounded-md text-blue-flag text-3xl cursor-pointer border-solid border-4 border-blue-flag ${
                           animationComplete && index === dutchIndex
                             ? "animate-shake-horizontal"
                             : ""
                         } ${disabledButtons[index] ? "bg-green-400 text-black border-green-600" : ""} ${
                           dutchIndex === index ? "bg-slate-200" : ""
                         }`}
                         disabled={disabledButtons[index]}
                       >
                         {quest.dutch}
                       </button>
                     );
                   })}
                 </div>
                 <div className="flex flex-col justify-center items-center h-screen w-1/2">
                   {options.map((quest, index) => {
                     return (
                       <button
                         key={quest.id}
                         onClick={() =>
                           handleEnglishClick(index, quest.dutch, quest.english)
                         }
                         onAnimationEnd={handleAnimationEnd} 
                         className={`flex w-11/12 h-20 my-5 justify-center items-center bg-white rounded-md text-blue-flag text-3xl cursor-pointer border-solid border-4 border-blue-flag ${
                           animationComplete && index === englishIndex
                             ? "animate-shake-horizontal"
                             : ""
                         } ${
                           disabledButtonsEnglish[index] ? "bg-green-400 text-black border-green-600" : ""
                         } ${englishIndex === index ? "bg-slate-200" : ""}`}
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
        </div>
      )}

      {questionsPhrases.length > 0 && !showFinalResultPhrases && showPhases && (
        <div>
        <div className="flex flex-col justify-center items-center mt-16 ">
          <div className={`flex relative h-1/4 w-fit justify-center items-center shadow-md rounded-xl mb-10 px-10 py-10 border-solid border-4 border-blue-flag bg-white text-blue-flag ${selectAnswerWrong ? 'bg-red-700 border-red-flag' : ''} ${selectAnswerRight ? 'border-green-500' : ''}`}>
          {checkButton && <div className='flex absolute bottom-0 left-0 justify-end w-10 h-10'><img src="/utils/svg/thoughtfulhead.gif" alt='thoughtful head' className="w-10 h-10" /></div>}
          {selectAnswerRight && <div className='flex absolute bottom-0 left-0 justify-end w-10 h-10'><img src="/utils/svg/yessticker.gif" alt='yes sticker' className="w-10 h-10" /></div>}
          {selectAnswerWrong && <div className='flex absolute bottom-0 left-0 justify-end w-10 h-10'><img src="/utils/svg/nosticker.gif" alt='no sticker' className="w-10 h-10" /></div>}
          { order === 'dutch' ?  <div className={`flex flex-row text-2xl items-center cursor-pointer ${selectAnswerRight ? ' text-green-500' : ''} ${selectAnswerWrong ? 'text-red-500' : ''}`}>{questionsPhrases[currentQuestionIndexPhrase].english.split(' ').map((word, index) => (<span key={index} className={`${ currentlyWords.some((obj) => obj.english === word) ? 'text-red-500' : ''} mr-2 `}>{word} </span>))}</div> : ""}
          { order === 'eng' ?  <div className={`flex flex-row text-2xl items-center cursor-pointer ${selectAnswerRight ? ' text-green-500' : ''} ${selectAnswerWrong ? 'text-red-500' : ''}`}>{questionsPhrases[currentQuestionIndexPhrase].dutch.split(' ').map((word, index) => (<span key={index} className={`${currentlyWords.some((obj) => obj.dutch === word) ? 'text-red-500' : ''} mr-2 `}>{word} </span>))}</div> : ""}
          </div>
          
 
          <div className={'flex flex-col h-2/4 w-full justify-start items-center mb-10 gap-6'}>
            {optionsPhrases.map((quest, index) => ( 
              <button
                key={quest.english}
                onClick={() => handleClickPhrases(index, quest.english, quest.dutch)}
                disabled={continueButtonPhrase}
                className={`flex flex-col shadow-md h-24 w-11/12 rounded-lg border-solid border-2 border-blue-flag text-blue-flag justify-center items-center cursor-pointer text-2xl ${answerIndexPhrase === index ? 'bg-blue-flag text-white' : ''} ${answerIndexPhrase === index && selectAnswerRight ? 'bg-green-500 text-white border-green-600 border-4' : ''} ${answerIndexPhrase === index && selectAnswerWrong ? 'bg-red-flag text-white border-red-700 border-4' : ''} `}
              >
                {order === 'eng' ? quest.english : quest.dutch}
              </button>
            ))}
            </div>

            
             {checkButtonPhrase && (
          <button className="justify-center items-center rounded-md text-white bg-red-flag text-4xl px-20 py-4 mb-5" onClick={handleCheckButtonPhrases}>
            Check
          </button>
        )}
        {continueButtonPhrase && (
          <button className="justify-center items-center rounded-md text-white bg-red-flag text-4xl px-20 py-4 mb-5" onClick={handleContinueButtonPhrases}>
            Continue
          </button>
        )}
       
      </div>
      </div>
      )}

{showFinalResultPhrases && (<div className="flex flex-col justify-start items-center h-screen w-screen" >
        <img src="/utils/svg/donelesson.gif" alt='done lesson' />
  <div className=' text-3xl text-blue-flag'>You final scores is {score}/{totalClickQuestions}</div>
  <Link to='/lessons' className="flex flex-row justify-center items-center rounded-lg text-white bg-blue-flag text-2xl px-1 py-2 mt-2"><IoIosArrowBack />Return lessons</Link>
          </div>
          )}
    </div>
  );
}

export default LeassonMain