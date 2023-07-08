import { Link } from "react-router-dom";
import {WiDayCloudy} from 'react-icons/wi';

function LessonsPage() {
  
  return <div className="flex flex-col justify-start w-screen h-screen bg-slate-50">
    <div  className="flex flex-row justify-center items-center h-2/4 w-full bg-daily-gradient" >
    <Link to="/dailylesson" className="flex flex-col h-1/2 w-1/2 justify-center items-end cursor-pointer"> <WiDayCloudy className="text-9xl text-white" /></Link>
    <Link to="/dailylesson" className="flex flex-col h-1/2 w-1/2 justify-center items-start cursor-pointer"> <h1 className="text-2xl w-fit h-fit rounded-md bg-slate-50 text-blue-flag" >DAILY LESSON</h1> </Link>
    </div>
    
    <div className="flex flex-col h-1/4 mt-20" >
    <div className="flex flex-row justify-center items-center w-screen my-3 px-2 gap-10">
    <Link to="/sizetosizelesson" className=" flex flex-col shadow-md h-20 w-8/12 justify-center items-center bg-sidebyside-gradient cursor-pointer rounded-full hover:shadow-black hover:bg-sidebysidehover-gradient "> <h1 className="text-lg text-center text-white" >SIDE BY SIDE</h1> </Link>
    <Link to="/wordtowordlesson/eng" className=" flex flex-col shadow-md h-20 w-8/12 justify-center items-center bg-blue-flag cursor-pointer rounded-full hover:shadow-black"> <h1 className="text-md text-white" >WORDS - ENG/DUTCH</h1> </Link>
    </div>


    <div className="flex flex-row justify-center items-center w-screen px-2 mt-10 gap-5">
    <Link to="/phraseslesson/eng" className=" flex flex-col shadow-md h-20 w-3/12 rounded-full bg-red-flag justify-center items-center cursor-pointer hover:shadow-black"> <h1 className=" text-md text-center text-white" >PHRASES</h1> <h1 className=" text-md text-center text-white" >ENG/DUTCH</h1> </Link>
    <Link to="/phraseslesson/dutch" className=" flex flex-col shadow-md h-20 w-3/12 rounded-full bg-red-flag justify-center items-center cursor-pointer hover:shadow-black"> <h1 className="text-md text-center text-white" >PHRASES</h1> <h1 className="text-md text-center text-white" >DUTCH/ENG</h1>  </Link>
    <Link to="/wordtowordlesson/dutch" className=" flex flex-col shadow-md h-20 w-6/12 rounded-full bg-blue-flag justify-center items-center cursor-pointer hover:shadow-black"> <h1 className="text-md text-center text-white" >WORDS - DUTCH/ENG</h1> </Link>
    </div>
    </div>

<div className=" flex flex-col justify-end items-center h-1/4">
  
<div className=" flex flex-col justify-start items-center overflow-hidden w-screen h-animation-cut ">
    <img src="/utils/svg/learnpagegif.gif" alt="Animated GIF" className=" h-48 " />
    </div>
    
    </div>
  </div>;
}

export default LessonsPage;





