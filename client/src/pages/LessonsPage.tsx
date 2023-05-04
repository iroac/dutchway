import { createApi } from 'unsplash-js';
import React, { useState, useEffect } from 'react';
import axios from 'axios'


function LessonsPage() {
  const [user, setUser] = useState<User | undefined>();
  const [currentlyWords, setCurrentlyWords] = useState<Word[]>([]);
  interface User {
    id: string;
    name: string;
    wordsLearned: number[][];
    currentlyWords: number[][];
    addWords: string[];
  }
  interface Word {
    id: string;
    dutch: string;
    english: string;
    phrases: string[][];
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

if(learnWord[0][0] <= 100 && !is100used) {
  console.log('me')
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
  console.log('it was me')
    while (isWordLearned || isWordLearning) {             
      randomNumber = Math.floor(Math.random() * 1000) + 1; 
      isWordLearned = user.wordsLearned.some((innerArray: number[]) => innerArray[0] === randomNumber)
      isWordLearning = newArray.some((innerArray: number[]) => innerArray[0] === randomNumber)
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
    };
    fetchData();
  }, []);


  const renderedWords = currentlyWords.map((word: Word) => {
    return (
      <div key={word.id}>
        <h1>{word.dutch}</h1>
        <h1>{word.english}</h1>
      </div>
    );
  });
  return <div>{renderedWords}</div>;
}

export default LessonsPage;





