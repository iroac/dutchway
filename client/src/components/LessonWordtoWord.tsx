import {  useContext, useEffect, useState } from 'react';
import { ContextLessons, User, Word, Phrases } from '../contexts/ContextLessons';


function LessonWordtoWord() {
  const { user, currentlyWords, fetchData} = useContext(ContextLessons);
  const [point, setPoint] = useState()
  const [next, setNext] = useState(false)


  useEffect(() => {
fetchData()
  }, [])
  return (
    <div className="flex flex-col justify-center items-center mt-16 " >
      <div className="flex flex-col mx-auto shadow-md h-52 w-52 justify-center bg-blue-flag text-white text-3xl items-center cursor-pointer mb-12"> Dutch Word </div>
      <div className="flex flex-col mx-auto shadow-md h-20 w-full justify-center items-center cursor-pointer text-xl mb-4"> English Word </div>
      <div className="flex flex-col mx-auto shadow-md h-20 w-full justify-center items-center cursor-pointer text-xl mb-4"> English Word </div>
      <div className="flex flex-col mx-auto shadow-md h-20 w-full justify-center items-center cursor-pointer text-xl mb-4"> English Word </div>
      <div className="flex flex-col mx-auto shadow-md h-20 w-full justify-center items-center cursor-pointer text-xl mb-4"> English Word </div>
    </div>
  )
}

export default LessonWordtoWord