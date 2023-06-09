import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ContextLessons, Word } from "../../contexts/ContextLessons";
import {IoIosArrowBack} from 'react-icons/io';

const LeassonSidebySide = () => {
  const { user, currentlyWords } = useContext(ContextLessons);
  const navigate = useNavigate();
 
  // States
  // Fetching States
  const [questions, setQuestions] = useState<Word[]>([]);
  const [options, setOptions] = useState<Word[]>([]);
  // Result States
  const [showFinalResult, setShowFinalResult] = useState<boolean>(false);
  const [totalClickQuestions, setTotalClickQuestions] = useState<number>(0);
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
        if (totalClickQuestions === 4) {
          setShowFinalResult(true);
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
        if (totalClickQuestions === 3) {
          setShowFinalResult(true);
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
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };
  useEffect(() => {
    if (!user || !currentlyWords) {
      navigate("/lessons");
    }
    if (currentlyWords.length > 0) {
      const shuffledQuestions = shuffleArray(currentlyWords).slice(0, 4);
      const shuffledOptions = shuffleArray(shuffledQuestions);
      setQuestions(shuffledQuestions);
      setOptions(shuffledOptions);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {questions.length > 0 ? (
        <div className={`flex flex-row justify-center items-center bg-no-repeat bg-center ${showFinalResult ? 'bg-white' : ''} `} style={{backgroundImage: `${showFinalResult ? '' : `url(/utils/svg/ballmiddlebg.svg)`}`}} >
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

          {showFinalResult && (
            <div className="flex flex-col justify-start mt-28 items-center h-screen w-screen">
              <img src="/utils/svg/donelesson.gif" alt="done lesson" />
              <div className=' text-3xl text-blue-flag' > You final scores is {totalClickQuestions}/{totalClickQuestions} </div>
              <Link to='/lessons' className="flex flex-row justify-center items-center rounded-lg text-white bg-blue-flag text-2xl px-1 py-2 mt-2"><IoIosArrowBack />Return lessons</Link>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default LeassonSidebySide;
