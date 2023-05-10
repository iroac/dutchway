import {  useContext, useEffect, useState, useCallback, useMemo,  } from 'react';
import { useParams } from 'react-router-dom';
import { ContextLessons, User, Word, Phrases } from '../contexts/ContextLessons';


function LessonWordtoWord() {
  const { order } = useParams()
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


  const handleClick = (index: number) => {
    setSelectedAnswerIndex(index);
    setSelectAnswer(true);
    setAnswerIndex(index)
  };

  const handleContinueButton = () => {
    if(totalQuestions === questions.length) {
setShowFinalResult(true)
    } else {
      if (currentQuestionIndex === questions.length - 1) {
        setCurrentQuestionIndex(0);
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
      setSelectedAnswerIndex(null);
      setSelectAnswer(false);
      setContinueButton(false)
      setSelectAnswerRight(false)
      setSelectAnswerWrong(false)
    }
  }

  const handleCheckButton = () => {
if (questions[answerIndex].english === questions[currentQuestionIndex].english) {
setSelectAnswer(false);
setContinueButton(true);
setSelectAnswerRight(true);
setScore(score + 1) 
} else {
setSelectAnswer(false)
setContinueButton(true)
setSelectAnswerWrong(true)
}
setTotalQuestions(totalQuestions + 1)
  }

  const setQuestions = useCallback(() => {
    const newQuestions: Word[] = [];
    for (let i = 0; i < 4; i++) {
      let randomIndex = Math.floor(Math.random() * currentlyWords.length);
      let alreadyAdd = newQuestions.some(
        (quest: Word) => quest.id === currentlyWords[randomIndex].id
      );
      while (alreadyAdd) {
        randomIndex = Math.floor(Math.random() * currentlyWords.length);
        alreadyAdd = newQuestions.some(
          (quest: Word) => quest.id === currentlyWords[randomIndex].id
        );
      }
      newQuestions.push(currentlyWords[randomIndex]);
    }
    return newQuestions;
  }, [currentlyWords]);

  useEffect(() => {
    fetchData();
  }, []);

  const questions = useMemo(() => setQuestions(), [setQuestions, currentQuestionIndex]);

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-16 ">
        {questions.length > 0 && !showFinalResult && (
          <>
            <div className="flex flex-col mx-auto shadow-md h-52 w-52 justify-center bg-blue-flag text-white text-3xl items-center cursor-pointer mb-12">
              {questions[currentQuestionIndex].dutch}
            </div>
            {questions.map((quest, index) => (
              <div
                key={quest.id}
                onClick={() => handleClick(index)}
                className={`flex flex-col mx-auto shadow-md h-20 w-full justify-center items-center cursor-pointer text-xl mb-4 ${selectedAnswerIndex === index ? 'bg-blue-flag text-white' : ''} ${answerIndex === index && selectAnswerRight ? 'bg-green-500 text-white' : ''} ${answerIndex === index && selectAnswerWrong ? 'bg-red-flag text-white' : ''} `}
              >
                {quest.english}
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



export default LessonWordtoWord