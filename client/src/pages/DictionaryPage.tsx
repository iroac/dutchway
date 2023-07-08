import { useEffect, useState } from 'react'
import axios from 'axios'

interface Word {
  id: string;
  dutch: string;
  english: string;
  phrases: string[];
}
function DictionaryPage() {
const [words, setWords] = useState<Word[]>([]);

useEffect(() => {
  const fetchData = async () => {
    if (words.length === 0) {
      const res = await axios.get<Word[]>('http://localhost:3012/api/getwords');
      setWords(res.data);
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  fetchData();
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