import {  useContext, useEffect, useState  } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ContextLessons, User, Word, Phrases } from '../../contexts/ContextLessons';
import axios from 'axios'
import { IoIosArrowBack } from 'react-icons/io';

function LeassonPhrases() {
  const { user, currentlyWords } = useContext(ContextLessons);
  const { order } = useParams()
  const navigate = useNavigate()

  // STATES
  // Fetching States
  const [pointUser, setPointUser] = useState<User | undefined>()
  const [options, setOptions] = useState<Phrases[]>([]);
  const [questions, setQuestions] = useState<Phrases[]>([]);
  // Question/Total States
  const [score, setScore] = useState<number>(0);
  const [showFinalResult, setShowFinalResult] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [totalQuestions, setTotalQuestions] = useState<number>(0);
  const [text, setText] = useState<string>("")
  // Button States 
  const [checkButton, setCheckButton] = useState<boolean>(false);
  const [continueButton, setContinueButton] = useState<boolean>(false);
  // Answer States
  const [answerIndex, setAnswerIndex] = useState<number>(-1);
  const [selectAnswerWrong, setSelectAnswerWrong] = useState<boolean>(false);
  const [selectAnswerRight, setSelectAnswerRight] = useState<boolean>(false);

  const handleClick = (index: number, english: string, dutch: string) => {
    setCheckButton(true);
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
let putuser = { currentlyWords: JSON.stringify(pointUser?.currentlyWords), wordsLearned: JSON.stringify(pointUser?.wordsLearned) }
axios.put(`http://localhost:3012/api/updateuser/${user?.id}`, putuser, {withCredentials: true})
    } else {
      if (currentQuestionIndex === questions.length - 1) {
        setCurrentQuestionIndex(0);
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
      let newOptions = shuffledOptions(options)
      setOptions(newOptions)
      setAnswerIndex(-1)
      setCheckButton(false);
      setContinueButton(false)
      setSelectAnswerRight(false)
      setSelectAnswerWrong(false)
    }
  }

  const handleCheckButton = () => {
    let hasEnglish = questions[currentQuestionIndex].english === text;
    let hasDutch = questions[currentQuestionIndex].dutch === text;
if (order === 'eng' ? hasEnglish : hasDutch ) {
setCheckButton(false);
setContinueButton(true);
setSelectAnswerRight(true);
setScore(score + 1)
const actualPhrase = questions[currentQuestionIndex].english
const foundObject = currentlyWords.find((obj) => obj.phrases.find((phrase) => phrase.english === actualPhrase))
const questIndex = pointUser?.currentlyWords.findIndex((innerArray: number[]) => innerArray[0] === foundObject?.id);
if (questIndex !== undefined && questIndex !== -1 && pointUser) {
  pointUser.currentlyWords[questIndex][1] += 1;
}
} else {
setCheckButton(false)
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

  const shuffledOptions = (array: Phrases[]) => {
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
      let shuffledQuestions = shuffleArray(currentlyWords).slice(0, 2);
      let hasPhrases = shuffledQuestions.some((quest) => quest.phrases[1].english === '');
      while(hasPhrases) {
        shuffledQuestions = shuffleArray(currentlyWords).slice(0, 2);
        hasPhrases = shuffledQuestions.some((quest) => quest.phrases[1].english === '');
      }
      setQuestions([shuffledQuestions[0].phrases[0], shuffledQuestions[0].phrases[1], shuffledQuestions[1].phrases[0], shuffledQuestions[1].phrases[1]]);
      setOptions([shuffledQuestions[0].phrases[0], shuffledQuestions[0].phrases[1], shuffledQuestions[1].phrases[0], shuffledQuestions[1].phrases[1]]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-16 ">
        {questions.length > 0 && !showFinalResult && (
          <>
          <div className={`flex relative h-1/4 w-fit justify-center items-center shadow-md rounded-xl mb-10 px-10 py-10 border-solid border-4 border-blue-flag bg-white text-blue-flag ${selectAnswerWrong ? 'bg-red-700 border-red-flag' : ''} ${selectAnswerRight ? 'border-green-500' : ''}`}>
          {checkButton && <div className='flex absolute bottom-0 left-0 justify-end w-10 h-10'><img src="/utils/svg/thoughtfulhead.gif" alt="thoughtful head" className="w-10 h-10" /></div>}
          {selectAnswerRight && <div className='flex absolute bottom-0 left-0 justify-end w-10 h-10'><img src="/utils/svg/yessticker.gif" alt="yes sticker" className="w-10 h-10" /></div>}
          {selectAnswerWrong && <div className='flex absolute bottom-0 left-0 justify-end w-10 h-10'><img src="/utils/svg/nosticker.gif" alt='no sticker' className="w-10 h-10" /></div>}
          { order === 'dutch' ?  <div className={`flex flex-row text-2xl items-center cursor-pointer ${selectAnswerRight ? ' text-green-500' : ''} ${selectAnswerWrong ? 'text-red-500' : ''}`}>{questions[currentQuestionIndex].english.split(' ').map((word, index) => (<span key={index} className={`${ currentlyWords.some((obj) => obj.english === word) ? `text-red-500 ` : ''} mr-2 `}>{word} </span>))}</div> : ""}
          { order === 'eng' ?  <div className={`flex flex-row text-2xl items-center cursor-pointer ${selectAnswerRight ? ' text-green-500' : ''}  ${selectAnswerWrong ? 'text-red-500' : ''}`}>{questions[currentQuestionIndex].dutch.split(' ').map((word, index) => (<span key={index} className={`${currentlyWords.some((obj) => obj.dutch === word) ? 'text-red-500' : ''} mr-2 `}>{word} </span>))}</div> : ""}
          </div>
 

 <div className={'flex flex-col h-2/4 w-full justify-start items-center mb-10 gap-6'}>
            {options.map((quest, index) => ( 
              <button
                key={quest.english}
                onClick={() => handleClick(index, quest.english, quest.dutch)}
                disabled={continueButton}
                className={`flex flex-col shadow-md h-24 w-11/12 rounded-lg border-solid border-2 border-blue-flag text-blue-flag justify-center items-center cursor-pointer text-2xl ${answerIndex === index ? 'bg-blue-flag text-white' : ''} ${answerIndex === index && selectAnswerRight ? 'bg-green-500 text-white border-green-600 border-4 ' : ''} ${answerIndex === index && selectAnswerWrong ? 'bg-red-flag text-white border-red-700 border-4' : ''} `}
              >
                {order === 'eng' ? quest.english : quest.dutch}
              </button>
            ))}
</div>


             {checkButton && (
          <button className="justify-center items-center rounded-md text-white bg-red-flag text-4xl px-20 py-4 mb-5" onClick={handleCheckButton}>
            Check
          </button>
        )}
        {continueButton && (
          <button className="justify-center items-center rounded-md text-white bg-red-flag text-4xl px-20 py-4 mb-5" onClick={handleContinueButton}>
            Continue
          </button>
        )}
          </>
        )}

        {showFinalResult && (<div className="flex flex-col justify-start items-center h-screen w-screen mt-28" >
        <img src="/utils/svg/donelesson.gif" alt='done lesson' />
<div className=' text-3xl text-blue-flag'>You final scores is {score}/{questions.length}</div>
<Link to='/lessons' className="flex flex-row justify-center items-center rounded-lg text-white bg-blue-flag text-2xl px-1 py-2 mt-2"><IoIosArrowBack />Return lessons</Link>
        </div>
        )}
       
      </div>
    </div>
  );
}


export default LeassonPhrases