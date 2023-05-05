import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";
import {BiBookBookmark} from 'react-icons/bi';

function LessonsPage() {
  const [user, setUser] = useState<User | undefined>();
  const [currentlyWords, setCurrentlyWords] = useState<Word[]>([]);
  interface User {
    id: string;
    name: string;
    wordsLearned: number[][];
    currentlyWords: number[];
    addWords: string[];
  }
  interface Word {
    id: string;
    dutch: string;
    english: string;
    phrases: Phrases[];
  }
  interface Phrases {
    dutch: string;
    english: string;
  }


  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3000/users/1');
      let user = response.data
      const hasValue = user.currentlyWords.some((innerArray: number[]) => innerArray[1] >= 20) 
      if(hasValue) {
// Taking the new Learn Word
  const learnWord = user.currentlyWords.filter((innerArray: number[]) => innerArray[1] >= 20)
  user.wordsLearned.push(...learnWord)

// Taking the new currentlyWords
  const newArray = user.currentlyWords.filter((innerArray: number[]) => innerArray[1] < 20)

  // generates a new word to learn
const generateNewWord = () => {
  function containAllWords(arrays: number[][], number: number): boolean {
    const flattenedArray = arrays.map(arr => arr[0]);
    const set = new Set(flattenedArray);
  
    for (let i = 1; i <= number; i++) {
      if (!set.has(i)) {
        return false;
      }
    }
  
    return true;
  }

let is100used = containAllWords(user.wordsLearned, 100)
let is1000used = containAllWords(user.wordsLearned, 1000)
let randomNumber = Math.floor(Math.random() * 100) + 1; 
let isWordLearned = user.wordsLearned.some((innerArray: number[]) => innerArray[0] === randomNumber)
let isWordLearning = newArray.some((innerArray: number[]) => innerArray[0] === randomNumber)  

// All Varibles below
// First if the learnWord is below 100 (The phrases is only from the 100 words, so it will returns another index below 100)
// Second if the learnWord is below 100 and all the first 100 words were already learn it will generates > 100 index
// Third if all the 1000 words were learn then it'll console.log a message for now
// Fourth if the words it's up to 100 and still has words remaining it'll generate a wordIndex above 100
if(learnWord[0][0] <= 100 && !is100used) {
  while (isWordLearned || isWordLearning) {             
    randomNumber = Math.floor(Math.random() * 100) + 1; 
    isWordLearned = user.wordsLearned.some((innerArray: number[]) => innerArray[0] === randomNumber)
    isWordLearning = newArray.some((innerArray: number[]) => innerArray[0] === randomNumber)
    }   
    return [randomNumber, 0]
} else if (learnWord[0][0] <= 100 && is100used) {
  while (isWordLearned || isWordLearning || randomNumber <= 100) {             
    randomNumber = Math.floor(Math.random() * 1000) + 1; 
    isWordLearned = user.wordsLearned.some((innerArray: number[]) => innerArray[0] === randomNumber)
    isWordLearning = newArray.some((innerArray: number[]) => innerArray[0] === randomNumber)
    } 
    return [randomNumber, 0]
} else if(is1000used) {
console.log('You finish all the words')
} else {
    while (isWordLearned || isWordLearning || randomNumber <= 100) {           
      randomNumber = Math.floor(Math.random() * 1000) + 1; 
      isWordLearned = user.wordsLearned.some((innerArray: number[]) => innerArray[0] === randomNumber)
      isWordLearning = newArray.some((innerArray: number[]) => innerArray[0] === randomNumber)
      console.log(randomNumber)     
      }   
      return [randomNumber, 0]
}
  }
 
// Push new Word to the newArray
const newWord = generateNewWord() 
newArray.push(newWord)

// Put the new User on the database
        const newUser = {id: user.id, name:user.name, wordsLearned:user.wordsLearned, currentlyWords:newArray} 
        const response = await axios.put(`http://localhost:3000/users/${user.id}`, newUser);
        user = response.data
      }

      // Fetching user currently words 
      const wordPromises = user.currentlyWords.map(async (wordId: number[]) => {
          const response = await axios.get(`http://localhost:3000/words/${wordId[0]}`);
          return response.data;
        });
        const words = await Promise.all(wordPromises); //Await every req and put on a array

        setUser(user)
        setCurrentlyWords(words); // Set the Currently Words 
        console.log(words)
    };
    fetchData();
  }, []);
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
    <Link to="/posts" className=" flex flex-col mx-4 w-full shadow-md h-52 mt-4 justify-center items-center cursor-pointer hover:shadow-blue-flag"> <BiBookBookmark className="text-8xl text-blue-flag" /> <h1 className="text-xl text-blue-flag" >DAILY LESSON</h1> </Link>
    </div>
    
    <div className="flex flex-row justify-center items-center w-screen">
    <Link to="/posts" className=" flex flex-col mx-4 shadow-md h-52 w-2/3 mt-4 justify-center items-center cursor-pointer hover:shadow-blue-flag"> <h1 className="text-xl text-blue-flag" >SIDE BY SIDE WORDS</h1> </Link>
    <Link to="/posts" className=" flex flex-col mx-4 shadow-md h-52 w-1/3 mt-4 justify-center items-center cursor-pointer hover:shadow-blue-flag"> <h1 className="text-sm text-blue-flag" >WORDS - ENG/DUTCH</h1> </Link>
    </div>


    <div className="flex flex-row justify-center items-center w-screen">
    <Link to="/posts" className=" flex flex-col mx-4 shadow-md h-52 w-1/3 mt-4 justify-center items-center cursor-pointer hover:shadow-red-flag"> <h1 className="text-xl text-red-flag" >SIDE BY SIDE WORDS</h1> </Link>
    <Link to="/posts" className=" flex flex-col mx-4 shadow-md h-52 w-1/3 mt-4 justify-center items-center cursor-pointer hover:shadow-red-flag"> <h1 className="text-sm text-red-flag" >WORDS - ENG/DUTCH</h1> </Link>
    <Link to="/posts" className=" flex flex-col mx-4 shadow-md h-52 w-1/3 mt-4 justify-center items-center cursor-pointer hover:shadow-red-flag"> <h1 className="text-sm text-red-flag" >WORDS - ENG/DUTCH</h1> </Link>
    </div>
  </div>;
}

export default LessonsPage;





