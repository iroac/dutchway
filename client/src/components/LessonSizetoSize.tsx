import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContextLessons, Word } from "../contexts/ContextLessons";

const LeassonSizetoSize = () => {
  const { user, currentlyWords, fetchData } = useContext(ContextLessons);
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
  }, []);
  return (
    <div>
      {questions.length > 0 ? (
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
      ) : (
        ""
      )}
    </div>
  );
};

export default LeassonSizetoSize;
