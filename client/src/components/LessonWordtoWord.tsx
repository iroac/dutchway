import {  useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { ContextLessons, User, Word, Phrases } from '../contexts/ContextLessons';


function LessonWordtoWord() {
  const { user, currentlyWords, fetchData } = useContext(ContextLessons);
  const [score, setScore] = useState<number>(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectAnswer, setSelectAnswer] = useState<boolean>(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);


  const handleClick = (index: number) => {
    setSelectedAnswerIndex(index);
    setSelectAnswer(true);
  };

  const handleButtonClick = () => {
    if (currentQuestionIndex === questions.length - 1) {
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    setSelectedAnswerIndex(null);
    setSelectAnswer(false);
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
        {questions.length > 0 && (
          <>
            <div className="flex flex-col mx-auto shadow-md h-52 w-52 justify-center bg-blue-flag text-white text-3xl items-center cursor-pointer mb-12">
              {questions[currentQuestionIndex].dutch}
            </div>
            {questions.map((quest, index) => (
              <div
                key={quest.id}
                onClick={() => handleClick(index)}
                className={`flex flex-col mx-auto shadow-md h-20 w-full justify-center items-center cursor-pointer text-xl mb-4 ${selectedAnswerIndex === index ? 'bg-blue-flag text-white' : ''}`}
              >
                {quest.english}
              </div>
            ))}
          </>
        )}
        {selectAnswer && (
          <button className="justify-center items-center rounded-md text-white bg-red-flag text-xl" onClick={handleButtonClick}>
            Continue
          </button>
        )}
      </div>
    </div>
  );
}



export default LessonWordtoWord