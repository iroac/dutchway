import { useEffect, useState } from 'react'
import jsonData from './words.json'; // Import your JSON data directly

interface Word {
    id: number;
    dutch: string;
    english: string;
    phrases: {
        dutch: string;
        english: string;
    }[];
};

function DictionaryPage() {
const [words, setWords] = useState<Word[]>([]);

// eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(() => {
  setWords(jsonData.words);
})

  return (
    <div>
      <div className="flex flex-row justify-center items-center pt-10 pb-16 " >
        <h1 className=" text-red-flag text-4xl " >DICTIONARY</h1>
        </div>


<div className="flex flex-row justify-center " >
        <div className="w-1/2 ml-10 " >
      <h3 className=" text-blue-flag text-3xl pb-5 " >Dutch</h3>
    <div className="flex flex-col justify-center">   {words.map((word) => (
              <div className="flex flex-row gap-2 pb-5" key={word.id}>
                <h3 className="text-xl">{word.dutch}</h3>
              </div>
            ))}</div>
    </div>

      <div className="w-1/2" >
      <h3 className=" text-blue-flag text-3xl pb-5 " >English</h3>
    <div className="flex flex-col justify-center">{words.map((word) => (
              <div className="flex flex-row gap-2 pb-5" key={word.id}>
                <h3 className="text-xl">{word.english}</h3>
              </div>
            ))}</div>
    </div>
</div>

    </div>
  )
}

export default DictionaryPage