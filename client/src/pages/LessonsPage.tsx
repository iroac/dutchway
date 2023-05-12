import {  useContext, useEffect } from 'react';
import { ContextLessons, User, Word, Phrases } from '../contexts/ContextLessons';
import { Link } from "react-router-dom";
import {BiBookBookmark} from 'react-icons/bi';

function LessonsPage() {
  const { user, currentlyWords, fetchData} = useContext(ContextLessons);

useEffect(() => {
  fetchData()
}, [])
  
  return <div className="flex flex-col items-center justify-center w-screen h-screen ">
    <div  className="flex flex-col justify-center items-center w-full" >
    <Link to="/dailylesson" className=" flex flex-col w-full shadow-md h-72 justify-center items-center cursor-pointer hover:shadow-blue-flag"> <BiBookBookmark className="text-8xl text-blue-flag" /> <h1 className="text-xl text-blue-flag" >DAILY LESSON</h1> </Link>
    </div>
    
    <div className="flex flex-row justify-center items-center w-screen">
    <Link to="/sizetosizelesson" className=" flex flex-col shadow-md h-52 w-8/12 justify-center items-center cursor-pointer hover:shadow-blue-flag"> <h1 className="text-md text-blue-flag" >SIDE BY SIDE WORDS</h1> </Link>
    <Link to="/wordtowordlesson/eng" className=" flex flex-col shadow-md h-52 w-4/12 justify-center items-center cursor-pointer hover:shadow-blue-flag"> <h1 className="text-md text-blue-flag" >WORDS - ENG/DUTCH</h1> </Link>
    </div>


    <div className="flex flex-row justify-center items-center w-screen">
    <Link to="/phraseslesson" className=" flex flex-col shadow-md h-52 w-4/12 justify-center items-center cursor-pointer hover:shadow-red-flag"> <h1 className="text-md text-red-flag" >PHRASES - ENG/DUTCH</h1> </Link>
    <Link to="/phraseslesson" className=" flex flex-col shadow-md h-52 w-4/12 justify-center items-center cursor-pointer hover:shadow-red-flag"> <h1 className="text-md text-red-flag" >PHRASES - DUTCH/ENG</h1> </Link>
    <Link to="/wordtowordlesson/dutch" className=" flex flex-col shadow-md h-52 w-4/12 justify-center items-center cursor-pointer hover:shadow-red-flag"> <h1 className="text-md text-red-flag" >WORDS - DUTCH/ENG</h1> </Link>
    </div>
  </div>;
}

export default LessonsPage;





