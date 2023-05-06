import { useParams } from 'react-router-dom';
import {  useContext, useEffect } from 'react';
import { ContextLessons, User, Word, Phrases } from '../contexts/ContextLessons';
import axios from 'axios'
import { Link } from "react-router-dom";
import {BiBookBookmark} from 'react-icons/bi';

function LessonsPage() {
  const { user, currentlyWords, fetchData} = useContext(ContextLessons);

useEffect(() => {
  fetchData()
}, [])
  
  const renderedWords = currentlyWords.map((word: Word) => {

    return (
      <div key={word.id} className="gap-10 mt-10 "  >
        <h1>{word.dutch}</h1>
        <h1>{word.english}</h1>
      
        {word.phrases && word.phrases.map((phrase: Phrases) => (
          <div>
            <p>{phrase.english}</p>
            <p>{phrase.dutch}</p>
            </div>
          ))}

      </div>
    );
  });
  return <div className="flex flex-col items-center justify-center w-screen">
    <div  className="flex flex-col justify-center items-center w-full" >
    <Link to="/dailylesson" className=" flex flex-col mx-4 w-full shadow-md h-52 mt-4 justify-center items-center cursor-pointer hover:shadow-blue-flag"> <BiBookBookmark className="text-8xl text-blue-flag" /> <h1 className="text-xl text-blue-flag" >DAILY LESSON</h1> </Link>
    </div>
    
    <div className="flex flex-row justify-center items-center w-screen">
    <Link to="/sizetosizelesson" className=" flex flex-col mx-4 shadow-md h-52 w-2/3 mt-4 justify-center items-center cursor-pointer hover:shadow-blue-flag"> <h1 className="text-xl text-blue-flag" >SIDE BY SIDE WORDS</h1> </Link>
    <Link to="/wordtowordlesson" className=" flex flex-col mx-4 shadow-md h-52 w-1/3 mt-4 justify-center items-center cursor-pointer hover:shadow-blue-flag"> <h1 className="text-sm text-blue-flag" >WORDS - ENG/DUTCH</h1> </Link>
    </div>


    <div className="flex flex-row justify-center items-center w-screen">
    <Link to="/phraseslesson" className=" flex flex-col mx-4 shadow-md h-52 w-1/3 mt-4 justify-center items-center cursor-pointer hover:shadow-red-flag"> <h1 className="text-xl text-red-flag" >SIDE BY SIDE WORDS</h1> </Link>
    <Link to="/phraseslesson" className=" flex flex-col mx-4 shadow-md h-52 w-1/3 mt-4 justify-center items-center cursor-pointer hover:shadow-red-flag"> <h1 className="text-sm text-red-flag" >WORDS - ENG/DUTCH</h1> </Link>
    <Link to="/wordtowordlesson" className=" flex flex-col mx-4 shadow-md h-52 w-1/3 mt-4 justify-center items-center cursor-pointer hover:shadow-red-flag"> <h1 className="text-sm text-red-flag" >WORDS - ENG/DUTCH</h1> </Link>
    </div>

    <div>
      {renderedWords}
    </div>
  </div>;
}

export default LessonsPage;





