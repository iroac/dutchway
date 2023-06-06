import {  useContext, useEffect, useState  } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ContextLessons, User, Word } from '../contexts/ContextLessons';
import {IoIosArrowBack} from 'react-icons/io';
import axios from 'axios'

function LessonWordtoWord() {
  const { user, currentlyWords, fetchData } = useContext(ContextLessons);
  const { order } = useParams()
  const navigate = useNavigate()

  //STATES
  // Fetch States
  const [pointUser, setPointUser] = useState<User | undefined>(user)
  const [questions, setQuestions] = useState<Word[]>([]);
  const [options, setOptions] = useState<Word[]>([])
  // Buttons States
  const [checkButton, setCheckButton] = useState<boolean>(false);
  const [continueButton, setContinueButton] = useState<boolean>(false);
  // Answer States
  const [answerIndex, setAnswerIndex] = useState<number>(-1);
  const [selectAnswerWrong, setSelectAnswerWrong] = useState<boolean>(false);
  const [selectAnswerRight, setSelectAnswerRight] = useState<boolean>(false);
  // Question States
const [score, setScore] = useState<number>(0);
const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
const [totalClickQuestions, setTotalClickQuestions] = useState<number>(0);
// Writing States
const [text, setText] = useState<string>("")
const [writeText, setWriteText] = useState<string>("")
// Showing States
const [showWriteQuestions, setWriteQuestions] = useState<boolean>(false);
const [showFinalResult, setShowFinalResult] = useState<boolean>(false);


  const handleClick = (index: number, english: string, dutch: string) => {
    setCheckButton(true);
    setAnswerIndex(index)
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

  const handleContinueButton = () => {
    if(totalClickQuestions === questions.length * 2) {
      setShowFinalResult(true)
      axios.put(`http://localhost:3000/users/${user?.id}`, pointUser)
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
    }
  }, []);

  return (
    <div>
      {questions.length > 0 ? <div className="flex flex-col justify-center items-center mt-16 ">

        {showWriteQuestions && !showFinalResult && (
            <>
              <div className={`flex flex-col mx-auto shadow-md h-fit rounded-xl w-fit px-16 py-14 justify-center border-solid border-8 border-blue-flag bg-white text-blue-flag text-4xl items-center cursor-pointer mb-12 ${selectAnswerRight ? 'border-green-500 text-green-500' : ''} ${selectAnswerWrong ? 'bg-red-700 border-red-700' : ''}`}>
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
  
  
        {!showWriteQuestions && !showFinalResult ? (
            <div className={'flex flex-col h-screen w-screen justify-start items-center'} >

<div className={'flex flex-col h-1/4 w-full'} >
              <div className={`flex flex-col mx-auto shadow-md h-fit w-fit rounded-xl px-16 py-14 justify-center border-solid border-8 border-blue-flag bg-white text-blue-flag text-4xl items-center cursor-pointer mb-20 ${selectAnswerRight ? 'border-green-500 text-green-500' : ''} ${selectAnswerWrong ? 'bg-red-700 border-red-flag text-red-flag' : ''}`}>
                {order === 'eng' ? questions[currentQuestionIndex].dutch : questions[currentQuestionIndex].english }
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
        <img src="/utils/svg/donelesson.gif"/>
  <div className=' text-3xl text-blue-flag'>You final scores is {score}/{totalClickQuestions}</div>
  <Link to='/lessons' className="flex flex-row justify-center items-center rounded-lg text-white bg-blue-flag text-2xl px-1 py-2 mt-2"><IoIosArrowBack />Return lessons</Link>
          </div>
          )} 
        </div> : ""}
    </div>
  );
}



export default LessonWordtoWord