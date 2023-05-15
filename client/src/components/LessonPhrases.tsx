import {  useContext, useEffect, useState  } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ContextLessons, User, Word } from '../contexts/ContextLessons';
import axios from 'axios'

function LeassonPhrases() {
  const { order } = useParams()
  const navigate = useNavigate()

  const { user, currentlyWords, fetchData } = useContext(ContextLessons);

  const [selectAnswer, setSelectAnswer] = useState<boolean>(false);
  const [continueButton, setContinueButton] = useState<boolean>(false);
  const [selectAnswerWrong, setSelectAnswerWrong] = useState<boolean>(false);
  const [selectAnswerRight, setSelectAnswerRight] = useState<boolean>(false);
  const [showFinalResult, setShowFinalResult] = useState<boolean>(false);

  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [answerIndex, setAnswerIndex] = useState<number>(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [totalQuestions, setTotalQuestions] = useState<number>(0);
  const [pointUser, setPointUser] = useState<User | undefined>(user)
  const [questions, setQuestions] = useState<Word[]>([]);
  const [options, setOptions] = useState<Word[]>([])
  const [text, setText] = useState<string>("")

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

  const handleContinueButton = () => {
    if(totalQuestions === questions.length) {
setShowFinalResult(true)
axios.put(`http://localhost:3000/users/${user?.id}`, pointUser)
    } else {
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
    }
  }

  const handleCheckButton = () => {
if (order === 'eng' ? text === questions[currentQuestionIndex].phrases[0].english : text === questions[currentQuestionIndex].phrases[0].dutch ) {
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
setSelectAnswer(false)
setContinueButton(true)
setSelectAnswerWrong(true)
}
setTotalQuestions(totalQuestions + 1)
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
      let shuffledQuestions = shuffleArray(currentlyWords).slice(0, 4);
      let hasPhrases = shuffledQuestions.some((quest) => quest.phrases[1].english === '');
      while(hasPhrases) {
        shuffledQuestions = shuffleArray(currentlyWords).slice(0, 4);
        hasPhrases = shuffledQuestions.some((quest) => quest.phrases[1].english === '');
      }
      setQuestions(shuffledQuestions);
      setOptions(shuffledQuestions);
    }
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-16 ">
        {questions.length > 0 && !showFinalResult && (
          <>
          { order === 'dutch' ?  <div className="flex flex-row mx-auto shadow-md h-52 w-auto justify-center bg-blue-flag text-white text-3xl items-center cursor-pointer mb-12">{questions[currentQuestionIndex].phrases[0].english.split(' ').map((word, index) => (<span key={index} className={`${word.toLowerCase() === questions[currentQuestionIndex].english.toLowerCase() ? 'text-red-500' : ''} mr-2 `}>{word} </span>))}</div> : ""}
          { order === 'eng' ?  <div className="flex flex-row mx-auto shadow-md h-52 w-auto justify-center bg-blue-flag text-white text-3xl items-center cursor-pointer mb-12">{questions[currentQuestionIndex].phrases[0].dutch.split(' ').map((word, index) => (<span key={index} className={`${word.toLowerCase()  === questions[currentQuestionIndex].dutch.toLowerCase()  ? 'text-red-500' : ''} mr-2 `}>{word} </span>))}</div> : ""}
 
            {options.map((quest, index) => ( 
              <div
                key={quest.id}
                onClick={() => handleClick(index, quest.phrases[0].english, quest.phrases[0].dutch)}
                className={`flex flex-col mx-auto shadow-md h-20 w-full justify-center items-center cursor-pointer text-xl mb-4 ${selectedAnswerIndex === index ? 'bg-blue-flag text-white' : ''} ${answerIndex === index && selectAnswerRight ? 'bg-green-500 text-white' : ''} ${answerIndex === index && selectAnswerWrong ? 'bg-red-flag text-white' : ''} `}
              >
                {order === 'eng' ? quest.phrases[0].english : quest.phrases[0].dutch}
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
        )}

        {showFinalResult && (<div className="flex flex-col justify-center items-center h-screen w-screen" >
<div> You final scores is {score}/{questions.length} </div>
        </div>
        )}
       
      </div>
    </div>
  );
}


export default LeassonPhrases