import { useEffect, useState } from 'react'
import axios from 'axios'

function DictionaryPage() {

  interface Word {
    _id: string;
    Dutch: string;
    English: string;
  }

const [words, setWords] = useState<Word[]>([]);

let renderedWords  = words.map((word) => {
  return  <div className="flex flex-row gap-2 pb-5"  key={word._id}>
  <h3>{word.Dutch}</h3>
  <h3>{word.English}</h3>
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
      <div className="flex flex-row gap-2 justify-center items-center" >
        <h1>Dutch</h1>
        <h1>English</h1>
      </div>
    <div className="flex flex-col justify-center items-center" >{renderedWords}</div>
    </div>
  )
}

export default DictionaryPage