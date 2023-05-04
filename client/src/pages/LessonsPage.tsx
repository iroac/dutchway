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
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3000/users/1');
      let user = response.data
      const hasValue = user.currentlyWords.some((innerArray: number[]) => innerArray[1] >= 20) 
      if(hasValue) {
// Taking the new wordsLearned
  const learnArray = user.currentlyWords.filter((innerArray: number[]) => innerArray[1] >= 20)
  user.wordsLearned.push(...learnArray)

// Taking the new currentlyWords
  const newArray = user.currentlyWords.filter((innerArray: number[]) => innerArray[1] < 20)

  // generates a new word to learn
const generateRandomNumber = () => {
let randomNumber = Math.floor(Math.random() * 2) + 1;      
let isWordLearned = user.wordsLearned.some((innerArray: number[]) => innerArray[0] === randomNumber)
let isWordLearning = newArray.some((innerArray: number[]) => innerArray[0] === randomNumber)        
    while (isWordLearned || isWordLearning) {             
    randomNumber = Math.floor(Math.random() * 2) + 1; 
    isWordLearned = user.wordsLearned.some((innerArray: number[]) => innerArray[0] === randomNumber)
    isWordLearning = newArray.some((innerArray: number[]) => innerArray[0] === randomNumber)
    }  
return [randomNumber, 0]
  }
 
// Push new Word to the newArray
const newWord = generateRandomNumber() 
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





