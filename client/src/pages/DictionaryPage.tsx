import { useEffect, useState } from 'react'
import axios from 'axios'

function DictionaryPage() {

  interface Word {
    id: string;
    dutch: string;
    english: string;
    phrases: string[];
  }

const [words, setWords] = useState<Word[]>([]);

let renderedEnglishWords  = words.map((word) => {
  return  <div className="flex flex-row gap-2 pb-5"  key={word.id}>
  <h3 className=" text-xl " >{word.english}</h3>
</div>
})


let renderedDutchWords  = words.map((word) => {
  return  <div className="flex flex-row gap-2 pb-5"  key={word.id}>
  <h3 className=" text-xl " >{word.dutch}</h3>
</div>
})

useEffect(() => {
  const fetchData = async () => {
    const res = await axios.get('http://localhost:3000/words')
    setWords(res.data)
  }
  fetchData()
}, [])

  return (
    <div>
      <div className="flex flex-row justify-center items-center pt-10 pb-16 " >
        <h1 className=" text-red-flag text-4xl " >DICTIONARY</h1>
        </div>


<div className="flex flex-row justify-center " >
        <div className="w-1/2 ml-10 " >
      <h3 className=" text-blue-flag text-3xl pb-5 " >Dutch</h3>
    <div className="flex flex-col justify-center">{renderedDutchWords}</div>
    </div>

      <div className="w-1/2" >
      <h3 className=" text-blue-flag text-3xl pb-5 " >English</h3>
    <div className="flex flex-col justify-center">{renderedEnglishWords}</div>
    </div>
</div>

    </div>
  )
}

export default DictionaryPage