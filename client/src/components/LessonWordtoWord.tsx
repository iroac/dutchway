import {  useContext, useEffect, useState  } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ContextLessons, User, Word } from '../contexts/ContextLessons';
import axios from 'axios'

function LessonWordtoWord() {
  const { order } = useParams()
  const navigate = useNavigate()

  const { user, currentlyWords, fetchData } = useContext(ContextLessons);

  const [selectAnswer, setSelectAnswer] = useState<boolean>(false);
  const [continueButton, setContinueButton] = useState<boolean>(false);
  const [selectAnswerWrong, setSelectAnswerWrong] = useState<boolean>(false);
  const [selectAnswerRight, setSelectAnswerRight] = useState<boolean>(false);
  const [showFinalResult, setShowFinalResult] = useState<boolean>(false);
  const [showWriteQuestions, setWriteQuestions] = useState<boolean>(false);

  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [answerIndex, setAnswerIndex] = useState<number>(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [totalClickQuestions, setTotalClickQuestions] = useState<number>(0);
  const [pointUser, setPointUser] = useState<User | undefined>(user)
  const [questions, setQuestions] = useState<Word[]>([]);
  const [options, setOptions] = useState<Word[]>([])
  const [text, setText] = useState<string>("")
  const [writeText, setWriteText] = useState<string>("")

  const handleClick = (index: number, english: string, dutch: string) => {
    setSelectedAnswerIndex(index);
    setSelectAnswer(true);
    setAnswerIndex(index)
    if(order === 'eng') {
      setText(english)
    } else if(order === 'dutch') {
      setText(dutch)
    }
  };

  const handleWrite = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
setSelectAnswer(true)
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
        setSelectedAnswerIndex(null);
        setSelectAnswer(false);
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
        setSelectAnswer(false);
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
    setSelectAnswer(false)
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
              <div className={`flex flex-col mx-auto shadow-md h-52 w-52 justify-center bg-blue-flag text-white text-3xl items-center cursor-pointer mb-12 ${selectAnswerRight ? 'bg-green-500' : ''} ${selectAnswerWrong ? 'bg-red-flag' : ''}`}>
        {order === 'eng' ? questions[currentQuestionIndex].dutch : questions[currentQuestionIndex].english }
              </div>
              
                <textarea value={writeText} onKeyDown={handleKeyDown} onChange={handleWrite} className={`flex flex-col mx-auto shadow-md h-72 w-full justify-center items-center cursor-pointer text-xl mb-4 disabled:opacity-50 disabled:bg-gray-200`}disabled={continueButton}> </textarea>
           
               {selectAnswer && (
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
  
  
        {!showWriteQuestions && !showFinalResult ? (
            <>
              <div className={`flex flex-col mx-auto shadow-md h-52 w-52 justify-center bg-blue-flag text-white text-3xl items-center cursor-pointer mb-12 ${selectAnswerRight ? 'bg-green-500' : ''} ${selectAnswerWrong ? 'bg-red-flag' : ''}`}>
                {order === 'eng' ? questions[currentQuestionIndex].dutch : questions[currentQuestionIndex].english }
              </div>
              {options.map((quest, index) => (
                <div
                  key={quest.id}
                  onClick={() => handleClick(index, quest.english, quest.dutch)}
                  className={`flex flex-col mx-auto shadow-md h-20 w-full justify-center items-center cursor-pointer text-xl mb-4 ${selectedAnswerIndex === index ? 'bg-blue-flag text-white' : ''} ${answerIndex === index && selectAnswerRight ? 'bg-green-500 text-white' : ''} ${answerIndex === index && selectAnswerWrong ? 'bg-red-flag text-white' : ''} `}
                >
                  {order === 'eng' ? quest.english : quest.dutch}
                </div>
              ))}
               {selectAnswer && (
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
    </div>
  );
}



export default LessonWordtoWord