import { useState, ReactNode, createContext } from 'react'
import axios from 'axios'


export interface User {
  id: number;
  l_name: string;
  f_name: string;
  wordsLearned: number[][];
  currentlyWords: number[][];
  addWords: string[];
}
export interface Word {
  id: number;
  dutch: string;
  english: string;
  phrases: Phrases[];
}
export interface Phrases {
  dutch: string;
  english: string;
}

// Define the shape of context values
export interface MyContextValues {
  user: User | undefined;
  currentlyWords: Word[];
  fetchData: () => void;
}

// Create the context
export const ContextLessons = createContext<MyContextValues>({
  user: undefined,
  currentlyWords: [],
  fetchData: () => {},
});

export const MyContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | undefined>();
  const [currentlyWords, setCurrentlyWords] = useState<Word[]>([]);
  const [randomNumber, setRandomNumber] = useState<number>(0);
 
  const fetchData = async () => {
    const auth = await axios.get('https://dutchway.onrender.com/api/auth', {withCredentials: true})
    const response = await axios.get(`https://dutchway.onrender.com/api/getuser/${auth.data.id}`, {withCredentials: true});
    let user = response.data 
    user.currentlyWords = JSON.parse(user.currentlyWords);
    user.wordsLearned = JSON.parse(user.wordsLearned);
    const hasValue = user.currentlyWords.some((innerArray: number[]) => innerArray[1] >= 20) 

  // If contains some words with more them 20 point it will generate a new words based on the id.
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

// All Varibles below
// First if the learnWord is below 100 (The phrases is only from the 100 words, so it will returns another index below 100)
// Second if the learnWord is below 100 and all the first 100 words were already learn it will generates > 100 index
// Third if all the 1000 words were learn then it'll console.log a message for now
// Fourth if the words it's up to 100 and still has words remaining it'll generate a wordIndex above 100
let is100used = containAllWords(user.wordsLearned, 100)
let is1000used = containAllWords(user.wordsLearned, 1000)
let isWordLearned: boolean;
let isWordLearning: boolean;


if(learnWord[0][0] <= 100 && !is100used) {
 do {             
  setRandomNumber(Math.floor(Math.random() * 100) + 1)
  isWordLearned = user.wordsLearned.some((innerArray: number[]) => innerArray[0] === randomNumber)
  isWordLearning = newArray.some((innerArray: number[]) => innerArray[0] === randomNumber)
  } while (isWordLearned || isWordLearning)
  return [randomNumber, 0]
} else if (learnWord[0][0] <= 100 && is100used) {
 do {             
  setRandomNumber(Math.floor(Math.random() * 100) + 1)
  isWordLearned = user.wordsLearned.some((innerArray: number[]) => innerArray[0] === randomNumber)
  isWordLearning = newArray.some((innerArray: number[]) => innerArray[0] === randomNumber)
  } while (isWordLearned || isWordLearning || randomNumber <= 100)
  return [randomNumber, 0]
} else if(is1000used) {
console.log('You finish all the words')
} else {
   do {           
    setRandomNumber(Math.floor(Math.random() * 1000) + 1)
    isWordLearned = user.wordsLearned.some((innerArray: number[]) => innerArray[0] === randomNumber)
    isWordLearning = newArray.some((innerArray: number[]) => innerArray[0] === randomNumber) 
    } while (isWordLearned || isWordLearning || randomNumber <= 100)
    return [randomNumber, 0]
}
}

// Push new Word to the newArray
const newWord = generateNewWord() 
newArray.push(newWord)

// Put the new User on the database
      const newWords = {wordsLearned: JSON.stringify(user.wordsLearned), currentlyWords: JSON.stringify(newArray)} 
      console.log(newWords)
      const response = await axios.put(`https://dutchway.onrender.com/api/updateuser/${user.id}`, newWords); 
      user = response.data
      user.currentlyWords = JSON.parse(user.currentlyWords);
    user.wordsLearned = JSON.parse(user.wordsLearned);
    } 
 
    // Fetching user currently words  
    const wordPromises = user.currentlyWords.map(async (wordId: number[]) => {
        const response = await axios.get(`https://dutchway.onrender.com/api/getwords/${wordId[0]}`, {withCredentials: true});
        response.data.phrases = JSON.parse(response.data.phrases); 
        return response.data;
      });
      const words = await Promise.all(wordPromises); //Await every req and put on a array

      setUser(user)
      setCurrentlyWords(words); // Set the Currently Words 
  };

  const contextValue: MyContextValues = {
    user,
    currentlyWords,
    fetchData,
  };
  return (
    <ContextLessons.Provider value={contextValue}>
      {children}
    </ContextLessons.Provider>
  );

}

export default ContextLessons;